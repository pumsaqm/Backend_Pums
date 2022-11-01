const { response } = require("express");
const express = require("express");

const router = express.Router();

module.exports = router;

// const moment = require("moment");

const { EduAdmission } = require("../model/model");
const { Applicant } = require("../model/model");

const FashionGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Fashion Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const TextileGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Textile Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const VisualGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Visual Arts",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const ArchGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Archaeology",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const HistoryGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS History",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const CivilGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Civil Engineering",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const EnvGroup = [
  {
    $unwind: {
      path: "$SelectProgram",
      includeArrayIndex: "text",
    },
  },
  {
    $match: {
      text: 0,
    },
  },
  {
    $match: {
      "SelectProgram.PROGRAM_TITLE": "BS Environmental Science",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      "_id.Challan": -1,
    },
  },
];

const Textile_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Textile Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Textile: "$count",
      _id: 0,
    },
  },
];

const Textile_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Textile Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Textile: "$count",
      _id: 0,
    },
  },
];

const Fashion_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Fashion Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Fashion: "$count",
      _id: 0,
    },
  },
];

const Fashion_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Fashion Design",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Fashion: "$count",
      _id: 0,
    },
  },
];

const Visual_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Visual Arts",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Visual: "$count",
      _id: 0,
    },
  },
];

const Visual_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Visual Arts",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Visual: "$count",
      _id: 0,
    },
  },
];

const Arch_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Archaeology",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Arch: "$count",
      _id: 0,
    },
  },
];

const Arch_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Archaeology",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Arch: "$count",
      _id: 0,
    },
  },
];

const History_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS History",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      History: "$count",
      _id: 0,
    },
  },
];

const History_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS History",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      History: "$count",
      _id: 0,
    },
  },
];

const Civil_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Civil Engineering",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Civil: "$count",
      _id: 0,
    },
  },
];

const Civil_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Civil Engineering",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Civil: "$count",
      _id: 0,
    },
  },
];

const Env_Verified = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Environmental Science",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Env: "$count",
      _id: 0,
    },
  },
];

const Env_Issued = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $match: {
      Program: "BS Environmental Science",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $match: {
      "Applicant_Result.IsUpdate": false,
      "Applicant_Result.Status": false,
      "Applicant_Result.FeeStatus": "COMPLETED",
    },
  },
  {
    $group: {
      _id: {
        Challan: "$Applicant_Result.FeeStatus",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Env: "$count",
      _id: 0,
    },
  },
];

