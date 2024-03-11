const logModel = require("../models/logs");
const createLog = async (req, res) => {
  const { deviceId, event } = req.body;
  const data = new logModel({
    deviceId: deviceId,
    event: event,
  });
  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// const updateLog = async (req, res) => {
//   const id = req.params.id;
//   const { deviceId, event } = req.body;
//   const newData = {
//     deviceId: deviceId,
//     event: event,
//   };
//   try {
//     const updatedData = await logModel.findByIdAndUpdate(id, newData, {
//       new: true,
//     });
//     res.status(200).json(updatedData);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

const deleteLog = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await logModel.findByIdAndDelete(id);
    res.status(202).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getLog = async (req, res) => {
  try {
    const data = await logModel.find({ deviceId: req.query.deviceId });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createLog, getLog, updateLog, deleteLog };
