'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class visibilidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      visibilidad.hasMany(producto);
    }
  };
  visibilidad.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'visibilidad',
  });
  return visibilidad;
};