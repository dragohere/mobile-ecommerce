const registerUser = require("../models/registerSchema");
const signInUser = require("../models/signInSchema");
const userdetails = require("../models/userDetailsSchema");

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
    const userDetailsData = new userdetails({
      firstName,
      lastName,
      email,
      userName,
    });
    (await userdetails.create(userDetailsData));
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
    const { firstName, lastName, userName } = isExistingUser;
    if (isExistingUser) {
      if (isExistingUser.password === password) {
        const loggedInUser = await signInUser.create({ email: email });
        await userdetails.findOneAndUpdate({isAuthenticated:true})
        return res
          .status(200)
          .json({ loggedInUser, isAuthenticated:true, msg: `${email} successfully signed in` });
      } else {
        return res.status(400).json({ msg: "Incorrect password" });
      }
    } else {
      return res.status(404).json({ msg: "User not found, please sign up" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Internal Server error" });
  }
};
const signOut = async (req, res) => {
  try {
    const { email } = req.body;
    const loggedInUser = await signInUser.findOne({ email: email });
    if (loggedInUser) {
      await userdetails.findOneAndUpdate({isAuthenticated:false})
      await signInUser.findOneAndDelete({ email: email });
      return res.status(200).json({ isAuthenticated:false, message: "User logged out" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
module.exports = { register, signIn, signOut };
