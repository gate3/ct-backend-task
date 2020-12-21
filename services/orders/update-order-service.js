module.exports = ({
  ordersRepository, orderValidator,
}) => async (requestContext) => {
  /**
   * The codeblock below is an Es6 method of destructuring
   * and assigning the destructured data to a new variable.
   */
  const {
    body: orderPayload,
    params: {
      orderId,
    },
  } = requestContext;
  console.log({orderId});
  await orderValidator(orderPayload);
  await ordersRepository.updateOrder({orderId, updatedOrder: orderPayload});
  return {
    ...orderPayload,
    id: orderId,
  };
};
