'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Pizza média',
        flavor: 'muçarela',
        price: 30,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza média',
        flavor: 'marguerita',
        price: 30,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza média',
        flavor: 'calabresa',
        price: 30,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza broto',
        flavor: 'muçarela',
        price: 25,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza broto',
        flavor: 'marguerita',
        price: 25,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pizza broto',
        flavor: 'calabresa',
        price: 25,
        complement:null,
        image:'url',
        type:'lunch',
        subtype:'pizza',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
