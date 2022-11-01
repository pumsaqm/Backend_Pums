const express = require("express");

const router = express.Router();

module.exports = router;

const { Register, User } = require("../model/model");

// POST API
router.post("/post", async (req, res) => {
  let data = new Register(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", (req, res) => {
  // console.log(req.params.id);

  Register.findOne({ CNIC: req.params.id }, function (err, user) {
    if (err || !user) {
      // "if error or no user"
      res.send("User not found.");
    } else {
      res.send("logged in!");
    }
  });
});

router.post("/check", (req, res) => {
  // console.log(req.body.id);
  Register.findOne(
    { CNIC: req.body.id, PINCODE: req.body.pin },
    function (err, user) {
      if (err || !user) {
        // "if error or no user"
        res.send("User not found.");
      } else {
        // res.send("logged in!");
        res.status(200).json(user);
      }
    }
  );
});

router.post("/getList", (req, res) => {
  // console.log(req.body.id);
  User.findOne({ ApplicantID: req.body.id }, function (err, user) {
    if (err || !user) {
      // "if error or no user"
      res.send("User not found.");
    } else {
      // res.send("logged in!");
      res.status(200).json(user);
    }
  });
});
