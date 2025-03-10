const express = require("express");
const router = express.Router();
const { getAllData, uploadData } = require("../controllers/dataController");
const authenticateToken = require("../middleware/auth");
const upload = require("../config/multer");

router.get("/data", authenticateToken, getAllData);
router.post("/upload", authenticateToken, upload.single("file"), uploadData);

module.exports = router;
