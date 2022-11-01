const express = require("express");

const router = express.Router();

module.exports = router;

// const moment = require("moment");

const { Applicant, Register } = require("../model/model");

router.get("/dashboardData", async (req, res) => {
  const moment = require("moment");
  const today = moment().startOf("day");
  try {
    // TOTAL HITS
    const Total_Hits = await Register.find().countDocuments();
    // TOTAL DOCS
    const Total_Docs = await Applicant.find().countDocuments();
    //
    const Today_Docs = await Applicant.find()
      .or([
        {
          createdAt: {
            $gte: today.toDate(),
            $lte: moment(today).endOf("day").toDate(),
          },
        },
      ])
      .countDocuments();
    // FEE PAID
    const FeePaid = await Applicant.find()
      .or([{ FeeStatus: "COMPLETED" }])
      .countDocuments();
    // FEE PENDING
    const FeePending = await Applicant.find()
      .or([{ FeeStatus: "PENDING" }])
      .countDocuments();

    // RESPONSE
    res.json({
      Total_Hits: Total_Hits,
      Total_Docs: Total_Docs,
      Today_Docs: Today_Docs,
      FeePaid: FeePaid,
      FeePending: FeePending,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
