/*
MOSTRAR FORMULARIOS
INICIO
 */
/**
    MOSTRAR LOS FORMULARIOS
 */

function mostrarInicio(){
    ocultarFormulario();
document.getElementById('principal').style.display="block";
}

/**
    RECLAMACIONES
 */

function mostarNuevaReclamacion(){
    ocultarFormulario();
    resetearCampoNuevaReclamacion();
    rellenaComboCliente();
    rellenaComboAbogado();
    rellenaComboFacturas();
    rellenaComboMulta();
    document.getElementById('formAgregarReclamacion').style.display="block";
}

function mostarSeguimiento(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbReclamacion"));
    resetearSelectReclamacion();

    rellenaComboReclamacion();

    document.getElementById('formSeleccionaReclamacion').style.display="block";
}

function  mostrarActualizacionReclamacion(){
    ocultarFormulario();
    rellenaComboReclamacion();
    resetearSelectModificacionReclamacion();
    document.getElementById('formActualizaReclamacion').style.display="block";

}

/**
    CLIENTES
 */

function mostrarNuevoCliente(){
    ocultarFormulario();
    resetearCampoAñadirCliente();
    document.getElementById('formAñadirCliente').style.display="block";
    var oFechaActual=new Date();
    document.querySelector("#fechaAltaCliente").setAttribute("placeholder",oFechaActual.getDate()+"/"+(oFechaActual.getMonth()+1)+"/"+oFechaActual.getFullYear());
    document.getElementById('fechaAltaCliente').style.display="block";
}

function mostrarBajaCliente(){
    ocultarFormulario();
    rellenaComboCliente();
    document.getElementById('formBajaCliente').style.display="block";
}
function mostrarModificarCliente(){
    ocultarFormulario();
    rellenaComboCliente();
    document.getElementById('formModificarCliente').style.display="block";

}
function mostrarHistorialCliente(){
    ocultarFormulario();
    document.querySelector("#formHistorialCliente").style.display="block";
    mostrarTablaCliente();
}
function mostrarFormModificarCliente(){
    ocultarFormulario();
    resetearCampoClienteModficacion();

    document.getElementById('formClienteModificado').style.display="block";

    var clienteSeleccionado=document.querySelector('#clienteAModificar').value;
    console.log(clienteSeleccionado);
    var dniClienteModificar=clienteSeleccionado.split(",")[0];
    console.log(dniClienteModificar);
    var formDni= document.querySelector("#dniClienteAModificar");
    formDni.value=dniClienteModificar;
    formDni.setAttribute("readonly","readonly");


    var oCliente=oGestion.cogerCliente(dniClienteModificar);
    document.querySelector("#nombreAModificar").value=oCliente.nom;
    document.querySelector("#telfAModificar").value=oCliente.telf;
    document.querySelector("#emailAModificar").value=oCliente.email;


}
function mostrarTablaCliente(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbTodos"));
    document.querySelector("#formHistorialCliente").style.display="block";
    document.querySelector("#tbTodos").style.display="block";

    var lista=oGestion.cogerTodosLosClientes();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("D.N.I"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Telefono"));


    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("email"));

    document.querySelector("#tbTodos").appendChild(oTabla);
    var oTBody=oTabla.createTBody();


    for(i=0;i<lista.length;i++){
        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].dni));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].nom));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].telf));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].email));

    }
}
function mostrarTablaClienteMiembro(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbMiembros"));
    document.querySelector("#formHistorialCliente").style.display="block";
    document.querySelector("#tbMiembros").style.display="block";

    var lista=oGestion.cogerListaMiembros();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("D.N.I"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Telefono"));


    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Email"));
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Fecha"));


    var oTBody=oTabla.createTBody();


    for(i=0;i<lista.length;i++){
        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].dni));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].nom));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].telf));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].email));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].fecha));

    }
    document.querySelector("#tbMiembros").appendChild(oTabla);
}
function mostrarTablaClienteNoMiembro(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbNoMiembros"));
    document.querySelector("#formHistorialCliente").style.display="block";
    document.querySelector("#tbNoMiembros").style.display="block";

    var lista=oGestion.cogerListaNoMiembros();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("D.N.I"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Telefono"));


    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Email"));
    oCelda=document.createElement("th");


    var oTBody=oTabla.createTBody();


    for(i=0;i<lista.length;i++){
        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].dni));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].nom));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].telf));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].email));


    }
    document.querySelector("#tbNoMiembros").appendChild(oTabla);
}

/**
    ABOGADOS
 */

