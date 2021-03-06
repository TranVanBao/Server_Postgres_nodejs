'use strict';
module.exports = (sequelize, DataTypes) => {
  const khoahoc = sequelize.define('khoahoc', {
    tenkhoahoc: DataTypes.STRING,
    dieukienhoc: DataTypes.TEXT,
    hinhanh: DataTypes.STRING,
    loaikhoahoc: DataTypes.STRING,
    phidichvu: DataTypes.INTEGER,
    soluongmua: DataTypes.INTEGER,
    trangthai: DataTypes.INTEGER
  }, {});
  khoahoc.associate = function(models) {
    // associations can be defined here
  };
  return khoahoc;
};