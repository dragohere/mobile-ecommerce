const registerUser = require("../models/registerSchema");
const userDetails = require("../models/userDetailsSchema")
const getUserDetails = async (req, res) => {
  const { email } = req.body;
  const getUser_db = await userDetails.findOne({ email: email });
  console.log(getUser_db,"getUser_db");
  if (getUser_db.email === email) {
    return res.status(200).json({
      userName: getUser_db?.userName,
      email: getUser_db?.email,
      firstName: getUser_db?.firstName,
      lastName: getUser_db?.lastName,
      isAdmin: false,
      profileImg:
        "https://media.licdn.com/dms/image/D5603AQEy1aTMMU6naw/profile-displayphoto-shrink_800_800/0/1665038963588?e=2147483647&v=beta&t=2__iMRFbYTMjomR6huuDnh5z3bkbvMuXESE9ThId3FU",
      cartList: [],
      orders: [],
      isActive: true,
      isAuthenticated: getUser_db?.isAuthenticated,
    });
  }
};
module.exports = { getUserDetails };