function mostrarNuevoAbogado(){
    ocultarFormulario();
    resetearCampoNuevoAbogado();
    document.getElementById('formAgregarAbogado').style.display="block";
}
function mostarBajaAbogado(){
    ocultarFormulario();
    resetearCampoBajaAbogado();
    rellenaComboAbogado();
    document.getElementById('formBajaAbogado').style.display="block";
}
function mostarModificacionSueldo(){
    ocultarFormulario();
    resetarCampoModificarSueldo();
    rellenaComboAbogado();
    document.getElementById('formModificarSueldo').style.display="block";
}
function mostrarHistorialAbogado(){

    ocultarFormulario();
    document.querySelector("#formHistorialAbogado").style.display="block";
    document.querySelector("#frmHistorialAbogados").reset();
    mostrarTablaAbogados();

}
function mostrarTablaAbogados(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbAbogados"));
    document.querySelector("#formHistorialAbogado").style.display="block";
    document.querySelector("#tbAbogados").style.display="block";

    var lista=oGestion.cogerAbogados();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("D.N.I"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Sueldo"));

    document.querySelector("#tbTodos").appendChild(oTabla);
    var oTBody=oTabla.createTBody();


    for(i=0;i<lista.length;i++){
        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].dni));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].nom));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].sueldo));


    }

    document.querySelector("#tbAbogados").appendChild(oTabla);
}
function mostrarTablaMedia(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbMedia"));
    document.querySelector("#formHistorialAbogado").style.display="block";
    document.querySelector("#tbMedia").style.display="block";
    var lista=oGestion.cogerAbogados();
    var sueldoMayor=lista[0].sueldo;
    var sueldoMenor=lista[0].sueldo;
    var suma=0;
    var media=0;
    var contador=0;
    for(var z=0;z<lista.length;z++){
        if(sueldoMayor <= lista[z].sueldo){
            sueldoMayor=lista[z].sueldo;
        }
        if(sueldoMenor > lista[z].sueldo){
            sueldoMenor=lista[z].sueldo;
        }
            suma+=parseFloat(lista[z].sueldo);
            contador++;
    }

    media=parseFloat(suma/contador);
    console.log(suma);

    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Sueldo Mayor"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Sueldo Menor"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Media"));

    document.querySelector("#tbMedia").appendChild(oTabla);
    var oTBody=oTabla.createTBody();



        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(sueldoMayor));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(sueldoMenor));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(media));




    document.querySelector("#tbMedia").appendChild(oTabla);

}
/**
    FACTURAS
 */

function mostrarEmitirFactura(){
    ocultarFormulario();
    resetearCampoFacturas();
    var oFechaActual=new Date();
    document.agregarFactura.fecha.setAttribute("placeholder",oFechaActual.getDate()+"/"+(oFechaActual.getMonth()+1)+"/"+oFechaActual.getFullYear());
    document.getElementById('formFactura').style.display="block";
}

function mostrarHistorialFactura(){
    ocultarFormulario();
    document.getElementById("frmHistorialFactura").style.display="block";
    vaciarCombo(document.querySelector("#tbFacturas"));

    var lista=oGestion.cogerFacturas();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Estado"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Importe"));
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Fecha"));

    document.querySelector("#tbFacturas").appendChild(oTabla);
    var oTBody=oTabla.createTBody();


    for(i=0;i<lista.length;i++){
        oFila=oTBody.insertRow(-1);
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].nom));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].importe));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].estado));
        oCelda=oFila.insertCell(-1);
        oCelda.appendChild(document.createTextNode(lista[i].fecha));


    }
}

/**
    MULTAS
 */

function mostrarMultas(){
    ocultarFormulario();
    resetarCampoMultas();
    var oFechaActual=new Date();
    document.frmAgregarMulta.fechaMulta.setAttribute("placeholder",oFechaActual.getDate()+"/"+(oFechaActual.getMonth()+1)+"/"+oFechaActual.getFullYear());
    document.getElementById('formMulta').style.display="block";
}

/**
    OCULTAR FORMULARIO
 */

function ocultarFormulario(){
    document.getElementById('principal').style.display="none"; // Inicio.

/*
    Cliente
 */

    document.getElementById('formAñadirCliente').style.display="none"; // formulario nuevo Cliente.
    document.getElementById('formBajaCliente').style.display="none"; // formulario baja cliente.
    document.getElementById('formModificarCliente').style.display="none"; // formulario cliente para modificar.
    document.getElementById('formClienteModificado').style.display="none"; // formulario cliente para modificar.
    document.querySelector("#formHistorialCliente").style.display="none"; // formulario historia
    document.querySelector("#tbTodos").style.display="none"; // historial cliente
    document.querySelector("#tbMiembros").style.display="none"; // historial cliente
    document.querySelector("#tbNoMiembros").style.display="none"; // historial cliente
    document.querySelector("#tbAbogados").style.display="none"; // historial cliente
    document.querySelector("#tbMedia").style.display="none"; // historial cliente


/*
    Abogado
*/

    document.getElementById('formAgregarAbogado').style.display="none"; // formulario nuevo abogado.
    document.getElementById('formBajaAbogado').style.display="none"; // formulario baja abogado.
    document.getElementById('formModificarSueldo').style.display="none"; // formulario modificar sueldo.
    document.querySelector("#formHistorialAbogado").style.display="none";

    document.getElementById('formFactura').style.display="none"; // formulario nueva factura.
    document.getElementById('frmHistorialFactura').style.display="none"; // formulario nueva factura.

    document.getElementById('formMulta').style.display="none"; // formulario multa.


/*
    Reclamacion
 */
    document.getElementById('formAgregarReclamacion').style.display="none"; // formulario nueva reclamacion.
    document.getElementById('formSeleccionaReclamacion').style.display="none"; // formulario actualizar reclamacion.
    document.getElementById('formActualizaReclamacion').style.display="none"; // formulario para el seguimiento de una reclamacion.

}

