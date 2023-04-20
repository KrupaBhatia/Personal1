const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller')
const test = require('./test')

router.post('/create', Controller.create1);
router.get('/get',Controller.get1);
router.delete('/delt',Controller.del);

router.post('/api', test.api)


module.exports = router;