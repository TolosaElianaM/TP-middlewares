var express = require('express');
var router = express.Router();
const {admin} = require("../controllers/adminController");
const userAuth = require("../middlewares/userAuth")

/* GET admin page. */
router.get('/', userAuth,admin);

module.exports = router;