/**
    GESTION DE DATOS
 */

/**
    AGREGAR CLIENTE
 */

function agregarCliente(){
    var validar=validarAgregarCliente();
    console.log(validar);

    if(validar){
        var dni = document.getElementById('dniCliente').value.trim();
        var nombre = document.getElementById('nombreCliente').value.trim();
        var telf = document.getElementById('telefonoCliente').value.trim();
        var email = document.getElementById('emailCliente').value.trim();
        var oCliente;
        if(document.getElementById('ClienteMiembro').checked){

            var fecha=document.getElementById('fechaAltaCliente').value.trim();
                if(fecha==""){
                    fecha=document.getElementById('fechaAltaCliente').getAttribute("placeholder");
                }
            oCliente= new Miembro(dni,nombre,telf,email,fecha);
            console.log(oCliente);
            sInfo=oGestion.agregarCliente(oCliente);
            if(sInfo){
                toastr.error("El cliente "+dni+" - "+ nombre+" ya esta registrado","Error");
            }else{
                toastr.success("El cliente "+dni+" - "+ nombre+" se ha registrado","Cliente Registrado");
            }
            resetearCampoAñadirCliente();

        }else{

            oCliente= new NoMiembro(dni,nombre,telf,email);
            sInfo=oGestion.agregarCliente(oCliente);

            if(sInfo){
                toastr.error("El cliente "+dni+" - "+ nombre+" ya esta registrado","Error");
            }else{
                toastr.success("El cliente "+dni+" - "+ nombre+" se ha registrado","Cliente Registrado");
            }

            resetearCampoAñadirCliente();
        }

    }
}

/**
    BAJA CLIENTE
 */

function bajaCliente(){
console.log("entrar");
    var clienteSeleccionado=document.querySelector('#ClienteABaja').value;
    console.log(clienteSeleccionado);
    var dniCliente=clienteSeleccionado.split(",")[0];
    sInfo=oGestion.fntEliminarCliente(dniCliente);

    if(sInfo){
        toastr.success("el cliente "+ clienteSeleccionado+" ha sido dado de baja","Clienta Eliminado");
    }
    rellenaComboCliente();
}


function modificarClienteMod(){

    var validar=validarModificacionCliente();

    if(validar) {
        var dni = document.querySelector('#dniClienteAModificar').value.trim();
        var nombre = document.querySelector("#nombreAModificar").value.trim();
        var telf = document.querySelector("#telfAModificar").value.trim();
        var email = document.querySelector("#emailAModificar").value.trim();

// Comprobar si el cliente es miembro

        var comprobarMiembro=oGestion.cogerClienteMiembro(dni);
            console.log(comprobarMiembro);
        if(comprobarMiembro){
            oCliente= new Miembro (dni,nombre,telf,email);
            sInfo=oGestion.fntModificarCliente(oCliente,comprobarMiembro);
            if(sInfo){
                toastr.success("El cliente "+dni+" - "+nombre+" fue modificado","Cliente Modificado");
            }else {
                toastr.error("Error en la modificacion del cliente "+ dni+ " - "+ nombre,"Error");
            }

        }else{
            oCliente= new NoMiembro (dni,nombre,telf,email);
            sInfo=oGestion.fntModificarCliente(oCliente,comprobarMiembro);
            if(sInfo){
                toastr.success("Modificado","El cliente "+ dni+" - "+" ha sido modificado","Cliente Modificado");
            }else {
                toastr.error("Error","El cliente "+dni+" - "+ nombre+" no se puede modificar","Error");
            }
        }

resetearCampoClienteModficacion();

    }



    console.log(validar);
}
function agregarReclamacion(){
    var validar=validarAgregarReclamacion();
    if(validar){
        var nombre=document.formNuevaReclamacion.nomReclamacion.value.trim();

        var estado=document.formNuevaReclamacion.estadoReclamacion.value;
        var cliente=document.formNuevaReclamacion.clienteReclamacion.value;
        var dniCliente=cliente.split(",")[0];
        var abogado=document.formNuevaReclamacion.abogadoReclamacion.value;
        var dniAbogado=abogado.split(",")[0];
        var factura=document.formNuevaReclamacion.facturaReclamacion.value;
        var multa=document.formNuevaReclamacion.multaReclamacion.value;

        var oReclamacion= new Reclamacion(nombre,estado,factura,dniCliente,multa,dniAbogado);
        sInfo=oGestion.agregarReclamacion(oReclamacion);
        if(!sInfo){
            toastr.success("La reclamacion "+nombre+" ha sido añadida","Reclamacion añadida");
        }else{
            toastr.error("la reclamacion "+nombre+" ya existe","Error");
        }
    }
    console.log(validar);
}

function agregarAbogado(){
    var validar=validarAgregarAbogado();
    var oAbogado;
    if(validar){
        var dni=document.querySelector("#dniAbogado").value.trim();
        var nombre=document.querySelector("#nombreAbogado").value.trim();
        var sueldo=document.querySelector("#sueldo").value.trim();

        oAbogado=new Abogado(dni,nombre,sueldo);
        sInfo=oGestion.agregarAbogado(oAbogado);
        if(sInfo) {
            toastr.error("El abogado Ya esta contratado","Error");
        }else{

            toastr.success("Abogado Contrado", {timeOut: 5000},"Abogado Contratado")
        }

    }
    resetearCampoNuevoAbogado();
}
function fntEliminarAbogado(){
    var abogadoSelect=document.querySelector('#seleccionarAbogadoModif').value;

    var dniAbogado=abogadoSelect.split(",")[0];
    sInfo=oGestion.fntBajaAbogado(dniAbogado);
    rellenaComboAbogado();
}

