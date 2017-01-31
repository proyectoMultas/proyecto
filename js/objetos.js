/**
 * Created by adrian on 09/01/2017.
 */

/**
        OBJETO CLIENTE
 * @param dni
 * @param nombre
 * @param telefono
 * @param email
 * @constructor
 */


function Cliente(dni,nombre,telefono,email){

    this.dni=dni;
    this.nom=nombre;
    this.telf=telefono;
    this.email=email;

}

Cliente.prototype.toHTMLRow=function() {

    return "<td>"+this.dni+"</td>"+"<td>"+this.nom+"</td>"+"<td>"+this.telf+"</td><td>"+this.email+"</td>";

};

// Objeto miembro que hereda de cliente

function Miembro (dni,nombre,telefono,email,fecha_alta){
    Cliente.call(this,dni,nombre,telefono,email);
    this.fecha=fecha_alta;

}
Miembro.prototype=Object.create(Cliente.prototype);
Miembro.prototype.constructor=Miembro;


Miembro.prototype.toHTMLRow = function(){

    return "<td>"+this.dni+"</td>"+"<td>"+this.nombre+"</td><td>"+this.email+"</td><td>"+this.fecha+"</td>";

};

// Objeto no miembro que hereda de cliente

function NoMiembro (dni,nombre,telefono,email){
    Cliente.call(this,dni,nombre,telefono,email);


}
NoMiembro.prototype=Object.create(Cliente.prototype);
NoMiembro.prototype.constructor=NoMiembro;


Miembro.prototype.toHTMLRow = function(){

    return "<td>"+this.dni+"</td>"+"<td>"+this.nombre+"</td><td>"+this.email+"</td>";

};

/**
        OBJETO FACTURA
 * @param nombre
 * @param fecha
 * @param estado
 * @param importe
 * @constructor
 */

function Factura(nombre,fecha,estado,importe){

    this.nom=nombre;
    this.fecha=fecha;
    this.estado=estado;
    this.importe=importe;

}

Factura.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.fecha+"</td>"+"<td>"+this.estado+"</td><td>"+this.importe+"</td>";

};
/**
         OBJETO MULTA

 * @param nombre
 * @param importe
 * @param fecha_multa
 * @param descripcion
 * @param alegaciones
 * @constructor
 */

function Multa(nombre,importe,fecha_multa,descripcion,alegaciones){

    this.nom=nombre;
    this.importe=importe;
    this.fecha=fecha_multa;
    this.descripcion=descripcion;
    this.alegaciones=alegaciones;


}

Multa.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.importe+"</td>"+"<td>"+this.fecha+"</td><td>"+this.descripcion+"</td><td>"+this.alegaciones+"</td>";

};


/**
        OBJETO ABOGADO
 * @param dni
 * @param nombre
 * @param sueldo
 * @constructor
 */

function Abogado(dni,nombre,sueldo){

    this.dni=dni;
    this.nom=nombre;
    this.sueldo=sueldo;

}

Abogado.prototype.toHTMLRow=function() {

    return "<td>"+this.dni+"</td>"+"<td>"+this.nom+"</td>"+"<td>"+this.sueldo+"</td>";

};

/**
        OBJETO RECLAMACION
 * @param nombre
 * @param estado
 * @param factura
 * @param cliente
 * @param multa
 * @param abogado
 * @constructor
 */

function Reclamacion(nombre,estado,factura, cliente,abogado,multa){

    this.nom=nombre;
    this.estado=estado;
    this.cliente=cliente;
    this.multa=multa;
    this.abogado=abogado;
    this.factura=factura;



}

Reclamacion.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.estado+"</td>"+"<td>"+this.factura+"</td><td>"+this.cliente+"</td><td>"+this.multa+"</td><td>"+this.abogado+"</td>";

};

/**
        OBJETO GESTION
 * @constructor
 */

function Gestion(){
    this.listaCliente=[];
    this.listaAbogado=[];
    this.listaFacturas=[];
    this.listaMulta=[];
    this.listaReclamacion=[];

}


