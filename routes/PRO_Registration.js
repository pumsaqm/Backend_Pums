const express = require("express");

const router = express.Router();

module.exports = router;

const { PRO_REGISTRATION } = require("../model/Procuretment/PRO_Model");

// POST API
router.post("/post", async (req, res) => {
  let data = new PRO_REGISTRATION(req.body);

  try {
    await data.save();
    res.status(200).json("User Successfully Regsitered");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get API
router.get("/chkUser/:id", (req, res) => {
  PRO_REGISTRATION.findOne({ CNIC: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      res.send("Record not Found");
    } else {
      res.send("Record Found");
    }
  });
});

//
router.post("/check", (req, res) => {
  PRO_REGISTRATION.findOne(
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
  PRO_REGISTRATION.find(function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});
