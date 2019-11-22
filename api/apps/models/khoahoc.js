'use strict';
module.exports = (sequelize, DataTypes) => {
  const khoahoc = sequelize.define('khoahoc', {
    tenkhoahoc: DataTypes.STRING,
    dieukienhoc: DataTypes.STRING,
    hinhanh: DataTypes.STRING,
    loaikhoahoc: DataTypes.STRING,
    phidichvu: DataTypes.BIGINT,
    soluongmua: DataTypes.BIGINT,
    trangthai: DataTypes.BIGINT
  }, {});
  khoahoc.associate = function(models) {
    // associations can be defined here
  };
  return khoahoc;
};