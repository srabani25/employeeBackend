const mongoose = require('mongoose');
const Book = require('../model/book.model');
// const Book = mongoose.model('Book');
const bookController = {}
bookController.create_Book = function (req, res) {
    let book = new Book(
        {
            name: req.body.bookName,
            author: req.body.authorName,
            price: req.body.price
        }
    );
     book.save(function (err) {
        if (err) {
            return res.status(400).json({msg:err,status :400});
        }
        res.status(200).json({msg: "creation of book is success", status: 200});
    })
};
bookController.book_all = function (req, res) {
    Book.find(function (err, book) {
        if (err) return res.status(400).json({msg:err,status :400});
        res.send(book);
    })
};

bookController.book_delete = function (req, res) {
    Book.findByIdAndDelete(req.body.id, function (err) {
        if (err) return res.status(400).json({msg:err,status :400});
        res.status(200).json({msg: "Record of book Del Sucess", status: 200});
    })
};

module.exports = bookController