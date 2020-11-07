module.exports = function (sequelize, DataTypes) {
  const Raptors = sequelize.define(
    "Raptors",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      position: {
        type: DataTypes.ENUM(["PG", "SG", "SF", "PF", "C"]),
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      jersey: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      points: {
        type: DataTypes.FLOAT(5, 2),
      },
      fieldgoal: {
        type: DataTypes.FLOAT(5, 2),
        get() {
          const rawValue = this.getDataValue("fieldgoal");
          return rawValue ? rawValue.toPrecision(2) * 100 : null;
        },
      },
      rebounds: {
        type: DataTypes.FLOAT(5, 2),
        get() {
          const rawValue = this.getDataValue("rebounds");
          return rawValue ? Math.ceil(rawValue) * 10 : null;
        },
      },
      assists: {
        type: DataTypes.FLOAT(5, 2),
        get() {
          const rawValue = this.getDataValue("assists");
          return rawValue ? Math.ceil(rawValue) * 10 : null;
        },
      },
      personalfouls: {
        type: DataTypes.FLOAT(5, 2),
        get() {
          const rawValue = this.getDataValue("personalfouls");
          return rawValue ? Math.ceil(rawValue) * 10 : null;
        },
      },
      turnovers: {
        type: DataTypes.FLOAT(5, 2),
        get() {
          const rawValue = this.getDataValue("turnovers");
          return rawValue ? Math.ceil(rawValue) * 10 : null;
        },
      },
    },
    { timestamps: false },
  );
  return Raptors;
};
