'use strict';
module.exports = (sequelize, DataTypes) => {
  const phonghoc = sequelize.define('phonghoc', {
    tenphong: DataTypes.STRING,
    trangthai: DataTypes.BIGINT
  }, {});
  phonghoc.associate = function(models) {
    // associations can be defined here
  };
  return phonghoc;
};