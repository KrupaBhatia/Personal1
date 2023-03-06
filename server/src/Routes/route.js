const express = require("express")
const router = express.Router();

const { applyForm, getStatus } = require('../Controllers/formController')
const {adminLogin} = require('../Controllers/adminController')

// Form Apply 
router.post('/ApplyForm', applyForm)

// Get Status 
router.get('/status/:unique_id', getStatus)

// Admin Login
// router.post('/adminLogin', adminLogin)


//API for wrong route-Of-API
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "The api you request is not available"
    })
})

module.exports = router; 