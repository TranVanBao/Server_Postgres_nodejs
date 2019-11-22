'use strict';
module.exports = (sequelize, DataTypes) => {
  const khachhang = sequelize.define('khachhang', {
    tenkhachhang: DataTypes.STRING,
    sdt: DataTypes.INTEGER,
    diachi: DataTypes.STRING,
    email: DataTypes.STRING,
    trangthai: DataTypes.INTEGER,
    id_tk: DataTypes.INTEGER
  }, {});
  khachhang.associate = function(models) {
    // associations can be defined here
  };
  return khachhang;
};