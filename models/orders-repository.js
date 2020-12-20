/**
 * The order repository (following the repository pattern)
 * is a DAL component that is used to access the persistence layer,
 * and perform operations on it.
 * https://deviq.com/repository-pattern/
 * @module OrdersRepository
 */
class OrdersRepository {
  /**
   * @module constructor
   * @param {object} databaseHelper - The database helper class,
   * used to make database operations like an ORM.
   */
  constructor({databaseHelper}) {
    const collectionName = 'orders';
    this._databaseHelper = databaseHelper;
    this._orderModel = databaseHelper.getModel(collectionName);
  }

  /**
   *
   * @param {object}
   *  - newOrder - The information about orders to save.
   * @return {Promise<order>} - Returns a promise containing,
   * an object with a new pushId
   */
  createOrder({newOrder}) {
    return this._databaseHelper.saveEntity({
      model: this._orderModel,
      newEntity: newOrder,
    });
  }
}

module.exports = OrdersRepository;
