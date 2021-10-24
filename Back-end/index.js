const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const userRouter = require("./routers/userRouter");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("server started ...");
});