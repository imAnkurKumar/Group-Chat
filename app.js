const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const sequelize = require("./util/database");
const cors = require("cors");
const PORT = process.env.PORT;

const userRouter = require("./routes/user");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(cors());

app.use("/", userRouter);
app.use("/nexchat/user", userRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
