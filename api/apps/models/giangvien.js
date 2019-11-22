'use strict';
module.exports = (sequelize, DataTypes) => {
  const giangvien = sequelize.define('giangvien', {
    hoten: DataTypes.STRING,
    sdt: DataTypes.BIGINT,
    diachi: DataTypes.STRING,
    email: DataTypes.STRING,
    gioitinh: DataTypes.STRING,
    linhvuc: DataTypes.STRING,
    trangthai: DataTypes.BIGINT,
    id_tk : DataTypes.INTEGER 
  }, {});
  giangvien.associate = function(models) {
    // associations can be defined here
  };
  return giangvien;
};