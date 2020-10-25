module.exports = function (sequelize, DataTypes) {
  const Lakers = sequelize.define(
    "Lakers",
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
      },
      rebounds: {
        type: DataTypes.FLOAT(5, 2),
      },
      assists: {
        type: DataTypes.FLOAT(5, 2),
      },
      personalfouls: {
        type: DataTypes.FLOAT(5, 2),
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false },
  );
  return Lakers;
};
