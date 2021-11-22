'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categoria',
          },
          key: 'id'
        },
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'colors',
          },
          key: 'id'
        },    
      },
      marcaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'marcas',
          },
          key: 'id'
        },
      },
      visibilidadId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'visibilidads',
          },
          key: 'id'
        },
      },
      tamanioId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tamanios',
          },
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productos');
  }
};