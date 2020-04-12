const express =require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

router.post('/getUser',  (req,res) => {
   return userController.getUser(req, res)
})


module.exports = router;