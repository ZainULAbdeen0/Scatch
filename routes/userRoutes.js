const express = require("express");
const router = express();
const userModel = require('../Models/User-model');
const {registerUser} = require('../Controllers/authUserController')


router.get('/', (req,res)=>{
    res.send("hello");
})

router.post('/register' , registerUser)

module.exports = router;