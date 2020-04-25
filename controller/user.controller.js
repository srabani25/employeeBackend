const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const User = mongoose.model('User');
const userController = {}

userController.createUser = function (req, res) {
    console.log(req.body);
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email
    user.password = req.body.password
    user.save((err, doc) => {
        if (!err)
            // res.send(doc);
            res.status(200).send({status:200, msg:'User Creation Succesful kindly Proceed to LogIn'});
        else {
            if (err.code == 11000)
                res.status(422).send({status:422, msg:'Duplicate email adrress found.'});
            else
                res.status(400).send({status:400, msg: err});
        }
    });
}
userController.authenticateUser = function (req, res) {
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt(), "status": 200 });
        // unknown user or wrong passwordb
        else return res.status(404).json(info);
    })(req, res);
}
userController.getUser = function (req, res) {
    User.findOne({ _id: req.body.id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}

module.exports = userController