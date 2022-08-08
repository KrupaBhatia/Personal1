const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const axiosController = require('../controller/axiosController');



router.post('/user',userController.users)
router.get('/userLogin',userController.userLogin)
router.get('/getmoviesById',axiosController.getmoviesById)
router.get('/getmoviesByTitle',axiosController.getmoviesByTitle)


module.exports = router;