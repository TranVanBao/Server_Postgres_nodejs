'use strict';
module.exports = (sequelize, DataTypes) => {
  const dangky = sequelize.define('dangky', {
    id_khachhang: DataTypes.INTEGER,
    id_khoahoc: DataTypes.INTEGER
  }, {});
  dangky.associate = function(models) {
    // associations can be defined here
  };
  return dangky;
};