module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define(
    "Player",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      position: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      jersey: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      height: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      weight: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      points: {
        type: DataTypes.FLOAT(10, 2),
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      fieldgoal: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      rebounds: {
        type: DataTypes.FLOAT(10, 2),
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      assists: {
        type: DataTypes.FLOAT(10, 2),
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      turnovers: {
        type: DataTypes.FLOAT(10, 2),
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      personalfouls: {
        type: DataTypes.FLOAT(10, 2),
        // allowNull: false,
        // validate: {
        //   len: [1],
        // },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false },
  );
  return Player;
};
