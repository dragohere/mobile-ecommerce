const registerUser =require("../models/registerSchema")

const register = async (req, res) => {
  try{
    const { userName, password } = req.body;
    const isExistingUser = await registerUser.findOne({userName:userName});
    if (isExistingUser) {
      return res.status(400).json({ msg: "userName already registered" });
    }
    const newUserCreated = await registerUser.create({ userName, password });
    res.status(200).json({ user: newUserCreated, msg: "User registered successfully" });
  }
  catch(error){
    console.log(error)
  }
};
module.exports = { register };
