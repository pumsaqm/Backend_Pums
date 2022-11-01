//const express = require("express");

//const router = express.Router();
//const app = express();
//const multer = require("multer");

//module.exports = router;

//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, "./uploads");
//  },
//  filename: function (req, file, cb) {
//    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//    cb(null, file.fieldname + "-" + uniqueSuffix);
//  },
//});

//const upload = multer({ storage: storage });

//const { ApplicantImages } = require("../model/model");

//// INSERT
//router.post("/single", upload.single("image"), (req, res) => {
//  console.log(req.file);
//  res.send("single file upload success");
//});

const express = require("express");

const router = express.Router();
const multer = require("multer");

module.exports = router;

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const directory = `uploads/${req.query.folder}`;
      // cb(null,"uploads/Pro")
      cb(null, directory);
    },
    filename: function (req, file, cb) {
      // console.log(cb)
      cb(null, req.query.CNIC + ".jpg");
    },
  }),
}).single("image");
router.post("/upload", upload, (req, resp) => {
  // console.log(req.File)
  resp.send(req.file);
});

const { ApplicantImages } = require("../model/model");
