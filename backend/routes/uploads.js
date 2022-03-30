var express = require("express");
var router = express.Router();
var upload = require("../upload");

router.post("/", upload.single("file"), (req, res, next) => {
  const files = req.file;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});

module.exports = router;
