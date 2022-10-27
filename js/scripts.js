AOS.init()


function validarEnviar() {
    //valida el nombre
    if (document.fvalida.nombre.value.length <= 5) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0;
    }
    //valida el Apellido
    if (document.fvalida.apellido.value.length <= 5) {
        alert("Tiene que escribir su Apellido")
        document.fvalida.apellido.focus()
        return 0;
    }
    //valida provincia
    if (document.fvalida.provincia.value.length <= 3) {
        alert("Tiene que escribir su Provincia")
        document.fvalida.provincia.focus()
        return 0;
    }

    //valida fecha
    if (document.fvalida.fecha.value == "2022-09-29") {
        alert("debe ingresar una fecha")
        document.fvalida.fecha.focus()
        return 0;
    }
    //Valida Mail

    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(document.fvalida.email.value)) { }
    else {
        alert("La dirección de email es incorrecta.")
        document.fvalida.email.focus()
        return 0;
    }

    // checkBox pagos
    var isCheckedBTC = document.getElementById("BTC").checked;
    var isCheckedETC = document.getElementById("ETC").checked;
    var isCheckedXRP = document.getElementById("XRP").checked;
    var isCheckedLTC = document.getElementById("LTC").checked;
    var isCheckedOtramoneda = document.getElementById('otramoneda').checked;
    // checkBox Destino
    var isCheckedBRC = document.getElementById("BRC").checked;
    var isCheckedEZE = document.getElementById("EZE").checked;
    var isCheckedMDZ = document.getElementById("MDZ").checked;
    var isCheckedMDQ = document.getElementById("MDQ").checked;
    var isCheckedOtrodestino = document.getElementById('otrodestino').checked;
    // checkBox Servicios
    var isCheckedhotel = document.getElementById("hotel").checked;
    var isCheckedresto = document.getElementById("resto").checked;
    var isCheckedrentcar = document.getElementById("rentcar").checked;
    var isCheckedotroservicio = document.getElementById("otroservicio").checked;


    if (isCheckedBTC == true) { }
    else if (isCheckedETC == true) { }
    else if (isCheckedXRP == true) { }
    else if (isCheckedLTC == true) { }
    else if (isCheckedOtramoneda == false)
        alert("al no tildar ninguna preferencia, se le enviara todas las Promociones de metodos de pago");

    if (isCheckedBRC == true) { }
    else if (isCheckedEZE == true) { }
    else if (isCheckedMDZ == true) { }
    else if (isCheckedMDQ == true) { }
    else if (isCheckedOtrodestino == false)
        alert("al no tildar ninguna preferencia de destino, se le enviara todas las Promociones ");

    if (isCheckedhotel == true) { }
    else if (isCheckedresto == true) { }
    else if (isCheckedrentcar == true) { }
    else if (isCheckedotroservicio == false)
        alert("al no tildar ninguna preferencia, se enviara todas las Promociones de servicios");



    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })}
   