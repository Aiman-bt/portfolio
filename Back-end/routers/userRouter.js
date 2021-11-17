const userModel = require("../models/dataModel");
const messageModel = require("../models/dataModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  new userModel(req.body)
    .save()
    .then(() => {
      console.log("user data saved from user Router!");
      res.status(200).json({ message: "success data recived" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
