const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routers/userRouter");
const messageRouter = require("./routers/messageRouter");
const blogRouter = require("./routers/blogRouter");
const cors = require("cors");
const { request } = require("express");

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/message", messageRouter);
app.use("/blog", blogRouter);

//server
app.listen(port, () => {
  console.log("server started ...");
});
