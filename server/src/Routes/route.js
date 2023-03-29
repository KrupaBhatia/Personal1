const express = require("express")
const router = express.Router();

const { applyForm, getStatus } = require('../Controllers/formController')
const admin = require('../Controllers/adminController')
// const middleware = require('../Controllers/middleware')

// Form Apply 
router.post('/ApplyForm', applyForm)

// Get Status 
router.get('/status/:unique_id', getStatus)

// Admin Login
router.post('/adminLogin', admin.adminLogin)
router.post('/login',admin.login)
router.get('/getData',admin.getData)
router.get("/getstatus" ,admin.getstatusByQuery)
router.put("/update/:id" , admin.updateCompleted)
router.get("/getById/:id" , admin.getById)
// router.get("/token", middleware.authmid ,admin.tokenAccess)



module.exports = router; 