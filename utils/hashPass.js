const bcrypt = require('bcrypt');

const hashedPass = (pass)=>{
    bcrypt.genSalt(10 , (err , salt)=>{
        bcrypt.hash(pass , salt , (err , hash)=>{
            return hash;
        })
    })
}

module.exports.hashPass = hashedPass;