const mongoose = require('mongoose') ;

const UserSchema = mongoose.Schema({
     fullname: String,
     email:String,
     password:String,
     contact:Number,
     cart:{
        typeof:Array,
        default:[]
     },
     isAdmin:Boolean,
     orders:{
        typeof:Array,
        default:[] 
     },
     picture:String, 
})

module.exports = mongoose.model("userModel" , UserSchema)