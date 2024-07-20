const userModel = require("../Models/User-model");
const  {comparePass } = require("../utils/decryptPass");
const { hashPass } = require("../utils/encryptPass");
const { jsontoken } = require("../utils/GenrateToken");
 

const registerUser = async (req, res) => {
  try {
    let { fullname, password, email } = req.body;
    let ifUser = await userModel.find({ email: email });
    if (ifUser.length > 0) {     
      req.flash("message" , "This email is already registered");
      res.redirect("/");
    }
    const hashedPass = await hashPass(password);
    let user = await userModel.create({
      fullname,
      password: hashedPass,
      email,
    });
    const token = jsontoken(user);
    res.cookie("token", token);
    req.flash("message" , "Account created, you can login now");
    res.redirect("/");
  } catch (err) {
    res.send(err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let ifUser = await userModel.findOne({ email: email });
    if (!ifUser) {
       req.flash("message" ,"Email or password is incorrect");
       res.redirect('/')
    } else {
      let user = ifUser;
      let isMatch = await comparePass(password , user.password);
     if (!isMatch) {
      req.flash("message" ,"Email or password is incorrect");
      res.redirect('/')
     }
     if(isMatch) {
       const token = jsontoken(user);
       res.cookie("token" , token)
       console.log("redirecting")
       res.redirect("/shop")
       }
    }
  } catch (error) {
    res.send(error.message);
  }
};

const logoutUser = (req,res)=>{
  req.flash("message" ,  "LogeedOut successfully");
  res.clearCookie("token").redirect("/")
};

module.exports = {registerUser , loginUser , logoutUser}