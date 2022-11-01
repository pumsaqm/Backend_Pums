const express = require("express");

const router = express.Router();

module.exports = router;

const { Program } = require("../model/model");

router.get("/getAll", async (req, res) => {
  try {
    const data = await Program.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
