const express = require("express");

const router = express.Router();

module.exports = router;

const {
  Degree,
  Program,
  BloodGroup,
  Religion,
  District,
  Gender,
  Marry,
} = require("../model/model");

//
router.get("/getAll", async (req, res) => {
  try {
    const degreeData = await Degree.find();
    const programData = await Program.find();
    const bloodData = await BloodGroup.find();
    const ReligionData = await Religion.find();
    const DistrictData = await District.find();
    const GenderData = await Gender.find();
    const MarryData = await Marry.find();
    res.json({
      degreeData: degreeData,
      programData: programData,
      bloodData: bloodData,
      ReligionData: ReligionData,
      DistrictData: DistrictData,
      GenderData: GenderData,
      MarryData: MarryData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
