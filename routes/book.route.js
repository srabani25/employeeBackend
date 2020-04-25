const express = require('express');
const router = express.Router();
const book_controller = require('../controller/book.controller');
router.post('/create', (req, res) => {
    return  book_controller.create_Book(req, res)
})
router.get('/all', (req,res) => {
   return book_controller.book_all(req, res)
})
router.delete('/delete', (req,res) => {
   return book_controller.book_delete(req, res)
})

module.exports = router;