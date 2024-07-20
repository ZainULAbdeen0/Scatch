const express = require("express");
const router = express();
const productSchema = require('../Models/Product-model');
const upload = require('../config/multer-config');
const mongoose = require('mongoose');

router.post('/create', upload.single("image") , async (req,res)=>{
    const {name , price , discount , bgcolor , panelcolor , textcolor} = req.body;
        const product = await productSchema.create({
        image : req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,

    })
    req.flash("success" , "Product created successfully");
    res.redirect("/owner/admin")
})

module.exports = router;