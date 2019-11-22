'use strict';
module.exports = (sequelize, DataTypes) => {
  const taikhoan = sequelize.define('taikhoan', {
    email: {
     type: DataTypes.STRING,
     unique: true
    },
    tentaikhoan: {
      type: DataTypes.STRING,
      },
    matkhau: DataTypes.TEXT,
    quyen: DataTypes.BIGINT,
    trangthai: DataTypes.BIGINT
  }, {});
  taikhoan.associate = function(models) {
    // associations can be defined here
  };
  return taikhoan;
};