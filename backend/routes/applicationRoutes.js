const express = require("express");

const {
    createApplication
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/", createApplication);

module.exports = router;