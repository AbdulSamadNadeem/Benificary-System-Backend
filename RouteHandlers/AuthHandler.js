const AuthModel = require("../Model/AuthModel");
const tokenGen = require("../helper/index");
exports.Signup = async (req, res) => {
  try {
    const { email } = req.body;

    const Existing_User = await AuthModel.findOne({ email });
    if (Existing_User) {
      res.status(400).json({
        status: "failed",
        message: "A user is already register with this email",
      });
    }
    const user = await AuthModel.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Signup successfuly",
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await AuthModel.findOne({ email });
    if (!user) {
     return res.status(404).json({
        status: "failed",
        message: "No user is Found with this email",
      });
    }
    const validatePass = await user.comparePass(password, user.password);
    if (!validatePass) {
     return res.status(400).json({
        status: "failed",
        message: "Incorrect Password",
      });
    }

    const token = tokenGen.TokenGen(user._id);
    res.status(200).json({
      status: "success",
      message: "Signin successfuly",
      token,
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
