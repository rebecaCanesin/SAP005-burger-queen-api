'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Bolo',
        flavor: 'chocolate',
        price: 10,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bolo',
        flavor: 'laranja',
        price: 10,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bolo',
        flavor: 'cenoura',
        price: 10,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brigadeiro',
        flavor: 'chocolate',
        price: 5,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Beijinho',
        flavor: 'coco',
        price: 5,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'deserts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
