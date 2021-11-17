const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");
const message = require("./routers/message");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/user", userRouter);
app.use("/message", message);
app.get("/*", (req, res) => {
  return res.json({
    msg: "haan chal rha hai",
  });
});
app.listen(port, () => {
  console.log("server started ...");
});
