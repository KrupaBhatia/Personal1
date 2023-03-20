const loginSchema = require("../models/adminLogin");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const formModel = require('../Models/formModel');


const adminLogin = async function (req, res) {
   try {
     let data = req.body;
 
     if (!data.email) {
       return res
         .status(400)
         .send({ status: false, message: " email is required" });
     }
     if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(data.email)) {
       return res
         .status(400)
         .send({ status: false, message: "invalid emailId" });
     }
     let email = await loginSchema.findOne({ email: data.email });
     if (email) {
       return res
         .status(400)
         .send({ status: false, message: "email already exists" });
     }
 
     if (!data.password) {
       return res
         .status(400)
         .send({ status: false, message: "password is required" });
     }
 
     if (!/^[a-zA-Z0-9'@&#.\s]{8,15}$/.test(data.password)) {
       return res
         .status(400)
         .send({ status: false, message: "password dosent match with formate" });
     }
 
     let userCreated = await loginSchema.create(req.body);
     return res
       .status(201)
       .send({ status: true, data: userCreated, msg: "created" });
   } catch (err) {
     res.status(500).send({ error: err.message });
     console.log(err);
   }
 };



 let login = async (req, res) => {
   try {
     let { email, password } = req.body;
     const newRecord = await loginSchema.findOne({
       email: email,
       password: password,
     });
 
     if (!newRecord)
       return res.send({ massage: "credentials passed does not match" });
     let date1 = new Date().getTime() + 60 * 60 * 24 * 1000;
     let token = jwt.sign(
       {
         userId: newRecord._id.toString(),
         iat: date1,
         exp: date1,
       },
       "evisa" //secrete Key
     );
 
     return res
       .status(200)
       .send({ status: true, message: "Success", data: { Token: token } });
   } catch (error) {
     res.send("Error");
     console.log(error);
   }
 };
 

const getData = async function(req,res){
      try {
        let data = await formModel.find()
         res.status(200).send({message : "success" , data : data})

      }
      catch (error) {
         res.send("Error");
       }
}


const getstatusByQuery = async function(req,res){
        try { let data = req.query
        const{status} = data 
          

        let query = await formModel.find({status : status})
        res.send({message : "success" , data : query})

        }
        catch (error) {

          res.send(error);
          
        }}


const updateCompleted = async function(req,res){
     try {  let id = req.params.id
      
      const {status}= req.body
      console.log(status, id);

      let update = await formModel.findOneAndUpdate({_id : id} ,{status : status}, {new : true} )
      console.log(update);
      return res.send({message : "success" , data : update})
      
     }
     catch (error) {

      res.send(error);
      
    }

}

const getById = async function(req,res){
  try {  
    
    let custId = req.params._id
    let result = await formModel.findByIdAndUpdate(custId)
        return  res.status(200).send({message : "success" , data : result})
}
  catch (error) {

   res.send(error);
   
 }

}


module.exports = { adminLogin , login , getData ,getstatusByQuery , updateCompleted , getById}

