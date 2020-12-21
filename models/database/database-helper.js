/**
 * The database helper class is a layer over firebase,
 * it helps provide a common interface for performing operations on firebase
 * and any other database type.
 *
 * When a new database is to be used,
 * we can implement same functions and
 * do the database specific implementation within them.
 * This helps us swap out database types and avoid vendor locking.
 *
 * @module DatabaseHelper
 */
class DatabaseHelper {
  /**
   * @module constructor
   * @param {object} database - The firebase instance itself
   *
   */
  constructor({database}) {
    this._database = database;
  }

  /**
   *
   * @param {string} collectionName - Name of the firebase collection we want.
   * @return {firebaseRef} - Firebase ref to the root of the collection.
   */
  getModel(collectionName) {
    return this._database.ref().child(collectionName);
  }

  /**
   *
   * @param {firebaseRef} model - A firebase model or collection ref.
   * @param {object} newEntity - The data we wish to save as a Js object.
   * @return {Promise<{object}>} - The saved data with the pushId attached.
   */
  async saveEntity({model, newEntity}) {
    const pushId = model.push(newEntity).key;
    return {
      ...newEntity,
      id: pushId,
    };
  }

  /**
   * This performs a full update and not a partial one.
   * It completely replaces the object.
   * @param {firebaseRef} model - A firebase model or collection ref.
   * @param {object} newEntity - The full entity including the changes,
   * since this will be used in a PUT operation.
   * @return {object} - null
   */
  updateFullEntity({model, updatedEntity}) {
    return model.set(updatedEntity);
  }
}

module.exports = DatabaseHelper;
