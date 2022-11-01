const express = require("express");

const router = express.Router();

module.exports = router;

const { EduAdmission } = require("../model/model");

// POST API
router.post("/post", async (req, res) => {
  // console.log(req.body.ApplicantID);/
  let data = new EduAdmission(req.body);
  try {
    await EduAdmission.findOneAndDelete({ ApplicantID: req.body.ApplicantID });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get API
router.get("/:id", (req, res) => {
  // console.log(req.params.id);

  EduAdmission.findOne(
    { ApplicantID: req.params.id },
    function (err, Applicant) {
      if (err || !Applicant) {
        // "if error or no Applicant"
        res.send("Applicant not found.");
      } else {
        // res.send("logged in!");
        res.status(200).json(Applicant);
      }
    }
  );
});
