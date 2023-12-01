const express = require('express');
const router = express.Router();

const controller = require('../app/controllers');
const passport = require('../utils/passport');


router.post('/register',controller.auth.registerForm);
router.get('/register', (req,res)=>{
    res.render('register.ejs');
});

router.get('/login', (req,res)=>{
    res.render('login.ejs');
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
}));


module.exports = router;