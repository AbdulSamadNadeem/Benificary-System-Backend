const SeekerModel = require("../Model/SeekerModel");

exports.createSeeker = async (req, res) => {
  try {
    const { cnic } = req.body;
    const findSeeker = await SeekerModel.findOne({ cnic });
    if (findSeeker) {
      res
        .status(400)
        .json({
          success: false,
          error: "The Benificiary is already registered",
        });
    }
    const seekers = await SeekerModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Seeker Created Successfully",
      seekers,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
exports.getAllSeeker = async (req, res) => {
  try {
    const seekers = await SeekerModel.find();

    res.status(200).json({
      success: true,
      message: "Seekers Fetched Successfully",
      seekers,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
