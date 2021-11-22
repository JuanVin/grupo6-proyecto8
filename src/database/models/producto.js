'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        producto.belongsTo(categoria);
        producto.belongsTo(color);
        producto.belongsTo(marca);
        producto.belongsTo(tamanio);
        producto.belongsTo(visibilidad);
        producto.hasMany(imagen);
    }
  };
  producto.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    marcaId: DataTypes.INTEGER,
    visibilidadId: DataTypes.INTEGER,
    tamanioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};