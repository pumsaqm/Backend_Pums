const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

module.exports = router;

const { EMP_INSERT } = require("../model/Recruitment/EMP_Modal");

// POST API
router.post("/post", async (req, res) => {
  const lastID = await EMP_INSERT.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].EmpID.slice(4, 10);

  // const Total_Docs = await PRO_INSERT.find().countDocuments();
  const addZero = String(parseInt(getFromID) + parseInt(1)).padStart(6, "0");
  addID = {
    ...req.body,
    ...{ EmpID: "EMP-" + addZero },
  };
  // GET AUTO ID
  let data = new EMP_INSERT(addID);
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
router.get("/EMP_listbyID/:id", (req, res) => {
  EMP_INSERT.find(
    { Emp_RegistraionID: req.params.id },
    function (err, Applicant) {
      if (err || !Applicant) {
        res.send("Applicant not found.");
      } else {
        res.status(200).json(Applicant);
      }
    }
  );
});

router.get("/EMP_listby_UniqueID/:id", (req, res) => {
  EMP_INSERT.find({ _id: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      res.send("Applicant not found.");
    } else {
      res.status(200).json(Applicant);
    }
  });
});

router.get("/getAll", (req, res) => {
  EMP_INSERT.find({ isApprove: 0 }, function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});

router.get("/getAll_Approve", (req, res) => {
  EMP_INSERT.find({ isApprove: 1 }, function (err, data) {
    if (err) {
      return res.status(400).json({ message: error.message });
    }
    return res.json(data);
  }).sort({ createdAt: -1 });
});

router.get("/emp_approve/:id", (req, res) => {
  EMP_INSERT.findOne(
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
