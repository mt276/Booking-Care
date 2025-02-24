"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      statusId: { type: DataTypes.UUID },
      doctorId: { type: DataTypes.UUID },
      patientId: { type: DataTypes.UUID },
      date: { type: DataTypes.DATE },
      timeTypeId: { type: DataTypes.UUID },
    },
    { sequelize, allCode: "Booking" }
  );

  return Booking;
};
