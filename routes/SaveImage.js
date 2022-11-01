const express = require("express");
const router = express.Router();
const multer = require("multer");
module.exports = router;

//
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const directory = `uploads/${req.query.folder}`;
      // cb(null,"uploads/Pro")
      cb(null, directory);
    },
    filename: function (req, file, cb) {
      // console.log(cb)
      cb(null, req.query.CNIC + ".png");
    },
  }),
}).single("image");
router.post("/upload", upload, (req, resp) => {
  resp.send(req.file);
});
