'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tamanio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tamanio.hasMany(producto);
    }
  };
  tamanio.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tamanio',
  });
  return tamanio;
};