router.get("/dashboardProgramdData", async (req, res) => {
  try {
    // TOTAL DOCS

    // const Fashion = await EduAdmission.aggregate(FashionGroup);
    const Textile = await EduAdmission.aggregate(TextileGroup);
    const Fashion = await EduAdmission.aggregate(FashionGroup);
    const Visual = await EduAdmission.aggregate(VisualGroup);
    const Archaeology = await EduAdmission.aggregate(ArchGroup);
    const History = await EduAdmission.aggregate(HistoryGroup);
    const Civil = await EduAdmission.aggregate(CivilGroup);
    const Environmental = await EduAdmission.aggregate(EnvGroup);

    const Textile_Verified_New = await EduAdmission.aggregate(Textile_Verified);
    const Fashion_Verified_New = await EduAdmission.aggregate(Fashion_Verified);
    const Visual_Verified_New = await EduAdmission.aggregate(Visual_Verified);
    const Arch_Verified_New = await EduAdmission.aggregate(Arch_Verified);
    const History_Verified_New = await EduAdmission.aggregate(History_Verified);
    const Civil_Verified_New = await EduAdmission.aggregate(Civil_Verified);
    const Env_Verified_New = await EduAdmission.aggregate(Env_Verified);

    const Textile_Issued_Count = await EduAdmission.aggregate(Textile_Issued);
    const Fashion_Issued_Count = await EduAdmission.aggregate(Fashion_Issued);
    const Visual_Issued_Count = await EduAdmission.aggregate(Visual_Issued);
    const Arch_Issued_Count = await EduAdmission.aggregate(Arch_Issued);
    const History_Issued_Count = await EduAdmission.aggregate(History_Issued);
    const Civil_Issued_Count = await EduAdmission.aggregate(Civil_Issued);
    const Env_Issued_Count = await EduAdmission.aggregate(Env_Issued);

    // RESPONSE
    res.json({
      TextilePending: Textile[0] ? Textile[0].count : 0,
      TextileCompleted: Textile[1] ? Textile[1].count : 0,

      // CHECK VALUE IF UNDEFINED SET 0
      FashionPending: Fashion[0] ? Fashion[0].count : 0,
      FashionCompleted: Fashion[1] ? Fashion[1].count : 0,

      VisualCompleted: Visual[1] ? Visual[1].count : 0,
      VisualPending: Visual[0] ? Visual[0].count : 0,

      ArchaeologyCompleted: Archaeology[1] ? Archaeology[1].count : 0,
      ArchaeologyPending: Archaeology[0] ? Archaeology[0].count : 0,

      HistoryCompleted: History[1] ? History[1].count : 0,
      HistoryPending: History[0] ? History[0].count : 0,

      CivilCompleted: Civil[1] ? Civil[1].count : 0,
      CivilPending: Civil[0] ? Civil[0].count : 0,

      EnvironmentalCompleted: Environmental[1] ? Environmental[1].count : 0,
      EnvironmentalPending: Environmental[0] ? Environmental[0].count : 0,

      // VERIFIED

      Textile_Verified: Textile_Verified_New[0]
        ? Textile_Verified_New[0].Textile
        : 0,
      Fashion_Verified: Fashion_Verified_New[0]
        ? Fashion_Verified_New[0].Fashion
        : 0,
      Visual_Verified: Visual_Verified_New[0]
        ? Visual_Verified_New[0].Visual
        : 0,
      Arch_Verified: Arch_Verified_New[0] ? Arch_Verified_New[0].Arch : 0,
      History_Verified: History_Verified_New[0]
        ? History_Verified_New[0].History
        : 0,
      Civil_Verified: Civil_Verified_New[0] ? Civil_Verified_New[0].Civil : 0,
      Env_Verified: Env_Verified_New[0] ? Env_Verified_New[0].Env : 0,

      // CARD ISSUED

      Textile_Issued: Textile_Issued_Count[0]
        ? Textile_Issued_Count[0].Textile
        : 0,
      Fashion_Issued: Fashion_Issued_Count[0]
        ? Fashion_Issued_Count[0].Fashion
        : 0,
      Visual_Issued: Visual_Issued_Count[0] ? Visual_Issued_Count[0].Visual : 0,
      Arch_Issued: Arch_Issued_Count[0] ? Arch_Issued_Count[0].Arch : 0,
      History_Issued: History_Issued_Count[0]
        ? History_Issued_Count[0].History
        : 0,
      Civil_Issued: Civil_Issued_Count[0] ? Civil_Issued_Count[0].Civil : 0,
      Env_Issued: Env_Issued_Count[0] ? Env_Issued_Count[0].Env : 0,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get(
  "/ProgramWiseApplicant/:program/:fee/:city/:gender/:testcenter",
  async (req, res) => {
    try {
      // Mandatory Parameters for execution of this API
      // 1 : Program , 2 : Fee, 3 : City, 4: Gender, 5: Test Center
      // If you dont want to filter record set Individual Parameter to 0 (Zero).
      // Zero (0) by pass the parameter filter

      var programname = req.params.program;
      var feestatus = req.params.fee;
      var city = req.params.city;
      var gender = req.params.gender;
      var testcenter = req.params.testcenter;
      var ProgramsQuery = {};
      var FeesQuery = {};
      var CityQuery = {};
      var GenderQuery = {};
      var TestCenterQuery = {};
      if (programname !== "0") {
        ProgramsQuery.Programs = programname;
      }
      if (feestatus !== "0") {
        FeesQuery.FeeStatus = feestatus;
      }
      if (city !== "0") {
        CityQuery.City = city;
      }

      if (gender !== "0") {
        GenderQuery.Gender = gender;
      }

      if (testcenter !== "0") {
        TestCenterQuery.TestCenter = testcenter;
      }
      var vw_program = [
        {
          $unwind: {
            path: "$SelectProgram",
            includeArrayIndex: "text",
          },
        },
        {
          $match: {
            text: 0,
          },
        },
        {
          $lookup: {
            from: "applicants",
            localField: "ApplicantID",
            foreignField: "ApplicantID",
            as: "Applicant_Result",
          },
        },
        {
          $project: {
            _id: "$_id",
            ApplicantID: "$ApplicantID",
            Programs: "$SelectProgram.PROGRAM_TITLE",
            FormID: { $arrayElemAt: ["$Applicant_Result.FormID", 0] },
            DOB: { $arrayElemAt: ["$Applicant_Result.DOB", 0] },
            S_name: { $arrayElemAt: ["$Applicant_Result.S_name", 0] },
            S_Contact: { $arrayElemAt: ["$Applicant_Result.S_Contact", 0] },
            Domicile: { $arrayElemAt: ["$Applicant_Result.Domicile", 0] },
            Country: { $arrayElemAt: ["$Applicant_Result.Country", 0] },
            Province: { $arrayElemAt: ["$Applicant_Result.Province", 0] },
            City: { $arrayElemAt: ["$Applicant_Result.City", 0] },
            CNIC: { $arrayElemAt: ["$Applicant_Result.CNIC", 0] },
            F_Name: { $arrayElemAt: ["$Applicant_Result.F_Name", 0] },
            F_Contact: { $arrayElemAt: ["$Applicant_Result.F_Contact", 0] },
            Gender: { $arrayElemAt: ["$Applicant_Result.Gender", 0] },
            TestCenter: { $arrayElemAt: ["$Applicant_Result.TestCenter", 0] },
            Status: { $arrayElemAt: ["$Applicant_Result.Status", 0] },
            IsUpdate: { $arrayElemAt: ["$Applicant_Result.IsUpdate", 0] },
            isActive: { $arrayElemAt: ["$Applicant_Result.isActive", 0] },
            FeeStatus: { $arrayElemAt: ["$Applicant_Result.FeeStatus", 0] },
            createdAt: { $arrayElemAt: ["$Applicant_Result.createdAt", 0] },
            updatedAt: { $arrayElemAt: ["$Applicant_Result.updatedAt", 0] },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "ApplicantID",
            foreignField: "_id",
            as: "User_Result",
          },
        },
        {
          $project: {
            _id: "$_id",
            ApplicantID: "$ApplicantID",
            Programs: "$Programs",
            FormID: "$FormID",
            DOB: "$DOB",
            S_name: "$S_name",
            S_Contact: "$S_Contact",
            Domicile: "$Domicile",
            Country: "$Country",
            Province: "$Province",
            City: "$City",
            CNIC: "$CNIC",
            F_Name: "$F_Name",
            F_Contact: "$F_Contact",
            Gender: "$Gender",
            TestCenter: "$TestCenter",
            Status: "$Status",
            IsUpdate: "$IsUpdate",
            isActive: "$isActive",
            FeeStatus: "$FeeStatus",
            createdAt: "$createdAt",
            updatedAt: "$updatedAt",
            TransactionDate: {
              $dateToString: { format: "%Y-%m-%d %H:%M", date: "$updatedAt" },
            },
            UserCNIC: { $arrayElemAt: ["$User_Result.CNIC", 0] },
            UserNAME: { $arrayElemAt: ["$User_Result.NAME", 0] },
            USERMOBILE: { $arrayElemAt: ["$User_Result.MOBILE", 0] },
            UserEMAIL: { $arrayElemAt: ["$User_Result.EMAIL", 0] },
          },
        },
        {
          $match: ProgramsQuery,
        },
        {
          $match: FeesQuery,
        },
        {
          $match: CityQuery,
        },
        {
          $match: GenderQuery,
        },
        {
          $match: TestCenterQuery,
        },
      ];

      const program_detail = await EduAdmission.aggregate(vw_program);

      // RESPONSE
      res.json({
        program_detail: program_detail,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

const datewisequery = [
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m-%d",
          date: "$createdAt",
        },
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      _id: 1,
    },
  },
];

router.get("/dateWiseForms", async (req, res) => {
  try {
    // TOTAL DOCS

    // const Fashion = await EduAdmission.aggregate(FashionGroup);
    const datewiserecords = await Applicant.aggregate(datewisequery);

    // RESPONSE
    res.json({
      datewiserecords: datewiserecords,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const GenderWiseAgg = [
  {
    $project: {
      Program: {
        $arrayElemAt: ["$SelectProgram.PROGRAM_TITLE", 0],
      },
      ApplicantID: "$ApplicantID",
    },
  },
  {
    $lookup: {
      from: "applicants",
      localField: "ApplicantID",
      foreignField: "ApplicantID",
      as: "Applicant_Result",
    },
  },
  {
    $project: {
      ApplicantID: "$ApplicantID",
      Program: "$Program",
      Gender: {
        $arrayElemAt: ["$Applicant_Result.Gender", 0],
      },
      Name: {
        $arrayElemAt: ["$Applicant_Result.S_name", 0],
      },
      CNIC: {
        $arrayElemAt: ["$Applicant_Result.CNIC", 0],
      },
      FeeStatus: {
        $arrayElemAt: ["$Applicant_Result.FeeStatus", 0],
      },
    },
  },
  {
    $group: {
      _id: {
        Program: "$Program",
        Gender: "$Gender",
      },
      count: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      Program: "$_id.Program",
      Gender: "$_id.Gender",
      total: "$count",
      _id: 0,
    },
  },
  {
    $group: {
      _id: "$Program",
      Students: {
        $push: {
          gender: "$Gender",
          count: "$total",
        },
      },
    },
  },
];
router.get("/genderWiseProgramComparision", async (req, res) => {
  try {
    // TOTAL DOCS

    // const Fashion = await EduAdmission.aggregate(FashionGroup);
    const GenderWiseProgramComparison = await EduAdmission.aggregate(
      GenderWiseAgg
    );

    // RESPONSE
    res.json({
      GenderWiseProgramComparison: GenderWiseProgramComparison,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
