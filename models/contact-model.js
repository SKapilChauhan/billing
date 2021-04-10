module.exports = (sequelize, Sequelize) => {
    const Contacts = sequelize.define("contacts", {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      mobile: {type: Sequelize.BIGINT},
    });
    return Contacts;
};