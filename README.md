
# sistema de notas

#### Tecnologías utilizada:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend
Se desarrollaro una aplicación de React/Redux que realiza
 - Buscar alumnos
 - Filtrarlos / Ordenarlos
 - Crear alumnos,materias,notas

#### Backend
Se desarrollaron las siguientes rutasNode/Express:

- /alumnos:
  - traera todo los alumnos cargados en la base de datos
- /alumnoId/:id:
  - traera los datos de un alumno especifico  
-  /materias:
  - traera toda las materias cargada en la base de datos
- /alumnos?name="..."__:
  - obtener los alumnos que coincidan con el nombre pasado como query parameter 
-/materias: 
 - traera todas las materias cargadas en la base de datos
-/notas: 
 - traera todas las notas cargadas en la base de datos
-/postAlumno:
  - Crea un alumno en la base de datos
- /postMateria:
  - Crea una materia en la base de datos 
- /postNota:
  - Crea una nota en la base de datos

