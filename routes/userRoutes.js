const express = require("express");
const router = express();

router.get('/', (req,res)=>{
    res.send("hello");
})

module.exports = router;