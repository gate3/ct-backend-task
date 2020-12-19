var express = require('express');
var router = express.Router();

/* GET health check endpoint. */
router.get('/', (req, res, next) => res.send('Ok'));

module.exports = router;
