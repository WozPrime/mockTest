const express = require('express');
const router = express.Router();

const auth = require('./auth');
const todo = require('./todo');


router.use(auth);
router.use(todo);


module.exports = router;