/**
        FUNCIONES DE GESTIONAR DATOS
 */
/**
 * CLIENTE
 * @param oCliente
 */
Gestion.prototype.agregarCliente=function(oCliente){

    var existe=false;


    for(i=0;i<this.listaCliente.length && existe==false;i++){

        if(oCliente.dni==this.listaCliente[i].dni){
            console.log("entra");
            existe=true;
        }

    }

    if(!existe){
        this.listaCliente.push(oCliente);
    }
    return existe;
};

Gestion.prototype.arrayClientes=function(){
    var cliente=[];
    for(i=0;i<this.listaCliente.length;i++){
        cliente.push(this.listaCliente[i].dni+",    "+ this.listaCliente[i].nom);
    }
    return cliente;
};

Gestion.prototype.fntEliminarCliente=function(dniCliente){
    var posCliente;
    var existe=false;
    // buscar cliente
    for(var i=0;i<this.listaCliente.length;i++){
        if(this.listaCliente[i].dni==dniCliente){
            posCliente=i;
            existe=true;
        }
    }

    // eliminar cliente

    this.listaCliente.splice(posCliente,1);
   return existe;
};

Gestion.prototype.fntModificarCliente=function(oClinte,miembro){
var encontrado=false;
var fecha="";

    // buscamos cliente
    for(var i=0;i<this.listaCliente.length && encontrado==false;i++){

        if(this.listaCliente[i].dni==oClinte.dni){
            fecha=this.listaCliente[i].fecha;
            this.listaCliente[i].dni=oClinte.dni;
            this.listaCliente[i].nom=oClinte.nom;
            this.listaCliente[i].telf=oClinte.telf;
            this.listaCliente[i].email=oClinte.email;
          if(miembro) {
              this.listaCliente[i].fecha = fecha;
          }
            encontrado=true;


        }
    }
    return encontrado;
};
Gestion.prototype.cogerCliente=function(dniCliente){
    var oCliente;
    for(var i=0;i<this.listaCliente.length;i++){
        if(this.listaCliente[i].dni== dniCliente){
            oCliente=this.listaCliente[i];
        }
    }
    return oCliente;
};
Gestion.prototype.cogerClienteMiembro=function(dniCliente){
   var miembro=false;
   var listaMiembro=[];
    for(var i=0;i<this.listaCliente.length;i++){

        if(this.listaCliente[i]instanceof Miembro){
            listaMiembro.push(this.listaCliente[i].dni);
        }

    }
    for (var j=0;j<this.listaCliente.length && miembro==false;j++){

        if(listaMiembro[j]==dniCliente){

            miembro=true;
        }
    }
    return miembro;

};
Gestion.prototype.cogerTodosLosClientes=function(){
    var lista=[];
    for(i=0;i<this.listaCliente.length;i++){
        lista.push(this.listaCliente[i]);
    }
    return lista;
};
Gestion.prototype.cogerListaMiembros=function(){
    var lista=[];
    for(var i=0;i<this.listaCliente.length;i++){

        if(this.listaCliente[i]instanceof Miembro){
            lista.push(this.listaCliente[i]);
        }

    }

    return lista;
};
Gestion.prototype.cogerListaNoMiembros=function(){
    var lista=[];
    for(var i=0;i<this.listaCliente.length;i++){

        if(this.listaCliente[i]instanceof NoMiembro){
            lista.push(this.listaCliente[i]);
        }

    }

    return lista;
};

/**
 * ABOGADOS
 */

