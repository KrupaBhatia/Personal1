// const mySqlConnection = require('../connection')
const shortid = require('shortid');
const formModel = require('../Models/formModel');

const {sendMail} = require('../nodemailer/sendMail')


const applyForm = async (req, res) => {
   try {
      const data = req.body
      const {
         first_name, last_name, email, phone, gender,
         date_of_birth, expected_date_of_journey,
         nationality, passport_type, port_of_arrival } = data

      if (!first_name) {
         return res.status(400).send({ status: false, msg: "first_name is required" })
      }
      if (!last_name) {
         return res.status(400).send({ status: false, msg: "last_name is required" })
      }
      if (!email) {
         return res.status(400).send({ status: false, msg: "email is required" })
      }
      if (!phone) {
         return res.status(400).send({ status: false, msg: "phone is required" })
      }
      if (!gender) {
         return res.status(400).send({ status: false, msg: "gender is required" })
      }
      // if (!port_of_arrival) {
      //    return res.status(400).send({ status: false, msg: "port_of_arrival is required" })
      // }


      if (typeof first_name !== "string") {
         return res.status(400).send({ status: false, msg: "first_name should be in string" })
      }
      if (typeof last_name !== "string") {
         return res.status(400).send({ status: false, msg: "last_name should be in string" })
      }
      // if (typeof phone !== "number") {
      //    return res.status(400).send({ status: false, msg: "phone should be in digits" })
      // }

      // generate and insert uniqueId with particular per form
      let unique_id = shortid.generate();


      // phone parse into integer  to save in my sql
      // const parsedPhone = parseInt(phone)

      let finalData = {
         unique_id: unique_id,
         first_name: first_name,
         last_name: last_name,
         email: email,
         phone: phone,
         gender: gender,
         date_of_birth: date_of_birth,
         expected_date_of_journey: expected_date_of_journey,
         nationality: nationality,
         // passport_type: passport_type,
         port_of_arrival: port_of_arrival,

      }
      
      const saveForm = await formModel.create(finalData)
      res.status(201).send({ status: true, msg: "Data Created", data: saveForm })

      await sendMail(email, 'Applicant Id' , `Thanks for applying here is your tracking Application Id - ${finalData.unique_id}`);
      // res.status(201).send({ message: "Application id sent to your same email account" });
 
   } catch (error) {
      console.log(error)
      res.status(500).send({
         status: false,
         msg: error.message
      })
   }
}

const getStatus = async (req, res) => {
   try {

      let unique_id = req.params.unique_id;

      const findStatus = await formModel.findOne({ unique_id })
      if (!findStatus) return res.status(404).send({ status: false, msg: "This unique id doesn't exists" })

      currentStatus = findStatus.status
      // show status if completed and payment done that they can download visa
      if (currentStatus === 'completed') {
         // that they can download
         res.status(200).send({ status: true, message: "Your Visa Status is - Completed (Make payment & you can download Your Visa)" })
      } else {
         res.status(200).send({ status: true, message: `Your Application Status Is ${currentStatus}` })
      }

   } catch (error) {
      console.log(error)
      res.status(500).send({
         status: false,
         msg: error.message
      })
   }
}

module.exports = { applyForm, getStatus }


