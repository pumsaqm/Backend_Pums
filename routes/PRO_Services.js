const express = require("express");

const router = express.Router();

module.exports = router;

const { PRO_SERVICES } = require("../model/Procuretment/PRO_Model");

// POST API
router.post("/post", async (req, res) => {
  let data = new PRO_SERVICES(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GETALL
router.get("/getAll", async (req, res) => {
  try {
    const data = await PRO_SERVICES.find({ DELETE: 0 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
