'use strict';
module.exports = (sequelize, DataTypes) => {
  const diendan = sequelize.define('diendan', {
    tendiendan: DataTypes.STRING,
    trangthai: DataTypes.BIGINT,
    id_tkhoi : DataTypes.INTEGER ,
    id_tktraloi : DataTypes.INTEGER ,
    id_diendan : DataTypes.INTEGER                     
  }, {});
  diendan.associate = function(models) {
    // associations can be defined here
  };
  return diendan;
};