const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getSignUpPage);
router.post("/sign-up", userController.SignUpUser);
router.post("/sign-in", userController.SignIn);

module.exports = router;
