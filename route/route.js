const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')



router.post('/api/v1/usermng/createuser', userController.createUser);
router.post('/api/v1/usermng/login', userController.login);

router.post('/api/v1/usermng/forgotPass', userController.forgotPassword);
router.get('/api/v1/usermng/reset-password' , userController.resetPassword);

module.exports = router;