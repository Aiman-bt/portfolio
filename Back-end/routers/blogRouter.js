const Model = require("../models/blogModel");
const router = require("express").Router();

router.post("/save", (req, res) => {
  const data = req.body;
  console.log(data);

  new Model(data)
    .save()
    .then(() => {
      console.log("blog saved");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
