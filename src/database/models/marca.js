'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      marca.hasMany(producto);
    }
  };
  marca.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'marca',
  });
  return marca;
};