function modificarSueldoAbogado(){

    var validar=validarModificarSueldoAbogado();

    if(validar){
        console.log("entra");
          var abogadoSelect=document.querySelector('#seleccionarAbogado').value;
          var dniAbogado=abogadoSelect.split(",")[0];
          var sueldo=document.querySelector("#sueldoModificado").value.trim();
          console.log(dniAbogado);
          sInfo=oGestion.modificarAbogado(dniAbogado,sueldo);
        if(sInfo){
            toastr.success("El sueldo del abogado "+abogadoSelect+" ha sido modificado","Sueldo Modificado");
        }
            resetarCampoModificarSueldo();



    }
    console.log(validar);
}

function añadirFactura(){
    var validar=validarFactura();
    var existe;
    var oFactura;
    var descuento;
    if(validar){
        var nombre=document.agregarFactura.nombreFactura.value.trim();
        var importe=parseFloat(document.agregarFactura.importeFactura.value.trim());
        var estado=document.agregarFactura.estados.value.trim();
        var fecha=document.agregarFactura.fecha.value.trim();
        if(fecha==""){
            fecha=document.agregarFactura.fecha.getAttribute("placeholder");
        }
        console.log(importe);
        if(document.agregarFactura.miembro.checked){
            descuento=parseFloat(importe*0.20);
            importe-=descuento;
            console.log(importe);
        }
        oFactura= new Factura(nombre,fecha,importe,estado);
        existe=oGestion.nuevaFactura(oFactura);
        if(existe){
            toastr.error("La factura "+nombre+ " ya esta registrada","Error");
        }else{
            toastr.success("La factura "+ nombre + "se registro correctamente","Factura Registrada");
        }
    }
    console.log(validar);
    resetearCampoFacturas();
}
function agregarMulta(){
    var validar=validarMulta();
    if(validar){
        var nombre=document.frmAgregarMulta.nombreMulta.value.trim();
        var importe=document.frmAgregarMulta.importeMulta.value.trim();
        var fecha=document.frmAgregarMulta.fechaMulta.value.trim();
        if(fecha==""){
            fecha=document.frmAgregarMulta.fechaMulta.getAttribute("placeholder");
        }
        var desc=document.frmAgregarMulta.descripcionMulta.value.trim();
        var aleg=document.frmAgregarMulta.alegacionesMulta.value.trim();
        var oMulta=new Multa(nombre,importe,fecha,desc,aleg);
        sInfo=oGestion.añadirMulta(oMulta);

    }
    if(sInfo){
        toastr.error("La multa "+nombre+ " ya esta registrada","Error");
    }else{
        toastr.success("La multa "+ nombre + "se registro correctamente","Factura Registrada");
    }
    console.log(validar);
}

/**

 VALIDACIONES DE FORMULARIO

 */
/**
    FORMULARIOS CLIENTE

*/
function validarAgregarCliente(){
  var  validacion=true;

    var dniCiente=document.getElementById('dniCliente').value.trim();
    var campoDniCiente=document.getElementById('dniCliente');

    var nombreCiente=document.getElementById('nombreCliente').value.trim();
    var campoNombreCiente=document.getElementById('nombreCliente');
    var telefonoCliente=document.getElementById('telefonoCliente').value.trim();
    var campoTelefonoCliente=document.getElementById('telefonoCliente');
    var emailCliente=document.getElementById('emailCliente').value.trim();
    var campoEmailCliente=document.getElementById('emailCliente');

    var error="";
    var oExpReg=/^\d{8}[a-zA-Z]$/;

    if(oExpReg.test(dniCiente)==false){

        error+="Error en el campo dni<br>";
        campoDniCiente.style.backgroundColor="orange";
    }else{
        campoDniCiente.style.backgroundColor="white";

    }

    var oExpReg=/^[A-Z][a-z]{3,40}$/;

    if(oExpReg.test(nombreCiente)==false){

        error+="Error en el campo nombre<br>";
        campoNombreCiente.style.backgroundColor="orange";
    }else{
        campoNombreCiente.style.backgroundColor="white";

    }
    var oExpReg= /^[679]\d{8}$/;

    if(oExpReg.test(telefonoCliente)==false){

        error+="Error en el campo telefono<br>";
        campoTelefonoCliente.style.backgroundColor="orange";
    }else{
        campoTelefonoCliente.style.backgroundColor="white";

    }
    var oExpReg= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if(oExpReg.test(emailCliente)==false){

        error+="Error en el campo email<br>";
        campoEmailCliente.style.backgroundColor="orange";
    }else{
        campoEmailCliente.style.backgroundColor="white";

    }
if(document.getElementById('ClienteMiembro').checked){
    var fecha=document.getElementById('fechaAltaCliente').value.trim();
    var campoFecha=document.getElementById('fechaAltaCliente');
    if (fecha == ""){
        fecha = document.clienteM.fechaAltaCliente.getAttribute("placeholder");
    }

    var oExpReg=/^([0-9]{1,2})[/]{1}([0-9]{1,2})[/]{1}([0-9]{4})$/;
    if (oExpReg.test(fecha)==false){

        error+="Error en el campo fecha <br>";
        campoFecha.style.backgroundColor="orange";

    }else{
        campoFecha.style.backgroundColor="white";
        oFechaActual = new Date(fecha.split("/")[2],(fecha.split("/")[1]-1),fecha.split("/")[0]);
        if (oFechaActual.getDate() !=fecha.split("/")[0]){
            toastr.error("El dia es incorrecto","Error en la fecha");
            campoFecha.style.backgroundColor="orange";
        }else if ((oFechaActual.getMonth()+1) !=fecha.split("/")[1]){
            toastr.error("El mes es incorrecto","Error en la fecha");
            campoFecha.style.backgroundColor="orange";
        }
    }
}

if(error!=""){
    toastr.error(error,"Fallo en la Validacion");
    validacion=false;
}

    return validacion;

}


