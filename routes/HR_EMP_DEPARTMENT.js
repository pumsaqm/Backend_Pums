const express = require("express");
const router = express.Router();
module.exports = router;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss";
//
const { HR_EMP_DEPARTMENT } = require("../model/HR/HR_Model");

// POST API
router.post("/post", async (req, res) => {
  const lastID = await HR_EMP_DEPARTMENT.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].EMP_DEPT_ID + 1;
  addID = {
    ...req.body,
    ...{ EMP_DEPT_ID: getFromID },
  };
  let data = new HR_EMP_DEPARTMENT(addID);

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
    const data = await HR_EMP_DEPARTMENT.find({ DELETE: 0 });
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

    const result = await HR_EMP_DEPARTMENT.findByIdAndUpdate(
      id,
      {
        EMP_DEPT_TITLE: updatedData.EMP_DEPT_TITLE,
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

    const result = await HR_EMP_DEPARTMENT.findByIdAndUpdate(
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
