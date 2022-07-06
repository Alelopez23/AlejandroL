function saludar() {
let nombre = prompt("Hola!! ¿Cual es tu nombre?")
alert("Bienvenidos al consultorio DR.LOPEZ-" + nombre )
}
function medicos() { 
    let listNombres = [ "Paz" , "Lio" ] 

    let mensaje = "Con que medico quiere ser atendido "
    for( nombre in listNombres){
        mensaje +=  " Dr " + nombre
        }

    let nombre = prompt(mensaje)
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

function turnos( medico, cita ) {
  let eleccion = prompt("Elija entre LUNES 10am - JUEVES 9am - SABADO 12am")  
  alert ( "Tiene cita con el Dr " + medico + " el dia " + eleccion )

  cita.pagar ()
}

class precioConsulta {
    constructor( ) {
        this.primeraConsulta = true;
        this.otorgado = false;
        this.precio = 500;
        this.descuento = 0;
}

descuentoPrecio(precioDescuento) { 
    this.precio += precioDescuento;
}
pagar() {
    prompt( " Contas con " + this.precio + " y con un descuento " + this.descuento )
    this.otorgado = true;
    this.primeraConsulta = false;
    if (this.primeraConsulta == false ) {
        this.descuento =  " 100 veces más barato! "
        this.precio -=10; }
    else {
        this.precio -=1000; }
}

disminuirPrecio = (precioDisminuir) => (this.precio -= precioDisminuir);
aplicarDescuento = (promoConsulta) => {
    if(promoConsulta === "DESCUENTO20" )
    this.precio -=20
 }   
}

let cita = new precioConsulta ()

while (true) turnos(medicos(saludar()),cita)


