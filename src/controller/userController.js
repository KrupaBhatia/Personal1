const userModel = require("../model/userModel");
// const jwt = require("jsonwebtoken");

// ========================================[create-user]====================================================================

const users= async function (req, res) {
  try{
     let data=req.body

    if (Object.keys(data).length === 0) return res.status(400).send({ msg: "please provide sufficient data " })

    if(!data.name ){
     return res.status(400).send({status:false,message:"user  name is required"})
    }

    if(!/^[a-zA-Z]{2,}$/.test(data.name)){
        return res.status(400).send({status:false,message:"first name is not in right format"})
    
    }

    if (!data.phone) return res.status(400).send({ status: false, message: "Please give phone no." })
        let regexPhone = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
        if (!regexPhone.test(phone)) return res.status(400).send({ status: false, message: "Please give phone no. in proper format" })
        let existPhone = await userModel.find({ phone: phone })
        if (existPhone.length != 0) return res.status(400).send({ status: false, message: `${phone} is already exist` })
    
    
        if(!data.email){
      return res.status(400).send({status:false,message:" email is required"})
    }
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(data.email)) {
      return res.status(400).send({status: false,message: "invalid emailId"});
    }

    if(!data.password){
        return res.status(400).send({status:false,message:" password is required"})
    }
    let regexPassword = /^.{8,15}$/
        if (!regexPassword.test(password)) return res.status(400).send({ status: false, message: "In password use minimum 8 and maximum 15 character" })
    
       let userCreated =await userModel.create(req.body)
       return res.status(201).send({status:true,date:userCreated, msg:"created"}) 

    }
    catch (err) {
      res.status(500).send({error: err.message})
    }
  };


// =======================================userLogin=============================================================

const userLogin = async function (req, res) {
    try {
      const { email, password } = req.body
      if(!email){
        return res.status(400).send({status:false,message:"plz provide email "})
      }
      if(!password){
      return res.status(400).send({status:false,message:"plz provide password "})
      }
      let userData = await userModel.findOne({ email: email, password:password });
  
      if (!userData) return res.status(400).send({ status: false, msg: "Bad request",msg:"user not found" });
  
      let token = jwt.sign(
        {
          user_Id: userData._id.toString(), //payload
          expiredate: "30d"
        },
        "My Personal"   // SECRET KEY
      );
      res.setHeader("x-api-key", token);       
      res.status(201).send({ status: true, token: token, msg:"login successfull" });
     } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
     }
    }


module.exports.users = users
module.exports.userLogin = userLogin