function validarModificacionCliente(){
    var validar=true;
    var error="";

    var dni=document.getElementById('dniClienteAModificar').value.trim();
    var campoDni=document.getElementById('dniClienteAModificar');
    var nombre=document.getElementById('nombreAModificar').value.trim();
    var campoNombre=document.getElementById('nombreAModificar');
    var telf=document.getElementById('telfAModificar').value.trim();
    var campoTelf=document.getElementById('telfAModificar');
    var email=document.getElementById('emailAModificar').value.trim();
    var campoEmail=document.getElementById('emailAModificar');


    var oExpReg=/^\d{8}[a-zA-Z]$/;

    if(oExpReg.test(dni)==false){

        error+="Error en el campo dni<br>";
        campoDni.style.backgroundColor="orange";
    }else{
        campoDni.style.backgroundColor="white";

    }

    var oExpReg=/^[A-Z][a-z]{3,40}$/;

    if(oExpReg.test(nombre)==false){

        error+="Error en el campo nombre<br>";
        campoNombre.style.backgroundColor="orange";
    }else{
        campoNombre.style.backgroundColor="white";

    }
    var oExpReg= /^[679]\d{8}$/;

    if(oExpReg.test(telf)==false){

        error+="Error en el campo telefono<br>";
        campoTelf.style.backgroundColor="orange";
    }else{
        campoTelf.style.backgroundColor="white";

    }
    var oExpReg= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if(oExpReg.test(email)==false){

        error+="Error en el campo email<br>";
        campoEmail.style.backgroundColor="orange";
    }else{
        campoEmail.style.backgroundColor="white";

    }
    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validar=false;
    }

    return validar;


}

/**
    FORMILARIOS DE LOS ABOGADOS
 */

function validarAgregarAbogado(){
    var validacion=true;
    var nombre=document.getElementById('nombreAbogado').value.trim();
    var campoNombre=document.getElementById('nombreAbogado');
    var dni=document.getElementById('dniAbogado').value.trim();
    var campoDni=document.getElementById('dniAbogado');
    var sueldo=document.getElementById('sueldo').value.trim();
    var campoSueldo=document.getElementById('sueldo');
    var error="";

    var oExpReg=/^[A-Z][a-z]{3,40}$/;

    if(oExpReg.test(nombre)==false){

        error+="Error en el campo nombre<br>";
        campoNombre.style.backgroundColor="orange";
    }else{
        campoNombre.style.backgroundColor="white";

    }
    var oExpReg=/^\d{8}[a-zA-Z]$/;

    if(oExpReg.test(dni)==false){

        error+="Error en el campo dni<br>";
        campoDni.style.backgroundColor="orange";
    }else{
        campoDni.style.backgroundColor="white";

    }
    var oExpReg=/^\d{3,4},\d{2}$/;

    if(oExpReg.test(sueldo)==false){

        error+="Error en el campo sueldo<br>";
        campoSueldo.style.backgroundColor="orange";
    }else{
        campoSueldo.style.backgroundColor="white";

    }

    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validacion=false;
    }



    return validacion;

}

function validarModificarSueldoAbogado(){
    var sueldo=document.getElementById('sueldoModificado').value.trim();
    var campoSueldo=document.getElementById('sueldoModificado');
    var validacion=true;
    var error="";
    var oExpReg=/^\d{3,4},\d{2}$/;

    if(oExpReg.test(sueldo)==false){

        error+="Error en el campo sueldo<br>";
        campoSueldo.style.backgroundColor="orange";
    }else{
        campoSueldo.style.backgroundColor="white";

    }

    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validacion=false;
    }



    return validacion;

}

/**
    FORMULARIOS RECLAMACIONES
 */

function validarAgregarReclamacion(){

    var nombre=document.getElementById('nomReclamacion').value.trim();
    var campoNombre=document.getElementById('nomReclamacion');
    var error="";
    var validacion =true;

    var oExpReg=/^\d{3}-[a-z]{3}$/;

    if (oExpReg.test(nombre)==false){
        if(validacion){

            campoNombre.focus();
        }
        error+="Error en el campo nombre <br>";
        campoNombre.style.backgroundColor="orange";

    }else{
        campoNombre.style.backgroundColor="white";
    }
    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validacion=false;
    }
    return validacion;


}

