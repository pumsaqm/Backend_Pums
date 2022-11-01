const mongoose = require("mongoose");
const { Schema } = mongoose;

const Degree_ = new mongoose.Schema({
  DEGREE_TITLE: {
    type: String,
  },
});
const Degree = (module.exports = mongoose.model("Degree", Degree_));

const BloodGroup_ = new mongoose.Schema({
  BLOOD_TITLE: {
    type: String,
  },
});
const BloodGroup = (module.exports = mongoose.model("BloodGroup", BloodGroup_));

const Religion_ = new mongoose.Schema({
  RELEGION_TITLE: {
    type: String,
  },
});
const Religion = (module.exports = mongoose.model("Religion", Religion_));

const District_ = new mongoose.Schema({
  DISTRICT_TITLE: {
    type: String,
  },
});
const District = (module.exports = mongoose.model("District", District_));

const Gender_ = new mongoose.Schema({
  GENDER_TITLE: {
    type: String,
  },
});
const Gender = (module.exports = mongoose.model("Gender", Gender_));

const Marry_ = new mongoose.Schema({
  MARRY_TITLE: {
    type: String,
  },
});
const Marry = (module.exports = mongoose.model("Marry", Marry_));

const Applicant_ = new mongoose.Schema(
  {
    ApplicantID: {
      type: Schema.Types.ObjectId,
    },
    FormID: {
      type: String,
    },
    S_name: {
      type: String,
    },
    DOB: {
      type: String,
    },
    Domicile: {
      type: String,
    },
    S_Contact: {
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
    CNIC: {
      type: String,
    },
    C_Address: {
      type: String,
    },
    PerAddress: {
      type: String,
    },
    F_Name: {
      type: String,
    },
    F_Contact: {
      type: String,
    },
    F_OCC: {
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
    Religion: {
      type: String,
    },
    Nationality: {
      type: String,
    },
    District: {
      type: String,
    },
    Disability: {
      type: String,
    },
    DisabilityRemarks: {
      type: String,
    },
    Qouta: {
      type: String,
    },
    TestCenter: {
      type: String,
    },
    Status: {
      type: Boolean,
    },
    IsUpdate: {
      type: Boolean,
    },
    isActive: {
      type: Boolean,
    },
    FeeStatus: {
      type: String,
      default: "PENDING",
    },
  },
  { timestamps: true }
);
const Applicant = (module.exports = mongoose.model("Applicants", Applicant_));

const Program_ = new mongoose.Schema({
  DISTRICT_TITLE: {
    type: String,
  },
});
const Program = (module.exports = mongoose.model("Programs", Program_));

const EduAdmission_ = new mongoose.Schema(
  {
    ApplicantID: {
      type: Schema.Types.ObjectId,
    },
    ApplicantEdu: {
      type: Array,
    },
    SelectProgram: {
      type: Array,
    },
  },
  { timestamps: true }
);
const EduAdmission = (module.exports = mongoose.model(
  "EduAdmission",
  EduAdmission_
));

const ApplicantImages_ = new mongoose.Schema(
  {
    ApplicantID: {
      type: Schema.Types.ObjectId,
    },
    Profile: {
      type: String,
    },
    Domicile: {
      type: String,
    },
    Matric: {
      type: String,
    },
    Inter: {
      type: String,
    },
    CNIC: {
      type: String,
    },
    Chalan: {
      type: String,
    },
  },
  { timestamps: true }
);
const ApplicantImages = (module.exports = mongoose.model(
  "ApplicantImages",
  ApplicantImages_
));
const Register_ = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);
const Register = (module.exports = mongoose.model("User", Register_));

const Uni_Admission_ = new mongoose.Schema({
  UNI_TITLE: String,
  REGISTRATION: String,
  MESSAGE_REGISTER: Boolean,
  APPLY_ONLINE: String,
  UPLOAD_CHALLAN: String,
  DOWNLOAD_CHALLAN: String,
  DOWNLOAD_ADMIT_CARD: String,
  FALL: String,
  START_DATE: String,
  END_DATE: String,
  MESSAGE_USER: Boolean,
  CHALLAN_END_DATE: String,
  ADMIT_CARD_TEST_DATE: String,
  REPORTING_TIME: String,
  TEST_TIME: String,
  DURATION: String,
});
const Uni_Admission = (module.exports = mongoose.model(
  "Info_Admission",
  Uni_Admission_
));

// EXPORT MODULES
module.exports = {
  Degree: Degree,
  Register: Register,
  Program: Program,
  Applicant: Applicant,
  BloodGroup: BloodGroup,
  Religion: Religion,
  District: District,
  Gender: Gender,
  Marry: Marry,
  EduAdmission: EduAdmission,
  ApplicantImages: ApplicantImages,
  UniAdmission: Uni_Admission,
};
