const express =require('express')
const router = express.Router()
const jwtHelper = require('../config/jwtHelper');
const userController = require('../controller/user.controller')
router.post('/createUser', (req, res) => {
    return userController.createUser(req, res)
})
router.post('/autheticateUser', (req,res) => {
   return userController.authenticateUser(req, res)
})


module.exports = router