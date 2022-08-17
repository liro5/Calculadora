let Estudiantes = [];

function agregarEstudiantes(){

let nombre = document.getElementById("nombre").value;


if( nombre.length !=0){

    Estudiantes.push({Nombre:nombre});

    document.getElementById("ListaEstudiantes").innerHTML= "";

    for (let i=0; i < Estudiantes.length; i++){
        document.getElementById("ListaEstudiantes").innerHTML += Estudiantes[i].Nombre + "<br>";
    }

}else{
    alert("Por favor ingresar los datos requeridos")
}
}


