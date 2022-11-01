const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const moment = require("moment");
const dateFormat = "YYYY-MM-DD hh:mm:ss A";

//Schema
const HR_AREA_CONST = new mongoose.Schema({
  AREA_ID: Number,
  DISTRICT_ID: Schema.Types.ObjectId,
  AREA_NAME: String,
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

const HR_DISTRICT_CONST = new mongoose.Schema({
  DISTRICT_ID: Number,
  DISTRICT_NAME: String,
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

const HR_EMP_DEPARTMENT_CONST = new mongoose.Schema({
  EMP_DEPT_ID: Number,
  EMP_DEPT_TITLE: String,
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

const HR_EMP_DESIGNATION_CONST = new mongoose.Schema({
  EMP_DES_ID: Number,
  EMP_DES_TITLE: String,
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

const HR_EMPLOYEE_TYPE_CONST = new mongoose.Schema({
  EMPLOYEETYPE_ID: Number,
  EMPLOYEETYPE_TITLE: String,
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

const HR_LOCATION_CONST = new mongoose.Schema({
  LOCATION_ID: Number,
  LOCATION_TITLE: String,
  LOCATION_TYPE_ID: Schema.Types.ObjectId,
  PARENT_LOCATION_ID: Schema.Types.ObjectId,
  AREA_ID: Schema.Types.ObjectId,
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

const HR_LOCATION_TYPE_CONST = new mongoose.Schema({
  LOCATION_TYPE_ID: Number,
  LOCATION_TYPE_TITLE: String,
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

const HR_EMPLOYEE_CONST = new mongoose.Schema({
  EMPLOYEEID: String,
  EMPLOYEECODE: String,
  EMPLOYEENAME: String,
  EMP_FATHERNAME: String,
  EMPLOYEETYPE: String,
  BPS: String,
  GENDER: String,
  CNIC: String,
  DOB: String,
  DOJ: String,
  CONTACT_NO: String,
  EMAIL: String,
  PERM_ADDRESS: String,
  RES_ADDRESS: String,
  ISACTIVE: Number,
  DEACTIVE_REMARKS: String,
  EMP_DEPT_ID: Schema.Types.ObjectId,
  EMP_DES_ID: Schema.Types.ObjectId,
  LOCATION_ID: Schema.Types.ObjectId,
  DISTRICT_ID: Schema.Types.ObjectId,
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
const HR_AREA = (module.exports = mongoose.model("HR_AREA", HR_AREA_CONST));

const HR_DISTRICT = (module.exports = mongoose.model(
  "HR_DISTRICT",
  HR_DISTRICT_CONST
));

const HR_EMP_DEPARTMENT = (module.exports = mongoose.model(
  "HR_EMP_DEPARTMENT",
  HR_EMP_DEPARTMENT_CONST
));

const HR_EMP_DESIGNATION = (module.exports = mongoose.model(
  "HR_EMP_DESIGNATION",
  HR_EMP_DESIGNATION_CONST
));

const HR_EMPLOYEE_TYPE = (module.exports = mongoose.model(
  "HR_EMPLOYEE_TYPE",
  HR_EMPLOYEE_TYPE_CONST
));

const HR_LOCATION = (module.exports = mongoose.model(
  "HR_LOCATION",
  HR_LOCATION_CONST
));

const HR_LOCATION_TYPE = (module.exports = mongoose.model(
  "HR_LOCATION_TYPE",
  HR_LOCATION_TYPE_CONST
));

const HR_EMPLOYEE = (module.exports = mongoose.model(
  "HR_EMPLOYEE",
  HR_EMPLOYEE_CONST
));

// EXPORT MODULES
module.exports = {
  HR_AREA: HR_AREA,
  HR_DISTRICT: HR_DISTRICT,
  HR_EMP_DEPARTMENT: HR_EMP_DEPARTMENT,
  HR_EMP_DESIGNATION: HR_EMP_DESIGNATION,
  HR_EMPLOYEE_TYPE: HR_EMPLOYEE_TYPE,
  HR_LOCATION: HR_LOCATION,
  HR_LOCATION_TYPE: HR_LOCATION_TYPE,
  HR_EMPLOYEE: HR_EMPLOYEE,
};
