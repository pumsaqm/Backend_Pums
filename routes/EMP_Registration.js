const express = require("express");

const router = express.Router();

module.exports = router;

const { EMP_REGISTRATION } = require("../model/Recruitment/EMP_Modal");

// POST API
router.post("/post", async (req, res) => {
  let data = new EMP_REGISTRATION(req.body);

  try {
    await data.save();
    res.status(200).json("User Successfully Registered");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get API
router.get("/chkUser/:id", (req, res) => {
  EMP_REGISTRATION.findOne({ CNIC: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      res.send("Record not Found");
    } else {
      res.send("Record Found");
    }
  });
});

//
router.post("/check", (req, res) => {
  EMP_REGISTRATION.findOne(
    { CNIC: req.body.id, PINCODE: req.body.pin },
    function (err, user) {
      if (err || !user) {
        res.send("User not found.");
      } else {
        res.status(200).json(user);
      }
    }
  );
});

router.get("/getAll", (req, res) => {
  EMP_REGISTRATION.find(function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});
