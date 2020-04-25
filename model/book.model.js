const mongoose = require('mongoose');
const schema = mongoose.Schema;
var BookSchema = new schema({
    name: {type: String, required: true },
    author: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Book', BookSchema);