const { model } = require("mongoose");
const { findOne } = require("../model/model");
const Model = require("../model/model");

const create1  =async (req, res ) => {
    const data = req.body 
    const {shortform , fullform} = data 


    const saveData = await Model.create(data);
    return res.status(201).send({status: true,message: "Success",data: saveData});
}
module.exports.create1 = create1


const get1  =async (req,res) => {
 
    let data= req.body

    const {shortform} = data
    const findData = await Model.findOne({shortform , isDeleted : false})
    console.log(findData)

    if(!findData) return res.status(404).send({status: false,message: "no such data!! "});

    return res.status(200).send({status: true,message: "Success",data: findData});


}
module.exports.get1 = get1


const del  =async (req, res ) => {
 
    let data  = req.body 
    const {shortform} = data

    const delData = await Model.findOneAndUpdate({shortform}, { $set: { isDeleted: true }},{ new: true })
    return res.status(200).send({ status: true, message: "Success", data: delData })
}
module.exports.del = del
