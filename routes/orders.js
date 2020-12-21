const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const DI = require('../di-container');

const {VERSIONS, PATHS} = require('./route-constants');
const createOrderRoute = async (req, res) => {
  const responseHelper = DI.container.resolve('responseHelper');
  try {
    const createdOrder = await DI.container.resolve('createOrderService')(req);
    return responseHelper.successResponse(res, createdOrder);
  } catch (e) {
    console.log(e);
    return responseHelper.errorResponse(res, e);
  }
};
router.post(`${VERSIONS.V1}${PATHS.ORDERS}`, createOrderRoute);

module.exports = router;
