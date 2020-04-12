// imports
require('./config/config')
require('./config/passportConfig')
const indexRouter = require('./routes/index.route')
var express=require('express')
var bodyParser=require('body-parser')
var cors=require('cors')
const passport = require('passport')

var app = express()

// middelware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use('/api', indexRouter)
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

app.listen(process.env.PORT, () => {
   console.log("Server running at 3000")
})
