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

    function turnos() {
        let nombre = prompt("Atención del DR. Hernandez los dias LUN - JUE - SAB ok?")
        if (nombre == "ok") {
            alert("Elija entre LUNES - JUEVES - SABADO " )
            alert("LUNES 10am - JUEVES 9am - SABADO 12am" )
            return


        } 

        alert("Escribio mal el nombre del Doctor, vuelva a intentar"  )
        medicos ()
        }
    

saludar()
medicos()
turnos ()