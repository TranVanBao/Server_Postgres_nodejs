'use strict';
module.exports = (sequelize, DataTypes) => {
  const phonghoc = sequelize.define('phonghoc', {
    tenphonghoc: DataTypes.STRING,
    trangthai: DataTypes.INTEGER
  }, {});
  phonghoc.associate = function(models) {
    // associations can be defined here
  };
  return phonghoc;
};