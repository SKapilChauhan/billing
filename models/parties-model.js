module.exports = (sequelize, Sequelize) => {
    const Parties = sequelize.define("parties", {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      mobile: {type: Sequelize.BIGINT},
      partyType: {type: Sequelize.BIGINT},
      location: {type: Sequelize.STRING},
      billingAddress: {type: Sequelize.STRING},
      shippingAddress: {type: Sequelize.STRING}
    });
    return Parties;
};