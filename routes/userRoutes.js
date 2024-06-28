const express = require("express");
const router = express();
const userModel = require('../Models/User-model');

router.get('/', (req,res)=>{
    res.send("hello");
})

router.post('/register', async (req,res)=>{
    try{
   
        let {fullname , password , email} = req.body;
        let ifUser = await userModel.find({"email":email});
        if(ifUser.length>0){
            res.send("user already exist");
            return;
        }
        let user = await userModel.create({
            fullname,
            password,
            email,
        })
        res.send(user);
  
    }catch(err){
    res.send(err.message);
    }
})

module.exports = router;