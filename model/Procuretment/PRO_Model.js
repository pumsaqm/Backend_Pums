const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss A";

//Schema
const PRO_SERVICES_CONST = new mongoose.Schema({
  SERVICE_TITLE: String,
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

const PRO_REGISTRATION_CONST = new mongoose.Schema({
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
    default: "Vendor",
  },
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
});

//VENDOR INSERT
const PRO_INSERT_CONST = new mongoose.Schema({
  Ven_RegistraionID: {
    type: String,
  },
  VendorID: {
    type: String,
  },
  businessName: {
    type: String,
  },
  URL: {
    type: String,
  },
  contactName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  faxNumber: {
    type: String,
  },
  cellNumber: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  purOrderEmail: {
    type: String,
  },
  CurrentAddress: {
    type: String,
  },
  PerAddress: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  religion: {
    type: String,
  },
  Nationality: {
    type: String,
  },
  Country: {
    type: String,
  },
  Province: {
    type: String,
  },
  City: {
    type: String,
  },
  Date: {
    type: String,
  },
  classification: {
    type: String,
  },
  category: {
    type: String,
  },
  NTNnumber: {
    type: String,
  },
  STRNnumber: {
    type: String,
  },
  CNICnumber: {
    type: String,
  },
  workExperience: {
    type: String,
  },
  tech_profAbility: {
    type: String,
  },
  productSupport: {
    type: String,
  },
  supportPolicy: {
    type: String,
  },
  organizationYears: {
    type: String,
  },
  contractTerminate: {
    type: String,
  },
  softwareSolution: {
    type: String,
  },
  lawSuits: {
    type: String,
  },
  bankruptcy: {
    type: String,
  },
  bankName: {
    type: String,
  },
  bankAddress: {
    type: String,
  },
  bankPhone: {
    type: String,
  },
  bankBranch: {
    type: String,
  },
  accName: {
    type: String,
  },
  accNumber: {
    type: String,
  },
  BICcode: {
    type: String,
  },
  IBANno: {
    type: String,
  },
  financeDepartment: {
    type: String,
  },
  isApprove: {
    type: Number,
    default: 0,
  },
  ServicesArray: {
    type: Array,
  },
  ENTRY_DATE: {
    type: String,
    default: moment().format(dateFormat),
  },
});
//

// DECLEAR CONST
const PRO_SERVICES = (module.exports = mongoose.model(
  "PRO_SERVICES",
  PRO_SERVICES_CONST
));

const PRO_REGISTRATION = (module.exports = mongoose.model(
  "PRO_REGISTRATION",
  PRO_REGISTRATION_CONST
));

const PRO_INSERT = (module.exports = mongoose.model(
  "VENDOR_TEMP",
  PRO_INSERT_CONST
));

// EXPORT MODULES
module.exports = {
  PRO_SERVICES: PRO_SERVICES,
  PRO_REGISTRATION: PRO_REGISTRATION,
  PRO_INSERT: PRO_INSERT,
};
