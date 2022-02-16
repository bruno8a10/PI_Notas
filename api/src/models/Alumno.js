const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('alumno', {

    nombre: {
      type: DataTypes.STRING,
   
    },
    apellido: {
        type: DataTypes.STRING,
     
    },
    dni:{
      type: DataTypes.INTEGER,
     
    },
    sexo: {
        type: DataTypes.STRING,
     
      },
    estadoCivil:{
        type: DataTypes.STRING,
       
      },
      domicilio:{
          type: DataTypes.STRING,
         
        },
        foto:{
            type: DataTypes.STRING,
           
          }
  }
  ,{timestamps: false}
  );
};