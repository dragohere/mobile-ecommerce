const registerUser = require("../models/registerSchema");
const signInUser = require("../models/signInSchema");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, userName, password } = req.body;
    const isExistingUser = await registerUser.findOne({ email: email });
    if (isExistingUser) {
      return res.status(400).json({ msg: "User Name already registered" });
    }
    const newUserCreated = await registerUser.create({
      firstName,
      lastName,
      email,
      userName,
      password,
    });
    res
      .status(200)
      .json({ user: newUserCreated, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExistingUser = await registerUser.findOne({ email: email });
    console.log(isExistingUser, "isExistingUser");
    if (isExistingUser) {
      if (isExistingUser.password === password) {
        const loggedInUSer = await signInUser.create({email});
        return res.status(200).json({loggedInUSer, msg: `${email} successfully signed in` });
      } else {
        return res.status(400).json({ msg: "Incorrect password" });
      }
    } else {
      return res.status(404).json({ msg: "User not found, please sign up" });
    }
    // const newUserCreated = await signInUser.create({ firstName, lastName, email, userName, password });
    // res.status(200).json({ user: newUserCreated, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Internal Server error" });
  }
};
const signOut = async (req, res) => {
 
  try {
      const { email } = req.body;
      const loggedInUSer =  await signInUser.findOne({ email : email });
      if(loggedInUSer){
        await signInUser.findOneAndDelete({ email : email });
        res.status(200).json({ message: "User log out successfully" });
      }else{
        res.status(400).json({ message: "User not found" });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(400).json({ msg: "Internal Server error" });
    }
    
  
};
module.exports = { register, signIn, signOut };
