const express = require("express");
const router = express();
let ownerModel = require('../Models/owner-model');

router.get('/', async(req,res)=>{
    res.send("Everything just fine");
})



if(process.env.NODE_ENV == "development")
{
    router.post('/create', async (req,res)=>{
        let {fullname , email , password , contact} = req.body;
        let owners = await ownerModel.find();
        if(owners.length>0) {
            res.send({
                "response" : "Their can be only 1 owner",
            })
            return
        }else{
        let createdOwner  = await ownerModel.create({
            fullname,
            email, 
            password, 
            contact
        })
        res.send(createdOwner);
    }
       })
}


module.exports = router;