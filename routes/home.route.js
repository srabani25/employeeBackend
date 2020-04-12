const express =require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hi from home router')
})



module.exports = router