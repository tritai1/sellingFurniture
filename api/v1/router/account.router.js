const express = require("express");
const router = express.Router();
const controller = require("../controller/account.controller")
router.get("/", controller.account)