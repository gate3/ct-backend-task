module.exports = ({
  ordersRepository, orderValidator,
}) => async (requestContext) => {
  /**
   * The codeblock below is an Es6 method of destructuring
   * and assigning the destructured data to a new variable.
   */
  const {
    body: orderPayload,
  } = requestContext;
  await orderValidator(orderPayload);
  return ordersRepository.createOrder({newOrder: orderPayload});
};
