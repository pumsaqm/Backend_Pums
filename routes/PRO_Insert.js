const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

module.exports = router;

const { PRO_INSERT } = require("../model/Procuretment/PRO_Model");

// POST API
router.post("/post", async (req, res) => {
  //{}
  const lastID = await PRO_INSERT.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].VendorID.slice(4, 10);

  const addZero = String(parseInt(getFromID) + parseInt(1)).padStart(6, "0");
  addID = {
    ...req.body,
    ...{ VendorID: "VEN-" + addZero },
  };
  // GET AUTO ID
  let data = new PRO_INSERT(addID);
  // console.log(data);

  try {
    // await Applicant.findOneAndDelete({ ApplicantID: req.body.ApplicantID });
    await data.save();
    res.status(200).json({ message: "Record has been saved" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//
router.get("/Vendor_listbyID/:id", (req, res) => {
  PRO_INSERT.find(
    { Ven_RegistraionID: req.params.id },
    function (err, Applicant) {
      if (err || !Applicant) {
        res.send("Applicant not found.");
      } else {
        res.status(200).json(Applicant);
      }
    }
  );
});

router.get("/PRO_listby_UniqueID/:id", (req, res) => {
  PRO_INSERT.find({ _id: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      res.send("Applicant not found.");
    } else {
      res.status(200).json(Applicant);
    }
  });
});

//

router.get("/getAll", (req, res) => {
  PRO_INSERT.find({ isApprove: 0 }, function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});

router.get("/getAll_Approve", (req, res) => {
  PRO_INSERT.find({ isApprove: 1 }, function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});

router.get("/emp_approve/:id", (req, res) => {
  PRO_INSERT.findOne(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    function (err, User) {
      if (err || !User) {
        res.send("data is not found");
      } else {
        User.isApprove = 1;
        User.save()
          .then((User) => {
            res.json("User updated!");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
      }
    }
  );
});
