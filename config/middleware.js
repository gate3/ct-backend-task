const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morganLogger = require('morgan')
const helmet = require('helmet');
const Logger = require('./logger');

const appLogger = new Logger({
    serviceName: process.env.APP_NAME
});

const router = express.Router();

router.use(cors());
router.use(helmet());
router.use(morganLogger('combined', { stream: appLogger.logger.stream }));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser());

module.exports = router;
