'use strict';
module.exports = (sequelize, DataTypes) => {
  const taikhoan = sequelize.define('taikhoan', {
    email: DataTypes.STRING,
    tentaikhoan: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    quyen: DataTypes.INTEGER,
    trangthai: DataTypes.INTEGER
  }, {});
  taikhoan.associate = function(models) {
    // associations can be defined here
  };
  return taikhoan;
};