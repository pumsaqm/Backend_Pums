const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

module.exports = router;

const { Applicant } = require("../model/model");

// POST API
router.post("/post", async (req, res) => {
  const lastID = await Applicant.find({}).sort({ _id: -1 }).limit(1);
  const getFromID = lastID[0].FormID.slice(7, 13);

  const addZero = String(parseInt(getFromID) + parseInt(1)).padStart(6, "0");
  addID = {
    ...req.body,
    ...{ FormID: "AU-F22-" + addZero },
  };
  // GET AUTO ID
  let data = new Applicant(addID);
  // console.log(data);

  try {
    await Applicant.findOneAndDelete({ ApplicantID: req.body.ApplicantID });
    await data.save();
    res.status(200).json({ message: "Record has been saved" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll_byDept", async (req, res) => {
  try {
    let data = await Applicant.aggregate([
      {
        $lookup: {
          from: "eduadmissions",
          localField: "ApplicantID",
          foreignField: "ApplicantID",
          as: "string",
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getSome_", (req, res) => {
  Applicant.find(
    {},
    {
      _id: 1,
      ApplicantID: 1,
      S_name: 1,
      F_Name: 1,
      CNIC: 1,
      Domicile: 1,
      Status: 1,
      FeeStatus: 1,
      S_Contact: 1,
      FormID: 1,
      createdAt: 1,
    },
    function (err, data) {
      if (err) {
        return res.status(400).json({ message: error.message });
      }
      return res.json(200, data);
    }
  ).sort({ createdAt: -1 });
});

router.get("/pendingchallan_for_verify", async (req, res) => {
  try {
    const result = await Applicant.find(
      { FeeStatus: "COMPLETED", Status: true },
      {
        _id: 1,
        ApplicantID: 1,
        S_name: 1,
        F_Name: 1,
        CNIC: 1,
        Domicile: 1,
        Status: 1,
        FeeStatus: 1,
        S_Contact: 1,
        FormID: 1,
        createdAt: 1,
        Status: 1,
        IsUpdate: 1,
      }
    ).sort({ createdAt: 1 });
    let data = result;

    // console.log(data)
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return data.status(400).json({ message: error.message });
  }
});

router.get("/verifychallan_for_card", async (req, res) => {
  try {
    const result = await Applicant.find(
      { FeeStatus: "COMPLETED", Status: false, IsUpdate: true },
      {
        _id: 1,
        ApplicantID: 1,
        S_name: 1,
        F_Name: 1,
        CNIC: 1,
        Domicile: 1,
        Status: 1,
        FeeStatus: 1,
        S_Contact: 1,
        FormID: 1,
        createdAt: 1,
        Status: 1,
        IsUpdate: 1,
      }
    ).sort({ createdAt: 1 });
    let data = result;

    // console.log(data)
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return data.status(400).json({ message: error.message });
  }
});

router.get("/Card_Issued", async (req, res) => {
  try {
    const result = await Applicant.find(
      { FeeStatus: "COMPLETED", Status: false, IsUpdate: false },
      {
        _id: 1,
        ApplicantID: 1,
        S_name: 1,
        F_Name: 1,
        CNIC: 1,
        Domicile: 1,
        Status: 1,
        FeeStatus: 1,
        S_Contact: 1,
        FormID: 1,
        createdAt: 1,
        Status: 1,
        IsUpdate: 1,
      }
    ).sort({ createdAt: 1 });
    let data = result;

    // console.log(data)
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return data.status(400).json({ message: error.message });
  }
});

router.get("/verifyChallan/:id", async (req, res) => {
  const ApplicantAutoID = req.params.id;
  // console.log(ApplicantAutoID);

  try {
    await Applicant.findByIdAndUpdate(
      ApplicantAutoID,
      { Status: false },
      { new: true }
    );
    res.status(200).json({
      message: "Record has been Verified",
      // message: res.data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/IssueCard/:id", async (req, res) => {
  const ApplicantAutoID = req.params.id;
  try {
    await Applicant.findByIdAndUpdate(
      ApplicantAutoID,
      { IsUpdate: false },
      { new: true }
    );
    res.status(200).json({
      message: "Record has been Verified",
      // message: res.data,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get API
router.get("/:id", (req, res) => {
  // console.log(req.params.id);

  Applicant.findOne({ ApplicantID: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      // "if error or no Applicant"
      res.send("Applicant not found.");
    } else {
      // res.send("logged in!");
      res.status(200).json(Applicant);
    }
  });
});

// Get API
router.get("/adm/:id", (req, res) => {
  // console.log(req.params.id);

  Applicant.find(
    { ApplicantID: req.params.id },
    // {
    //   _id: 1,
    //   S_name: 1,
    //   F_Name: 1,
    //   CNIC: 1,
    //   Domicile: 1,
    //   Status: 1,
    //   FeeStatus: 1,
    // },
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

router.get("/chalan/:id", (req, res) => {
  Applicant.findOne({ ApplicantID: req.params.id }, function (err, User) {
    if (err || !User) {
      res.send("data is not found");
    } else {
      User.FeeStatus = "COMPLETED";
      updatedAt = Date.now;
      User.save()
        .then((User) => {
          res.json("User updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

router.get("/AdmitCard/:id", (req, res) => {
  Applicant.findOne({ ApplicantID: req.params.id }, function (err, User) {
    if (err || !User) {
      res.send("data is not found");
    } else {
      User.IsUpdate = false;
      User.save()
        .then((User) => {
          res.json("User updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

// Get Applicant Record for Insert New API (Duplicate Validation)
router.get("/postChk/:id", (req, res) => {
  // console.log(req.params.id);

  Applicant.findOne({ ApplicantID: req.params.id }, function (err, Applicant) {
    if (err || !Applicant) {
      res.send({ message: "notfound" });
    } else {
      res.send({ message: "found." });
    }
  });
});

///GET DATA ON BEHALF OF APPLICANT ID IN ADMIN PANEL

router.get("/adminDetail/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    let idToSearch = mongoose.Types.ObjectId(req.params.id);

    const agg_data = [
      {
        $lookup: {
          from: "users",
          localField: "ApplicantID",
          foreignField: "_id",
          as: "Users_Detail",
        },
      },
      {
        $match: {
          ApplicantID: mongoose.Types.ObjectId(req.params.id),
        },
      },
    ];
    const data_user = await Applicant.aggregate(agg_data);

    res.json(data_user);

    //
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
