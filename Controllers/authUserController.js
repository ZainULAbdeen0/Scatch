const userModel = require('../Models/User-model');
const {hashPass} = require('../utils/hashPass')
const {jsontoken} = require('../utils/GenrateToken')


const registeruser = async (req,res)=>{
    try{
   
        let {fullname , password , email} = req.body;
        let ifUser = await userModel.find({"email":email});
        if(ifUser.length>0){
            res.send("user already exist");
            return;
        }
        const hashedPass = await hashPass(password);
        let user = await userModel.create({
            fullname,
            password:hashedPass,
            email,
        })
        const token = jsontoken(user);
        res.cookie("token" , token)
        res.send(token , "and" , hashedPass)
    }catch(err){
    res.send(err.message);
    }
};

module.exports.registerUser = registeruser;