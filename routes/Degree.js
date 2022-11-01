const express = require("express");

const router = express.Router();

module.exports = router;

const { Degree } = require("../model/model");

//
router.get("/getAll", async (req, res) => {
  try {
    const data = await Degree.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
