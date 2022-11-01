const express = require("express");
const router = express.Router();
module.exports = router;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss";
//
const { FIN_COST_CENTER } = require("../model/Finance/FIN_Model");

// POST API
router.post("/post", async (req, res) => {
  // let data = new FIN_COST_CENTER(req.body);
  const lastID = await FIN_COST_CENTER.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].COSTCENTER_ID.slice(3, 9);

  // const Total_Docs = await Applicant.find().countDocuments();
  const addZero = String(parseInt(getFromID) + parseInt(1)).padStart(6, "0");
  addID = {
    ...req.body,
    ...{ COSTCENTER_ID: "CC-" + addZero },
  };
  // GET AUTO ID
  let data = new FIN_COST_CENTER(addID);
  // console.log(data);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

//
router.get("/getAll", async (req, res) => {
  try {
    const data = await FIN_COST_CENTER.find({ DELETE: 0 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await FIN_COST_CENTER.findByIdAndUpdate(
      id,
      {
        COSTCENTER_TITLE: updatedData.COSTCENTER_TITLE,
        MODIFY_DATE: moment().format(dateFormat),
        MODIFY_BY: updatedData.MODIFY_BY,
      },
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.patch("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true };

    const result = await FIN_COST_CENTER.findByIdAndUpdate(
      id,
      {
        DELETE: 1,
      },
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
