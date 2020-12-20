/**
 * class
 * FirebaseHelper class contains utitlity functions that are specific to firebase.
 */
class FirebaseHelper {
  /*
   * Constructor Function
   * @param database Connection Object
   */
  constructor({database}) {
    this._database = database;
  }

  /*
   * @param modelName - Name of the model to return
   * @returns {A firebase Model object}
   */
  getModel(modelName) {
    return this._database.ref().child(modelName);
  }

  /*
   *
   * @param model - The model/collection we want to create a new entity in.
   * @param newEntity - The new data to be created
   * @returns {object}
   */
  async saveEntity({model, newEntity}) {
    const pushId = model.push(newEntity).key();
    return {
      ...newEntity,
      id: pushId,
    };
  }

  /**
   * This performs a full update and not a partial one. It completely replaces the object.
   * @param model - The model/collection we want to create a new entity in.
   * @param newEntity - The new data to be created
   * @returns {object}
   */
  updateEntityFull({model, updatedEntity}) {
    return model.set(updatedEntity);
  }
}

module.exports = FirebaseHelper;