/**
    FORMULARIO FACTURAS
 */

function validarFactura(){
    var validacion=true;
    var error="";

    var nombre=document.getElementById('nombreFactura').value.trim();
    var campoNombre=document.getElementById('nombreFactura');
    var importe=document.getElementById('importeFactura').value.trim();
    var campoImporte=document.getElementById('importeFactura');
    var estado=document.getElementById('estados').value.trim();
    var campoEstado=document.getElementById('estados');
    var fechaFact=document.getElementById('fecha').value.trim();
    if (fechaFact == ""){
        fechaFact = document.agregarFactura.fecha.getAttribute("placeholder");
    }
    var campoFechaFact=document.getElementById('fecha');

    var oExpReg=/^[a-z]{3}-\d{3}$/;

    if (oExpReg.test(nombre)==false){
        if(validacion){

            campoNombre.focus();
        }
        error+="Error en el campo nombre <br>";
        campoNombre.style.backgroundColor="orange";

    }else{
        campoNombre.style.backgroundColor="white";
    }

    var oExpReg=/^\d{3,4},\d{2}$/;

    if (oExpReg.test(importe)==false){
        if(validacion){

            campoNombre.focus();
        }
        error+="Error en el campo importe <br>";
        campoImporte.style.backgroundColor="orange";

    }else{
        campoImporte.style.backgroundColor="white";
    }

    var oExpReg=/^[a-z]{3,40}$/;
    if (oExpReg.test(estado)==false){
        if(validacion){

            campoEstado.focus();
        }
        error+="Error en el campo estado <br>";
        campoEstado.style.backgroundColor="orange";

    }else{
        campoEstado.style.backgroundColor="white";
    }


    var oExpReg=/^([0-9]{1,2})[/]{1}([0-9]{1,2})[/]{1}([0-9]{4})$/;
    if (oExpReg.test(fechaFact)==false){
        if(validacion){

            campoFechaFact.focus();
        }
        campoFechaFact.style.backgroundColor="orange";


    }else{
        campoFechaFact.style.backgroundColor="white";
        //ofechaActual = Objeto tipo fecha =YYYY/MM/DD

        oFechaActual = new Date(fechaFact.split("/")[2],(fechaFact.split("/")[1]-1),fechaFact.split("/")[0]);
        if (oFechaActual.getDate() !=fechaFact.split("/")[0]){
            toastr.error("El dia es incorrecto","Error en la fecha");
            campoFechaFact.style.backgroundColor="orange";
        }else if ((oFechaActual.getMonth()+1) !=fechaFact.split("/")[1]){
            toastr.error("El mes es incorrecto","Error en la fecha");
            campoFechaFact.style.backgroundColor="orange";

        }


    }



    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validacion=false;
    }
    return validacion;


}

/**
   FORMULARIO MULTAS
 */

function validarMulta(){

    var validacion=true;
    var error="";
    var nombre=document.getElementById('nombreMulta').value.trim();
    var campoNombre=document.getElementById('nombreMulta');
    var importe=document.getElementById('importeMulta').value.trim();
    var campoImporte=document.getElementById('importeMulta');
    var fechaMulta=document.getElementById('fechaMulta').value.trim();
    var campoFechaMulta=document.getElementById('fechaMulta');
    var descripcion=document.getElementById('descripcionMulta').value.trim();
    var campoDescripcion=document.getElementById('descripcionMulta');
    var alegacion=document.getElementById('alegacionesMulta').value.trim();
    var campoAlegacion=document.getElementById('alegacionesMulta');

    if (fechaMulta == ""){
        fechaMulta = document.frmAgregarMulta.fechaMulta.getAttribute("placeholder");
    }
    var oExpReg=/^\d{3}-[a-z]{3}-\d{3}$/;

    if (oExpReg.test(nombre)==false){
        if(validacion){

            campoNombre.focus();
        }
        error+="Error en el campo nombre <br>";
        campoNombre.style.backgroundColor="orange";

    }else{
        campoNombre.style.backgroundColor="white";
    }

    var oExpReg=/^\d{3,4},\d{2}$/;

    if (oExpReg.test(importe)==false){
        if(validacion){

            campoNombre.focus();
        }
        error+="Error en el campo importe <br>";
        campoImporte.style.backgroundColor="orange";

    }else{
        campoImporte.style.backgroundColor="white";
    }

    var oExpReg=/^[a-z]{3,40}$/;
    if (oExpReg.test(descripcion)==false){
        if(validacion){

            campoDescripcion.focus();
        }
        error+="Error en el campo descripcion <br>";
        campoDescripcion.style.backgroundColor="orange";

    }else{
        campoDescripcion.style.backgroundColor="white";
    }


    var oExpReg=/^([0-9]{1,2})[/]{1}([0-9]{1,2})[/]{1}([0-9]{4})$/;
    if (oExpReg.test(fechaMulta)==false){
        if(validacion){

            campoFechaMulta.focus();
        }
        error+="Error en el campo fecha <br>";
        campoFechaMulta.style.backgroundColor="orange";

    }else{
        campoFechaMulta.style.backgroundColor="white";
        oFechaActual = new Date(fechaMulta.split("/")[2],(fechaMulta.split("/")[1]-1),fechaMulta.split("/")[0]);
        if (oFechaActual.getDate() !=fechaMulta.split("/")[0]){
            toastr.error("El dia es incorrecto","Error en la fecha");
            campoFechaMulta.style.backgroundColor="orange";
        }else if ((oFechaActual.getMonth()+1) !=fechaMulta.split("/")[1]){
            toastr.error("El mes es incorrecto","Error en la fecha");
            campoFechaMulta.style.backgroundColor="orange";

        }

    }

    var oExpReg=/^[a-z]{3,40}$/;
    if (oExpReg.test(alegacion)==false){
        if(validacion){

            campoAlegacion.focus();
        }
        error+="Error en el campo alegacion <br>";
        campoAlegacion.style.backgroundColor="orange";

    }else{
        campoAlegacion.style.backgroundColor="white";
    }

    if(error!=""){
        toastr.error(error,"Fallo en la Validacion");
        validacion=false;
    }
    return validacion;
}

