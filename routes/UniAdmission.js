const express = require("express");

const router = express.Router();

module.exports = router;

const { UniAdmission } = require("../model/model");

// POST
router.post("/post", async (req, res) => {
  let data = new UniAdmission(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET ALL
router.get("/getAll", async (req, res) => {
  try {
    const data = await UniAdmission.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
