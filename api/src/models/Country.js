const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,

      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
 
    },
    flag:{
      type: DataTypes.STRING,

    },
    region:{
      type: DataTypes.STRING,
    
    },
    subregion:{
      type: DataTypes.STRING,
 
    },
    area:{
      type: DataTypes.FLOAT,
  
    },
    population:{
      type: DataTypes.FLOAT,

    }
  }
  ,{timestamps: false}
  );
};
