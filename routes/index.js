const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const orderRoutes = require('./orders');

/* GET health check endpoint. */
router.get('/', (req, res, next) => res.send('Ok'));

router.use(orderRoutes);

module.exports = router;
