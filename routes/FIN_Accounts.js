const express = require("express");
const router = express.Router();
module.exports = router;
const { FIN_ACCOUNTS } = require("../model/Finance/FIN_Model");

// POST API
router.post("/post", async (req, res) => {
  let data = new FIN_ACCOUNTS(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});
//
router.get("/getAll", async (req, res) => {
  try {
    const data = await FIN_ACCOUNTS.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/childDetail", async (req, res) => {
  try {
    const agg_data = [
      {
        $match: {
          PID: null,
        },
      },
      {
        $graphLookup: {
          from: "fin_accounts",
          startWith: "$_id",
          connectFromField: "_id",
          connectToField: "PID",
          depthField: "level",
          as: "children",
        },
      },
      {
        $unwind: {
          path: "$children",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $sort: {
          "children.level": -1,
        },
      },
      {
        $group: {
          _id: "$_id",
          PID: {
            $first: "$PID",
          },
          LEDGER_TITLE: {
            $first: "$LEDGER_TITLE",
          },
          LEDGER_CODE: {
            $first: "$LEDGER_CODE",
          },
          children: {
            $push: "$children",
          },
        },
      },
      {
        $addFields: {
          children: {
            $reduce: {
              input: "$children",
              initialValue: {
                level: -1,
                presentChild: [],
                prevChild: [],
              },
              in: {
                $let: {
                  vars: {
                    prev: {
                      $cond: [
                        {
                          $eq: ["$$value.level", "$$this.level"],
                        },
                        "$$value.prevChild",
                        "$$value.presentChild",
                      ],
                    },
                    current: {
                      $cond: [
                        {
                          $eq: ["$$value.level", "$$this.level"],
                        },
                        "$$value.presentChild",
                        [],
                      ],
                    },
                  },
                  in: {
                    level: "$$this.level",
                    prevChild: "$$prev",
                    presentChild: {
                      $concatArrays: [
                        "$$current",
                        [
                          {
                            $mergeObjects: [
                              "$$this",
                              {
                                children: {
                                  $filter: {
                                    input: "$$prev",
                                    as: "e",
                                    cond: {
                                      $eq: ["$$e.PID", "$$this._id"],
                                    },
                                  },
                                },
                              },

                            ],
                          },
                        ],
                      ],
                    },
                  },
                },
              },
            },
            
          },
        },
      },
      {
        $addFields: {
          children: "$children.presentChild",
        },
      },
    ];

    const data_user = await FIN_ACCOUNTS.aggregate(agg_data);

    res.json( data_user);

    //
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
