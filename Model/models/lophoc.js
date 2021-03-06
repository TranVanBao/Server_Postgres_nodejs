'use strict';
module.exports = (sequelize, DataTypes) => {
  const lophoc = sequelize.define('lophoc', {
    tenlophoc: DataTypes.STRING,
    thoigianbatdau: DataTypes.DATE,
    thoigianketthuc: DataTypes.DATE,
    soluonghocvien: DataTypes.INTEGER,
    id_hocvien: DataTypes.INTEGER,
    id_giangvien: DataTypes.INTEGER,
    id_khoahoc: DataTypes.INTEGER,
    trangthai: DataTypes.INTEGER
  }, {});
  lophoc.associate = function(models) {
    // associations can be defined here
  };
  return lophoc;
};