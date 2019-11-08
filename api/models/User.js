'use strict';
const { User } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 20],
        notEmpty: true,
      }
      unique: true,
    }
  },
  {
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 35],
        notEmpty: true,
      }
      unique: false,
    },
  },
  {
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 15],
        notEmpty: true,
      },
      unique: false,
    }
  }

  {
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 25],
        notEmpty: true,
      },
      unique: false,
    }
  },
  {
    cellphone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 10], //Needs to be 10 integers because all phone numbers have to be 10 numbers including the countrys numberEX US = +1)
        notEmpty: false,
      },
      unique: false,
    }
  },
  {
    major: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 45], //Needs to be 10 integers because all phone numbers have to be 10 numbers including the countrys numberEX US = +1)
        notEmpty: true,
      },
      unique: false,
    },
    {
    collegeName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100], //Needs to be 10 integers because all phone numbers have to be 10 numbers including the countrys numberEX US = +1)
        notEmpty: false,
      },
      unique: false,
    },
    {
    userBio: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 12000], //Needs to be 10 integers because all phone numbers have to be 10 numbers including the countrys numberEX US = +1)
        notEmpty: false,
      },
      unique: false,
    },
    {
    cellphone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 10], //Needs to be 10 integers because all phone numbers have to be 10 numbers including the countrys numberEX US = +1)
        notEmpty: true,
      },
      unique: true,
    },
   {
    sequelize,
    modelName: 'User'
  });

  /*User.associate = (models) => {
    // associations can be defined here

    // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
    models.User.belongsToMany(models.Movie, {through: 'MovieActor'});
  };
  */

  return User;
};