/**
     RESETEAR LOS CAMPOS DE LOS FORMULARIOS
 */
function resetearCampoAñadirCliente(){

    document.getElementById('agregarCliente').reset();
    document.getElementById('clienteM').reset();
    document.getElementById('ClienteMiembro').checked=0;
    document.getElementById('dniCliente').style.backgroundColor="white";
    document.getElementById('nombreCliente').style.backgroundColor="white";
    document.getElementById('telefonoCliente').style.backgroundColor="white";
    document.getElementById('emailCliente').style.backgroundColor="white";
    document.getElementById('fechaAltaCliente').style.backgroundColor="white";
    document.getElementById('clienteM').style.display="none";


}

function resetearCampoBajaCliente(){

    document.getElementById('ClienteABaja').selectedIndex=0;
}

function resetearCampoSeleccionarCliente(){

    document.getElementById('clienteAModificar').selectedIndex=0;
}
function resetearCampoClienteModficacion(){

    document.getElementById('formClienteAModificar').reset();
    document.getElementById('dniClienteAModificar').style.backgroundColor="white";
    document.getElementById('nombreAModificar').style.backgroundColor="white";
    document.getElementById('telfAModificar').style.backgroundColor="white";
    document.getElementById('emailAModificar').style.backgroundColor="white";
}
function resetearCampoNuevaReclamacion(){

    document.getElementById('formNuevaReclamacion').reset();
    document.getElementById('nomReclamacion').style.backgroundColor="white";
}
function resetearSelectReclamacion(){

    document.getElementById('buscarReclamacion').selectedIndex=0;
}
function resetearSelectModificacionReclamacion(){

    document.getElementById('formReclamacionActualiza').reset();
}
function resetearCampoNuevoAbogado(){

    document.getElementById('agregarAbogado').reset();
    document.getElementById('dniAbogado').style.backgroundColor="white";
    document.getElementById('nombreAbogado').style.backgroundColor="white";
    document.getElementById('sueldo').style.backgroundColor="white";
}

function resetearCampoBajaAbogado(){

    document.getElementById('formDarBajaAbogado').reset();
}

function resetarCampoModificarSueldo(){

    document.getElementById('formModificarSueloAbogado').reset();
    document.getElementById('sueldoModificado').style.backgroundColor="white";
}
function resetearCampoFacturas(){

    document.getElementById('formAgregarFactura').reset();
    document.getElementById('nombreFactura').style.backgroundColor="white";
    document.getElementById('importeFactura').style.backgroundColor="white";
    document.getElementById('estados').style.backgroundColor="white";
    document.getElementById('fecha').style.backgroundColor="white";
    document.getElementById('miembroFactura').checked=0;

}

function resetarCampoMultas(){

    document.getElementById('agregarMulta').reset();
    document.getElementById('nombreMulta').style.backgroundColor="white";
    document.getElementById('importeMulta').style.backgroundColor="white";
    document.getElementById('fechaMulta').style.backgroundColor="white";
    document.getElementById('descripcionMulta').style.backgroundColor="white";
    document.getElementById('alegacionesMulta').style.backgroundColor="white";
}

