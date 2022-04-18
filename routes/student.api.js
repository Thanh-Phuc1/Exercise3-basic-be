let data = {};
const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", function (req, res, next) {
  let response;

  try {
    response = fs.readFileSync("./db.json", "utf8");
    response = JSON.parse(response);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).send(response);
});

/* GET students. */
router.get("/:id", function (req, res, next) {
  // const id = req.params.id;
  // console.log(params);
  let response;
  try {
    response = fs.readFileSync("./db.json", "utf8");
    response = JSON.parse(response);
  } catch (error) {
    console.log(error);
  }

  return res.status(200).send(response.filter((e) => e.id === req.params.id));
});

module.exports = router;
