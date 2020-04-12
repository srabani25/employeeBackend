const homeRouter = require('./home.route')
const userRouter = require('./user.route')
const authenticateRouter = require('./authenicate.route')
const express =require('express')
const router = express.Router()
const jwtHelper = require('../config/jwtHelper');

router.use('/home',jwtHelper.verifyJwtToken ,homeRouter)
router.use('/user', userRouter)
router.use('/authenticate',jwtHelper.verifyJwtToken , authenticateRouter)


module.exports = router