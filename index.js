function saludar() {
let nombre = prompt("Hola!! ¿Cual es tu nombre?")
alert("Bienvenidos al consultorio DR.LOPEZ-" + nombre )
}
function medicos() { 
    let listaMedicos = [ "Paz" , "Lio" ] 
    let nombre = prompt("Con que medico quiere ser atendido " + listaMedicos.map((medico)=>  "Dr " + medico ))
    if (nombre == "Paz") {
        alert("Va a ser atendido por el DR. Paz" )
        return nombre
    } 

    if (nombre == "Lio") {
        alert("Va a ser atendido por el DR. Lio" )
        return nombre
    } 
    alert("Escribio mal el nombre del Doctor, vuelva a intentar"  )
    medicos ()

    }

function turnos( medico ) {
  let eleccion = prompt("Elija entre LUNES 10am - JUEVES 9am - SABADO 12am")  
  alert ( "Tiene cita con el Dr " + medico + " el dia " + eleccion )

}



turnos (medicos(saludar()))