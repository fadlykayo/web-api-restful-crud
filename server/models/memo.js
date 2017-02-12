'use strict';
module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memos', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Memo;
};