Gestion.prototype.agregarAbogado=function(oAbogado){

    var existe=false;
      for(i=0;i<this.listaAbogado.length && existe==false;i++){

        if(oAbogado.dni==this.listaAbogado[i].dni){
            existe=true;
        }

    }

    if(!existe){

        this.listaAbogado.push(oAbogado);

    }
return existe;
};
Gestion.prototype.arrayAbogados=function(){
    var lista=[];
    for(i=0;i<this.listaAbogado.length;i++){
        lista.push(this.listaAbogado[i].dni+",    "+ this.listaAbogado[i].nom);
    }
    return lista;
};
Gestion.prototype.fntBajaAbogado=function(dni){
    var posAbogado;
    var sInfo=false;

    for(var i=0;i<this.listaAbogado.length;i++){
        if(this.listaAbogado[i].dni==dni){
            posAbogado=i;
        }
    }


    this.listaAbogado.splice(posAbogado,1);
    sInfo="Abogado eliminado";
};
Gestion.prototype.modificarAbogado=function(dni,sueldo){
    var encontrado=false;
    // buscamos cliente
    for(var i=0;i<this.listaAbogado.length && encontrado==false;i++){

        if(this.listaAbogado[i].dni==dni){

            // Modificacion de sueldo

            this.listaAbogado[i].sueldo=sueldo;
            console.log(this.listaAbogado[i]);

            encontrado=true;


        }

    }
    return encontrado;
};

Gestion.prototype.cogerAbogados=function(){
    var lista=[];
    for(i=0;i<this.listaAbogado.length;i++){
        lista.push(this.listaAbogado[i]);
    }
    return lista;
};

/**
 * Facturas
 */
Gestion.prototype.nuevaFactura=function(oFactura){

    var existe=false;
    for(i=0;i<this.listaFacturas.length && existe==false;i++){

        if(oFactura.nom==this.listaFacturas[i].nom){
            existe=true;
        }

    }

    if(!existe){

        this.listaFacturas.push(oFactura);

    }
    return existe;

};

Gestion.prototype.cogerFacturas=function(){
  var lista=[];
    for(i=0;i<this.listaFacturas.length;i++){
        lista.push(this.listaFacturas[i]);
    }
    return lista;
};
Gestion.prototype.añadirMulta=function(oMulta){
    var existe=false;
    for(i=0;i<this.listaMulta.length && existe==false;i++){
        if(oMulta.nom==this.listaMulta[i].nom){
            existe=true;
        }

    }

    if(!existe){

        this.listaMulta.push(oMulta);

    }
    return existe;
};
Gestion.prototype.cogerMultas=function(){
    var lista=[];
    for(i=0;i<this.listaMulta.length;i++){
        lista.push(this.listaMulta[i].nom);
    }
    return lista;
};
Gestion.prototype.agregarReclamacion=function(oReclamacion){
    var existe=false;
    for(i=0;i<this.listaReclamacion.length && existe==false;i++){
        if(oReclamacion.nom==this.listaFacturas[i].nom){
            existe=true;
        }
        if(oReclamacion.multa==this.listaFacturas[i].multa){
            existe=true;
        }
        if(oReclamacion.factura==this.listaReclamacion[i].factura){
            existe=true;
        }

    }

    if(!existe){

        this.listaReclamacion.push(oReclamacion);

    }
    return existe;
};
Gestion.prototype.cogerReclamacion=function(){
    var lista=[];
    for(i=0;i<this.listaReclamacion.length;i++){
        lista.push(this.listaReclamacion[i]);
    }
    return lista;
};
Gestion.prototype.actualizarReclamacion=function(reclamacion,estado){

    for(var i=0;i<this.listaReclamacion.length;i++){
        if(this.listaReclamacion[i].nom==reclamacion){
            this.listaReclamacion[i].estado=estado;
        }
    }
};

/**
    DECLARACION DE GESTION
 * @type {Gestion}
 */
oGestion=new Gestion();
var oXML = loadXMLDoc("datos.xml");

function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);

    xhttp.send();

    return xhttp.responseXML;
}



/**
 *  CARGAR CLIENTES NO MIEMBRO
 * @type {NodeList}
 */

