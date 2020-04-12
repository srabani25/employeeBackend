// check env.
require('../model/user.model')
const mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];
// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