function rellenaComboCliente(){

    vaciarCombo(document.querySelector("#ClienteABaja"));
    vaciarCombo(document.querySelector("#clienteAModificar"));
    vaciarCombo(document.querySelector("#clienteReclamacion"));
    var clientesArray=oGestion.arrayClientes();
    console.log(clientesArray);

    var select=document.getElementById('ClienteABaja');
    var select2=document.querySelector("#clienteAModificar");
    var select3=document.querySelector("#clienteReclamacion");

    for(i=0;i<clientesArray.length;i++){

        // Select dar de baja cliente

        var opcion=document.createElement('option');
        var texto=document.createTextNode(clientesArray[i]);
        opcion.appendChild(texto);
        opcion.value=clientesArray[i];
        select.appendChild(opcion);

        // Select modificar cliente

        var opcion2=document.createElement('option');
        var texto2=document.createTextNode(clientesArray[i]);

        opcion2.appendChild(texto2);
        opcion2.value=clientesArray[i];
        select2.appendChild(opcion2);

        //Select cliente reclamacion

        var opcion3=document.createElement('option');
        var texto3=document.createTextNode(clientesArray[i]);
        opcion3.appendChild(texto3);
        opcion3.value=clientesArray[i];
        select3.appendChild(opcion3);
    }

}
function vaciarCombo(objetoPadre){

    while (objetoPadre.children.length!=0){
        objetoPadre.removeChild(objetoPadre.firstElementChild);
    }

}
function rellenaComboAbogado(){
    vaciarCombo(document.querySelector("#seleccionarAbogadoModif"));
    vaciarCombo(document.querySelector("#seleccionarAbogado"));
    vaciarCombo(document.querySelector("#abogadoReclamacion"));
    var lista=oGestion.arrayAbogados();

    console.log(lista)

    var select=document.getElementById('seleccionarAbogadoModif');
    var select2=document.querySelector("#seleccionarAbogado");
    var select3=document.querySelector("#abogadoReclamacion");

    for(i=0;i<lista.length;i++){


        var opcion=document.createElement('option');
        var texto=document.createTextNode(lista[i]);
        opcion.appendChild(texto);
        opcion.value=lista[i];
        select.appendChild(opcion);



        var opcion2=document.createElement('option');
        var texto2=document.createTextNode(lista[i]);

        opcion2.appendChild(texto2);
        opcion2.value=lista[i];
        select2.appendChild(opcion2);


        var opcion3=document.createElement('option');
        var texto3=document.createTextNode(lista[i]);
        opcion3.appendChild(texto3);
        opcion3.value=lista[i];
        select3.appendChild(opcion3);
    }


}
function rellenaComboFacturas() {
    vaciarCombo(document.formNuevaReclamacion.facturaReclamacion);
    var select = document.formNuevaReclamacion.facturaReclamacion;
    var lista = oGestion.cogerFacturas();
    for (var i = 0; i < lista.length; i++) {


        var opcion = document.createElement('option');
        var texto = document.createTextNode(lista[i].nom);
        opcion.appendChild(texto);
        opcion.value = lista[i].nom;
        select.appendChild(opcion);


    }
}
function rellenaComboMulta(){
    vaciarCombo(document.formNuevaReclamacion.multaReclamacion);
    var select = document.formNuevaReclamacion.multaReclamacion;
    var lista = oGestion.cogerMultas();
    for (var i = 0; i < lista.length; i++) {


        var opcion = document.createElement('option');
        var texto = document.createTextNode(lista[i]);
        opcion.appendChild(texto);
        opcion.value = lista[i];
        select.appendChild(opcion);


    }

}
function rellenaComboReclamacion(){
    vaciarCombo(document.frmSelectReclamacion.buscarReclamacion);
    var select = document.frmSelectReclamacion.buscarReclamacion;
    var select2 = document.frmReclamacionActualizar.reclamcionAmodificar;
    var lista = oGestion.cogerReclamacion();
    for (var i = 0; i < lista.length; i++) {


        var opcion = document.createElement('option');
        var texto = document.createTextNode(lista[i].nom);
        opcion.appendChild(texto);
        opcion.value = lista[i].nom;
        select.appendChild(opcion);

        var opcion2 = document.createElement('option');
        var texto2 = document.createTextNode(lista[i].nom);
        opcion2.appendChild(texto2);
        opcion2.value = lista[i].nom;
        select2.appendChild(opcion2);



    }


}
function mostrarTablaReclamacion(){
    ocultarFormulario();
    vaciarCombo(document.querySelector("#tbReclamacion"));
    document.querySelector("#formSeleccionaReclamacion").style.display="block";
    document.querySelector("#tbReclamacion").style.display="block";

    var lista=oGestion.cogerReclamacion();
    var oTabla=document.createElement("table");


    // oTabla.classList.add("tabla");
    oTabla.setAttribute("class","table table-striped");

    var oThead=oTabla.createTHead();
    var oFila=oThead.insertRow(-1);
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Nombre"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Estado"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Cliente"));


    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Multa"));
    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Factura"));

    oCelda=document.createElement("th");
    oFila.appendChild(oCelda);
    oCelda.appendChild(document.createTextNode("Abogado"));

    document.querySelector("#tbReclamacion").appendChild(oTabla);
    var oTBody=oTabla.createTBody();

    var nombreReclamacion=document.frmSelectReclamacion.buscarReclamacion.value;
    for(var i= 0;i<lista.length;i++) {
        if(lista[i].nom==nombreReclamacion) {
            oFila = oTBody.insertRow(-1);
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].nom));
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].estado));
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].cliente));
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].multa));
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].abogado));
            oCelda = oFila.insertCell(-1);
            oCelda.appendChild(document.createTextNode(lista[i].factura));
        }
    }
}
function actualizarReclamacion(){

    var reclamacion=document.frmReclamacionActualizar.reclamcionAmodificar.value;
    var estado=document.frmReclamacionActualizar.estadoModificado.value;

    sInfo=oGestion.actualizarReclamacion(reclamacion,estado);
    toastr.success("La reclamacion "+reclamacion+" ha sido actualizada","Reclamacion Actulizada");
}