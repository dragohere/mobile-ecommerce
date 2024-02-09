const registerUser = require("../models/registerSchema");
const getUserDetails = async (req, res) => {
  const { email } = req.body;
  const getUser_db = await registerUser.findOne({ email: email });
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
      isAuthenticated:true,
      msg: `Thank you ${getUser_db?.firstName} ${getUser_db?.lastName}`,
    });
  }
};
module.exports = { getUserDetails };
