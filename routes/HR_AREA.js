const express = require("express");
const router = express.Router();
module.exports = router;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss";
//
const { HR_AREA } = require("../model/HR/HR_Model");

// POST API
router.post("/post", async (req, res) => {
  const lastID = await HR_AREA.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].AREA_ID + 1;
  addID = {
    ...req.body,
    ...{ AREA_ID: getFromID },
  };
  let data = new HR_AREA(addID);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GETALL API
router.get("/getAll", async (req, res) => {
  try {
    const data = await HR_AREA.find({ DELETE: 0 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await HR_AREA.findByIdAndUpdate(
      id,
      {
        DISTRICT_ID: updatedData.DISTRICT_ID,
        AREA_NAME: updatedData.AREA_NAME,
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

//Delete by ID
router.patch("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true };

    const result = await HR_AREA.findByIdAndUpdate(
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
