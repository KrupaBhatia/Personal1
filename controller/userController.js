const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer')
const randomstring = require('randomstring');
const config = require('../config/config');


const alphaOnly = function (value) {
    let regexaAlpha = /^[A-z]*$|^[A-z]+\s[A-z]*$/
    return regexaAlpha.test(value)
}
const validEmail = function (value) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regexEmail.test(value)
}


const valid = function (value) {
    if (typeof (value) === 'undefined' || value === null) return false
    if (typeof (value) === "string" && value.trim().length == 0) return false
    return true
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const createUser = async function (req, res) {
    try {
        const data = req.body

        if (Object.keys(data).length == 0)
            return res.status(400).send({ status: false, message: "please provide data" });

        let { name, phone, email, password } = data

        if (!valid(name)) return res.status(400).send({ status: false, message: "Please give name" })
        if (!alphaOnly(name)) return res.status(400).send({ status: false, message: "In lname use only alphabets.." })


        if (!valid(phone)) return res.status(400).send({ status: false, message: "Please give phone no." })
        let regexPhone = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
        if (!regexPhone.test(phone)) return res.status(400).send({ status: false, message: "Please give phone no. in proper format" })
        let existPhone = await userModel.find({ phone: phone })
        if (existPhone.length != 0) return res.status(400).send({ status: false, message: `${phone} is already exist` })

        if (!valid(email)) return res.status(400).send({ status: false, message: "Please give email" })
        if (!validEmail(email)) return res.status(400).send({ status: false, message: "Please give email in proper format" })
        let existEmail = await userModel.find({ email: email })
        if (existEmail.length != 0) return res.status(200).send({ status: false, message: `${email} is already exist` })


        if (!valid(password)) return res.status(400).send({ status: false, message: "Please give password" })
        let regexPassword = /^.{8,15}$/
        if (!regexPassword.test(password)) return res.status(400).send({ status: false, message: "In password use minimum 8 and maximum 15 character" })



        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt); //hashing the password by using salt 
        req.body.password = hashedPass; //setting hashed pass in data to send it in res

        let userData = await userModel.create(data)
        return res.status(201).send({  data: userData ,status: true, message: 'Success'})

    } catch (err) { return res.status(500).send({ status: false, message: err.message }) }

}
module.exports.createUser = createUser

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const login = async function (req, res) {
    try {
        let { email, password } = req.body;

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, messege: "please enter data in request body" });
        }

        if (!email)
            return res.status(400).send({ status: false, messege: "please enter email" });


        if (!password)
            return res.status(400).send({ status: false, messege: "please enter password " });


        let userData = await userModel.findOne({ email: email });
        if (!userData) {
            return res.status(404).send({ status: false, messege: "no data found " });
        }


        let checkPassword = await bcrypt.compare(password, userData.password); //decrypting hashed pass to compare/verify with original one


        if (!checkPassword)
            return res.status(400).send({ status: false, messege: "Login failed!! password is incorrect." });
        let userId = userData._id

        const token = jwt.sign({
            userId: userId,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60
        }, 'tech')

        return res.status(200).send({ data: { userId: userId, Token: token } , status: true, message: "LogIn Successful!!"});

    } catch (err) {

        return res.status(500).send({ status: false, error: err.message });

    }
}



module.exports.login = login;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sendSetPassMail  = async(name , email , token) =>{
    try{
        const transporter = nodeMailer.createTransport({
        host : 'smtp.gmail.com',
        port : 587,
        secure: false,
        requireTLS:true,
        auth:{
            user:config.emailUser,
            pass:config.emailPassword
        }
        });
        const mailOptions = {
            from: config.emailUser,
            to:email,
            subject : "for Reset Password",
            html : '<p> Hi '+ name + ', Please copy the link and <a href="http://127.0.0.1:3000//api/v1/usermng/reset-password?token=' + token+'"> reset your password </a>'
        }

        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error)
            }else{
                console.log("mail has been sent : ", info.response)
            }
        })
        

    }
    catch(err){
        return res.status(500).send({ status: false, error: err.message });
    }
}



let forgotPassword = async (req, res) => {
    try {
        let email = req.body.email

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, messege: "please enter data in request body" });
        }
        if (!email)
            return res.status(400).send({ status: false, messege: "please enter email" });

        
        let userData = await userModel.findOne({ email : email });
        console.log(userData)
        if (userData) {
            const randomString = randomstring.generate();
            const data = await userModel.updateOne({email:email},{$set:{token:randomString}});
            sendSetPassMail(userData.name,userData.email,randomString)
            res.status(200).send({status: true , msg:"check your mail indox"})
        }
            else{
            return res.status(404).send({ status: false, messege: "no data found " });
        }

    }
    catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}
module.exports.forgotPassword = forgotPassword;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let resetPassword = async function (req,res){
    try{
        const token = req.query.token;
        const tokenData = await userModel.findOne({token : token })

        if(tokenData){
            const password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt); //hashing the password by using salt 
            req.body.password = hashedPass; //setting hashed pass in data to send it in res

            const userData = await userModel.findByIdAndUpdate({_id:tokenData._id},{$set:{password:hashedPass,token:''}},{new:true})
            return res.status(200).send({data:userData,status: true, messege: "new password set"});
        }else{
            return res.status(401).send({ status: true, messege: "token expired" });
        }

    }
    catch(error){

    }
}
module.exports.resetPassword = resetPassword;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////