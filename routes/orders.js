const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const DI = require('../di-container');
const responseHelper = DI.container.resolve('responseHelper');

const {VERSIONS, PATHS, PARAMETERS} = require('./route-constants');
const createOrderRoute = async (request, response) => {
  try {
    const createdOrder = await DI.container.resolve(
        'createOrderService',
    )(request);
    return responseHelper.successResponse(res, createdOrder);
  } catch (e) {
    return responseHelper.errorResponse(res, e);
  }
};
router.post(`${VERSIONS.V1}${PATHS.ORDERS}`, createOrderRoute);

const updateOrderRoute = async (request, response) => {
  try {
    const createdOrder = await DI.container.resolve(
        'updateOrderService',
    )(request);
    return responseHelper.successResponse(response, createdOrder);
  } catch (e) {
    return responseHelper.errorResponse(response, e);
  }
};
router.put(
    `${VERSIONS.V1}${PATHS.ORDERS}${PARAMETERS.ORDER_ID}`, updateOrderRoute,
);

module.exports = router;
