const multer = require("multer");
const fs = require("fs");

const checkDirectory = () => {
  if (fs.existsSync("./uploads")) return true;
  else return false;
};
if (!checkDirectory()) fs.mkdirSync("./uploads");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage });
module.exports = upload;
