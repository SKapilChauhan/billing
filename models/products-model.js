module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
      pName: {type: Sequelize.STRING},
      categoryType: {type: Sequelize.BIGINT},
      pCode: {type: Sequelize.STRING},
      pDescription: {type: Sequelize.STRING},
      unit: {type: Sequelize.BIGINT},
      openingStock: {type: Sequelize.BIGINT},
      stockPrice: {type: Sequelize.BIGINT},
      salePrice: {type: Sequelize.BIGINT},
      purchasePrice: {type: Sequelize.BIGINT},
      HSNCode: {type: Sequelize.STRING}
    });
    return Products;
};