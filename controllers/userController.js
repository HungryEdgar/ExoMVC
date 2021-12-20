let User = require("../models/userModel");
let Formation = require("../models/userModel");



exports.home = function(req, res) {
    res.render('home.ejs');
}    

exports.login = function(req, res) {
    res.render('login.ejs');
}

exports.basket = function(req, res) {
    res.render('basket.ejs');
}

exports.flogin = function(req, res) {
    res.render('finalLogIn.ejs');
}


