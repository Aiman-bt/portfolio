const messageModel = require("../models/dataModel");
const router = require("express").Router();

router.post("/", (req, res) => {
  new messageModel(req.body)
    .save()
    .then(() => {
      console.log("user message saved from userRouter!");
      return res.status(200).json({ message: "success message recived" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json(err);
    });
});

module.exports = router;