var listaDniCliente=[];
var listaNombreCliente=[];
var listatelefonoCliente=[];
var listaEmailCliente=[];

   var oDni=oXML.getElementsByTagName("dniCliente");
   var oNombre=oXML.getElementsByTagName("nombreCliente");
   var oTelefono=oXML.getElementsByTagName("telefonoCliente");
   var oEmailCliente=oXML.getElementsByTagName("emailCliente");

    for(i=0;i<oDni.length;i++){
   // console.log(oDni[i].textContent);

        listaDniCliente.push(oDni[i].textContent);
        listaNombreCliente.push(oNombre[i].textContent);
        listatelefonoCliente.push(oTelefono[i].textContent);
        listaEmailCliente.push(oEmailCliente[i].textContent);
       // console.log(listaDniCliente[i]+"    "+listaNombreCliente[i]+"   "+ listatelefonoCliente[i]+"    "+listaEmailCliente[i]);

}

for(i=0;i<listaDniCliente.length;i++){
    var num=i;
    num=new NoMiembro(listaDniCliente[i],listaNombreCliente[i],listatelefonoCliente[i],listaEmailCliente[i]);
    oGestion.agregarCliente(num);
    console.log("creado");
}

/**
 * CARGAR CLIENTES MIEMBRO
 */

var listaDniClienteMiembro=[];
var listaNombreClienteMiembro=[];
var listaTelefonoClienteMiembro=[];
var listaEmailClienteMiembro=[];
var listaFechaClienteMiembro=[];

     oDni=oXML.getElementsByTagName("dniClienteMiembro");
     oNombre=oXML.getElementsByTagName("nombreClienteMiembro");
     oTelefono=oXML.getElementsByTagName("telefonoClienteMiembro");
     oEmailCliente=oXML.getElementsByTagName("emailClienteMiembro");
 var oFechaCliente=oXML.getElementsByTagName("fechaClienteMiembro");
for(j=0;j<oDni.length;j++){

    listaDniClienteMiembro.push(oDni[j].textContent);
    listaNombreClienteMiembro.push(oNombre[j].textContent);
    listaTelefonoClienteMiembro.push(oTelefono[j].textContent);
    listaEmailClienteMiembro.push(oEmailCliente[j].textContent);
    listaFechaClienteMiembro.push(oFechaCliente[j].textContent);
    // console.log(listaDniCliente[i]+"    "+listaNombreCliente[i]+"   "+ listatelefonoCliente[i]+"    "+listaEmailCliente[i]);

}
for(k=0;k<listaDniCliente.length;k++){
    num=k;
    console.log(num);
    num=new Miembro(listaDniClienteMiembro[k],listaNombreClienteMiembro[k],listaTelefonoClienteMiembro[k],listaEmailClienteMiembro[k],listaFechaClienteMiembro[k]);
    oGestion.agregarCliente(num);
    console.log("creado Cliente");
}

/**
 * CARGAR FACTURAS
 */

var listaNombreFactura=[];
var listaFechaFactura=[];
var listaImporteFactura=[];
var listaEstadoFactura=[];

   var oNombreFactura=oXML.getElementsByTagName("nombreFactura");
   var oFechaFactura=oXML.getElementsByTagName("fechaFactura");
   var oImperteFactura=oXML.getElementsByTagName("importeFactura");
   var oEstadoFactura=oXML.getElementsByTagName("estadosFactura");

for(i=0;i<oNombreFactura.length;i++){

    listaNombreFactura.push(oNombreFactura[i].textContent);
    listaFechaFactura.push(oFechaFactura[i].textContent);
    listaImporteFactura.push(oImperteFactura[i].textContent);
    listaEstadoFactura.push(oEstadoFactura[i].textContent);
}
for(var i=0;i<listaNombreFactura.length;i++){
    num=i;
    num=new Factura(listaNombreFactura[i],listaFechaFactura[i],listaImporteFactura[i],listaEstadoFactura[i]);
    oGestion.nuevaFactura(num);
    console.log("creado Factura");
}

/**
 *  CARGAR MULTAS
 * */

