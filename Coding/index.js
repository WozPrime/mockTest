require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const flash = require('express-flash');
const session = require('express-session');
const passport = require('./utils/passport');


const routers = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(session({ 
    secret:"secret",
    resave: false,
    saveUninitialized:true
}));
app.use(flash()); 
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,'./app/views')); //mengubah folder views ke app view


app.use(routers);


app.get('/', function (req,res) {
    console.log("Tlle"+req.user);

    res.send('Selamat Datang!');
})


app.listen(port, async ()=> 
    console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = app;