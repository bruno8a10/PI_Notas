
# sistema de notas
en el .env
posse los sigueintes datos que nor permite realizar la conexion con la base de datos

DB_USER=postgres
DB_PASSWORD=12345
DB_HOST=localhost:5432

se debera crear en potgres una base llamda alumnos

#### Tecnologías utilizada:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend
Se desarrollaro una aplicación de React/Redux que realiza
 - Buscar alumnos por su nombre
 - Filtrarlos  por las materias que cursan
 - Ordenarlos por nombres de la az o de za, este activo o lo los filtros
 - Crear alumnos
 - Crear materias
 - Modificar datos  de los Alumnos
 - pose paginado de 5 card por pagina
 - Ver detalles especifico de los alumnos(nombre,apellido,dni,domicilio,sexo, materias cursadas y su nota)
  - el home presenta un listdo de card(nombre, apellido y foto) de los alumnos registrado

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
-/notaAlumno:
- se pasa por body 1 id de usuario(idUsuario) y de materia (idMateria)y traera las notas del alumno y la materia que cursa 
ejemplo:
{ 
    "idUsuario":1,
    "idMateria":1
 }
resultado
 {
     "id": 1,
     "calificacion": 8,
     "materiumId": 1,
      "alumnoId": 1
  }

-/postAlumno:
  - Crea un alumno en la base de datos
  ejemplo
  { 
     "nombre": "Andres",
    "apellido": "Hernan",
    "dni": 28333552,
    "sexo": "Hombre",
    "estadoCivil": "Casado",
    "domicilio": "Sarmiento 492",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8RnoNn3iPmT9jgOBMyizAbTfvP8u4faW_Q&usqp=CAU",
    "materias":[1,2]
 }
 materias es el un aary con id de las materias que se encuentra en la base antes de dar el alta a los alumnos, se debera cargar las materias
- /postMateria:
  - Crea una materia en la base de datos 
  ejemplo
   { 
     "nombre": "Ingles",
 }
- /postNota:
  - Crea una nota en la base de datos recibe 3 propiedades por body
{
"idAlumno": 2,
"idMateria":1,
"calificacion":10
}
     
-/putMateria:
 -Nos permite modificar la materia por datos que pasamos por body
-/putAlumno
 -Nos permite modificar los datos de los alumnos que pasamos por body