var listaMultaNombre=[];
var listaMultaImporte=[];
var listaMultaFecha=[];
var listaMultaDesc=[];
var listaMultaAleg=[];

    var oMultaNombre=oXML.getElementsByTagName("nombreMulta");
    var oMultaImporte=oXML.getElementsByTagName("importeMulta");
    var oMultaFecha=oXML.getElementsByTagName("fechaMulta");
    var oMultaDesc=oXML.getElementsByTagName("descripcionMulta");
    var oMultaAleg=oXML.getElementsByTagName("alegacionesMulta");

for(i=0;i<oMultaNombre.length;i++){

    listaMultaNombre.push(oMultaNombre[i].textContent);
    listaMultaImporte.push(oMultaImporte[i].textContent);
    listaMultaFecha.push(oMultaFecha[i].textContent);
    listaMultaDesc.push(oMultaDesc[i].textContent);
    listaMultaAleg.push(oMultaAleg[i].textContent);
}
for(var i=0;i<listaMultaNombre.length;i++){
    num=i;
    num=new Multa(listaMultaNombre[i],listaMultaImporte[i],listaMultaFecha[i],listaMultaDesc[i],listaMultaAleg[i]);
    oGestion.añadirMulta(num);
    console.log("creado Multa");
}
/**
 * CARGAR ABOGADOS
 */

var listaAbogadoDni=[];
var listaAbogadoNombre=[];
var listaAbogadoSueldo=[];

    var oAbogadoDni=oXML.getElementsByTagName("dniAbogado");
    var oAbogadoNombre=oXML.getElementsByTagName("nombreAbogado");
    var oAbogadoSueldo=oXML.getElementsByTagName("sueldoAbogado");


for(i=0;i<oAbogadoDni.length;i++){

    listaAbogadoDni.push(oAbogadoDni[i].textContent);
    listaAbogadoNombre.push(oAbogadoNombre[i].textContent);
    listaAbogadoSueldo.push(oAbogadoSueldo[i].textContent);

}
for(i=0;i<listaAbogadoDni.length;i++){
    num=i;
    num=new Abogado(listaAbogadoDni[i],listaAbogadoNombre[i],listaAbogadoSueldo[i]);
    oGestion.agregarAbogado(num);
    console.log("creado Abogado");
}

/**
 *  CARGAR RECLAMACIONES
 */

var listaReclamacionNombre=[];
var listaReclamacionEstado=[];
var listaReclamacionCliente=[];
var listaReclamacionAbogado=[];
var listaReclamacionFactura=[];
var listaReclamacionMulta=[];

    var oReclamacionNombre=oXML.getElementsByTagName("nombreReclamacion");
    var oReclamacionEstado=oXML.getElementsByTagName("estadoReclamacion");
    var oReclamacionCliente=oXML.getElementsByTagName("clienteReclamacion");
    var oReclamacionAbogado=oXML.getElementsByTagName("abogadoReclamacion");
    var oReclamacionFactura=oXML.getElementsByTagName("facturaReclamacion");
    var oReclamacionMulta=oXML.getElementsByTagName("multaReclamacion");

for(i=0;i<oReclamacionNombre.length;i++){

    listaReclamacionNombre.push(oReclamacionNombre[i].textContent);
    listaReclamacionEstado.push(oReclamacionEstado[i].textContent);
    listaReclamacionCliente.push(oReclamacionCliente[i].textContent);
    listaReclamacionAbogado.push(oReclamacionAbogado[i].textContent);
    listaReclamacionFactura.push(oReclamacionFactura[i].textContent);
    listaReclamacionMulta.push(oReclamacionMulta[i].textContent);

}
for(i=0;i<listaReclamacionNombre.length;i++){
    num=i;
    num=new Reclamacion(listaReclamacionNombre[i],listaReclamacionEstado[i],listaReclamacionCliente[i],listaReclamacionAbogado[i],listaReclamacionFactura[i],listaReclamacionMulta[i]);
    oGestion.agregarReclamacion(num);
    console.log("creada Reclamacion");
}
