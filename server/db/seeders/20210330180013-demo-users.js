'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Nathalia',
        email: 'cozinha@restaurante.com',
        password: '123456',
        role:'cozinha',
        restaurant:'restaurante',
        createdAt: new Date(),
        updatedAt: new Date(),      
      },
      {
        name: 'Joana',
        email: 'cozinha@restaurante.com',
        password: '123456',
        role:'cozinha',
        restaurant:'restaurante',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Abreu',
        email: 'salao@restaurante.com',
        password: '123456',
        role:'salao',
        restaurant:'restaurante',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Ivete',
        email: 'salao@restaurante.com',
        password: '123456',
        role:'salao',
        restaurant:'restaurante',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
