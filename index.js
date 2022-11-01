require("dotenv").config();

const express = require("express");
// Mongoose is a JavaScript object-oriented programming
// library that creates a connection between MongoDB and
// the Node.js JavaScript runtime environment.
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// MongoDB connection String
const mongoString = process.env.DATABASE_URL;

//Image view
var path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Image view

// Import all application routes
const Degree_routes = require("./routes/Degree");
const Register_routes = require("./routes/Register");
const Applicant_routes = require("./routes/Applicant");
const Program_routes = require("./routes/Program");
const AllDrop_routes = require("./routes/AllDrop");
const Dashboard_routes = require("./routes/Dashboard");
const ApplicantEdu_routes = require("./routes/ApplicantEdu");
const ApplicantImg_routes = require("./routes/ApplicantImg");
const DashboardProgram_routes = require("./routes/DashboardProgram");
const UniAdmission_routes = require("./routes/UniAdmission");
// FINANCE
const FIN_Accounts_routes = require("./routes/FIN_Accounts");
const FIN_ACC_Nature_routes = require("./routes/FIN_ACC_Nature");
const FIN_CostCenter_routes = require("./routes/FIN_CostCenter");
const FIN_FiscalYear_routes = require("./routes/FIN_FiscalYear");
//PROCRUETMENT
const PRO_SERVICES_routes = require("./routes/PRO_Services");
const PRO_REGISTRATION_routes = require("./routes/PRO_Registration");
const PRO_INSERT_routes = require("./routes/PRO_Insert");
//RECRUITMENT
const EMP_REGISTRATION_routes = require("./routes/EMP_Registration");
const EMP_INSERT_routes = require("./routes/EMP_Insert");
// IMAGES
const SaveImage_routes = require("./routes/SaveImage");
// HR
const HR_DISTRICT_routes = require("./routes/HR_DISTRICT");
const HR_AREA_routes = require("./routes/HR_AREA");
const HR_LOCATION_TYPE_routes = require("./routes/HR_LOCATION_TYPE");
const HR_LOCATION_routes = require("./routes/HR_LOCATION");
const HR_EMPLOYEE_TYPE_routes = require("./routes/HR_EMPLOYEE_TYPE");
const HR_EMP_DESIGNATION_routes = require("./routes/HR_EMP_DESIGNATION");
const HR_EMP_DEPARTMENT_routes = require("./routes/HR_EMP_DEPARTMENT");
//
// Connect mongodb to nodejs with mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

// Just check a db connection
database.on("error", (error) => {
  console.log(error);
});

// Chech connection was success or not
database.once("connected", () => {
  console.log("Database Connected");
});

// Express is a node js web application framework that
// provides broad features for building web and mobile
// applications. It is used to build a single page,
// multipage, and hybrid web application. It's a
// layer built on the top of the Node js that helps
//  manage servers and routes.

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Declear all routes of your application
app.use("/Degree", Degree_routes);
app.use("/Register", Register_routes);
app.use("/Applicant", Applicant_routes);
app.use("/Program", Program_routes);
app.use("/AllDrop", AllDrop_routes);
app.use("/Dashboard", Dashboard_routes);
app.use("/ApplicantEdu", ApplicantEdu_routes);
app.use("/ApplicantImg", ApplicantImg_routes);
app.use("/DashboardProgram", DashboardProgram_routes);
app.use("/UniAdmission", UniAdmission_routes);
// FINANCE
app.use("/FIN_COA", FIN_Accounts_routes);
app.use("/FIN_ACC_Nature", FIN_ACC_Nature_routes);
app.use("/FIN_CostCenter", FIN_CostCenter_routes);
app.use("/FIN_FiscalYear", FIN_FiscalYear_routes);
// PROCUREMENT
app.use("/PRO_Service", PRO_SERVICES_routes);
app.use("/PRO_Registration", PRO_REGISTRATION_routes);
app.use("/PRO_INSERT", PRO_INSERT_routes);
//RECRUITMENT
app.use("/EMP_Registration", EMP_REGISTRATION_routes);
app.use("/EMP_INSERT", EMP_INSERT_routes);
// SAVE IMAGE
app.use("/SaveImage", SaveImage_routes);
// HR
app.use("/HR_DISTRICT", HR_DISTRICT_routes);
app.use("/HR_AREA", HR_AREA_routes);
app.use("/HR_LOCATION_TYPE", HR_LOCATION_TYPE_routes);
app.use("/HR_LOCATION", HR_LOCATION_routes);
app.use("/HR_EMP_DESIGNATION", HR_EMP_DESIGNATION_routes);
app.use("/HR_EMP_DEPARTMENT", HR_EMP_DEPARTMENT_routes);
app.use("/HR_EMPLOYEE_TYPE", HR_EMPLOYEE_TYPE_routes);

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
