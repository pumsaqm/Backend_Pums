const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss A";

//Schema

const EMP_REGISTRATION_CONST = new mongoose.Schema({
  NAME: {
    type: String,
  },
  CNIC: {
    type: String,
  },
  MOBILE: {
    type: String,
  },
  EMAIL: {
    type: String,
  },
  PINCODE: {
    type: String,
  },
  TYPE: {
    type: String,
    default: "Employee",
  },
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
});

//RECRUITMENT INSERT
const EMP_INSERT_CONST = new mongoose.Schema({
  Emp_RegistraionID: {
    type: String,
  },
  EmpID: {
    type: String,
  },
  advertisment: {
    type: String,
  },
  date: {
    type: String,
  },
  name: {
    type: String,
  },
  fname: {
    type: String,
  },
  cnic: {
    type: String,
  },
  contact: {
    type: String,
  },
  DOB: {
    type: String,
  },
  Date: {
    type: String,
  },
  email: {
    type: String,
  },
  domicile: {
    type: String,
  },
  religion: {
    type: String,
  },
  Gender: {
    type: String,
  },
  MaritalStatus: {
    type: String,
  },
  Blood_Group: {
    type: String,
  },
  Province: {
    type: String,
  },
  Country: {
    type: String,
  },
  City: {
    type: String,
  },
  District: {
    type: String,
  },
  Nationality: {
    type: String,
  },
  PEC_RegNo: {
    type: String,
  },
  CurrentAddress: {
    type: String,
  },
  PerAddress: {
    type: String,
  },
  proTraining: {
    type: String,
  },
  compLiteracy: {
    type: String,
  },
  award: {
    type: String,
  },
  NameOfPost: {
    type: String,
  },
  BasicPay: {
    type: String,
  },
  Organization: {
    type: String,
  },
  ServiceFromDate: {
    type: String,
  },
  ServiceToDate: {
    type: String,
  },
  publication: {
    type: String,
  },
  research: {
    type: String,
  },
  thesis: {
    type: String,
  },
  EducationArray: {
    type: Array,
  },
  ExpArrayData: {
    type: Array,
  },
  isApprove: {
    type: Number,
    default: 0,
  },
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
});
//

// DECLEAR CONST

const EMP_REGISTRATION = (module.exports = mongoose.model(
  "EMP_REGISTRATION",
  EMP_REGISTRATION_CONST
));

const EMP_INSERT = (module.exports = mongoose.model(
  "EMP_TEMP",
  EMP_INSERT_CONST
));

// EXPORT MODULES
module.exports = {
  EMP_REGISTRATION: EMP_REGISTRATION,
  EMP_INSERT: EMP_INSERT,
};
