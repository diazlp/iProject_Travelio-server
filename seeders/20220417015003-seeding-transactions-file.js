"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const transactionData = require("../db/transactions.json").map(
      (transaction) => ({
        ...transaction,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );
    await queryInterface.bulkInsert("Transactions", transactionData);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};