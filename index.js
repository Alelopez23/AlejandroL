function saludar() {
let nombre = prompt("Hola!! ¿Cual es tu nombre?")
alert("Bienvenidos al consultorio DR.LOPEZ-" + nombre )
}
function medicos() {
    let nombre = prompt("Con que medico quiere ser atendido (Hernandez - Ramirez)")
    if (nombre == "Hernandez") {
        alert("Va a ser atendido por el DR. Hernandez" )
        return
    } 

    if (nombre == "Ramirez") {
        alert("Va a ser atendido por el DR. Ramirez" )
        return
    } 
    alert("Escribio mal el nombre del Doctor, vuelva a intentar"  )
    medicos ()
    }

saludar()
medicos()