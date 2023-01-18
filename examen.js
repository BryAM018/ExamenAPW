
//Informacion gruardada
//información de estudiantes
var estudiantes = [
    {numeroCedula: "123456789", nombre: "Juan Perez", carrera: "Ingeniería en Sistemas"},
    {numeroCedula: "987654321", nombre: "Maria Gomez", carrera: "Medicina"},
    //... más estudiantes
];

//horarios de estudiantes
var horarios_estudiante = [
    {numeroCedula: "123456789", horario: "Lunes a Viernes 8am-12m"},
    {numeroCedula: "987654321", horario: "Martes y Jueves 2pm-6pm"},
];

localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
localStorage.setItem("horarios_estudiante", JSON.stringify(horarios_estudiante));

document.getElementById("form-eliminar-alumno").addEventListener("submit", function(event) {
    event.preventDefault();
    var cedula = document.getElementById("cedula").value;
    eliminarAlumno(cedula);
});


function eliminarAlumno(numeroCedula) {
    //Recuperar los estudiantes y horarios de LocalStorage
    var estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
    var horarios = JSON.parse(localStorage.getItem("horarios_estudiante"));

    //Eliminación del alumno en el arreglo de estudiantes
    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].numeroCedula === numeroCedula) {
            estudiantes.splice(i, 1);
            break;
        }
    }
    //Eliminación del alumno en el arreglo de horarios
    for (var j = 0; j < horarios.length; j++) {
        if (horarios[j].numeroCedula === numeroCedula) {
            horarios.splice(j, 1);
            break;
        }
    }
    //Guardar los arreglos actualizados en LocalStorage
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    localStorage.setItem("horarios_estudiante", JSON.stringify(horarios));
}
