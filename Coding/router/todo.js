const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../utils/jwt');

router.get('/home', (req,res) =>{
    const {id, email,name} = req.user;
    res.render('index.ejs', {id:id, email:email, name:name});
});

module.exports = router;