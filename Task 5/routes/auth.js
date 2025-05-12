const express = require('express');
const {Register,Login,Profile} = require('../controller/authController')
const AuthMiddle = require('../middleware/authMiddleware')
const LimitFunc = require('../security/security')



const router = express.Router();

router.post('/register',Register)
router.post('/login',LimitFunc,Login)
router.get('/profile',AuthMiddle,Profile);

module.exports = router;