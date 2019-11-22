'use strict';
module.exports = (sequelize, DataTypes) => {
  const hocvien = sequelize.define('hocvien', {
    hoten: DataTypes.STRING,
    sdt: DataTypes.BIGINT,
    diachi: DataTypes.STRING,
    email: DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    trangthai: DataTypes.BIGINT,
     
  }, {});
  hocvien.associate = function(models) {
    // associations can be defined here
  };
  return hocvien;
};