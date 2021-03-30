'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Refrigerante',
        flavor: 'cola',
        price: 10,
        complement:'500ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante',
        flavor: 'cola',
        price: 15,
        complement:'750ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante',
        flavor: 'laranja',
        price: 10,
        complement:'500ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante',
        flavor: 'laranja',
        price: 15,
        complement:'750ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante',
        flavor: 'guaraná',
        price: 10,
        complement:'500ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante',
        flavor: 'guaraná',
        price: 15,
        complement:'750ml',
        image:'url',
        type:'lunch',
        subtype:'drinks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
