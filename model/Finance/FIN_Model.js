const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss";
//

const FIN_ACCOUNTS_ = new mongoose.Schema({
  LEDGER_CODE: String,
  LEDGER_TITLE: String,
  PID: Schema.Types.ObjectId,
  NATURE_ID: Schema.Types.ObjectId,
  //
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  MODIFY_DATE: { type: String, default: "" },
  ENTRY_BY: Schema.Types.ObjectId,
  MODIFY_BY: { type: Schema.Types.ObjectId, default: null },
  DELETE: { type: Number, default: "0" },
});

const FIN_ACC_NATURE_ = new mongoose.Schema({
  CODE: String,
  TITLE: String,
  //
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  MODIFY_DATE: { type: String, default: "" },
  ENTRY_BY: Schema.Types.ObjectId,
  MODIFY_BY: { type: Schema.Types.ObjectId, default: null },
  DELETE: { type: Number, default: "0" },
});

const FIN_COST_CENTER_ = new mongoose.Schema({
  COSTCENTER_ID: String,
  COSTCENTER_TITLE: String,
  //
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  MODIFY_DATE: { type: String, default: "" },
  ENTRY_BY: Schema.Types.ObjectId,
  MODIFY_BY: { type: Schema.Types.ObjectId, default: null },
  DELETE: { type: Number, default: "0" },
});

const FISCAL_YEAR_ = new mongoose.Schema({
  STATE_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  END_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  YEAR_NAME: String,
  //
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
  MODIFY_DATE: { type: String, default: "" },
  ENTRY_BY: Schema.Types.ObjectId,
  MODIFY_BY: { type: Schema.Types.ObjectId, default: null },
  DELETE: { type: Number, default: "0" },
});

// DECLEAR CONST
const FIN_ACCOUNTS = (module.exports = mongoose.model(
  "FIN_ACCOUNTS",
  FIN_ACCOUNTS_
));
const FIN_ACC_NATURE = (module.exports = mongoose.model(
  "FIN_ACC_NATURE",
  FIN_ACC_NATURE_
));

const FIN_COST_CENTER = (module.exports = mongoose.model(
  "FIN_COST_CENTER",
  FIN_COST_CENTER_
));

const FISCAL_YEAR = (module.exports = mongoose.model(
  "FISCAL_YEAR",
  FISCAL_YEAR_
));

// EXPORT MODULES
module.exports = {
  FIN_ACCOUNTS: FIN_ACCOUNTS,
  FIN_ACC_NATURE: FIN_ACC_NATURE,
  FIN_COST_CENTER: FIN_COST_CENTER,
  FISCAL_YEAR: FISCAL_YEAR,
};
