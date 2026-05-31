function buscar(){
 vu = document.getElementById("vu").value 
 cp = document.getElementById("cp").value
 nom= document.getElementById("nom").value
 id= document.getElementById("id").value
 dir= document.getElementById("dir").value
 tel= document.getElementById("tel").value
 numf= document.getElementById("num_factura").value
 fh= document.getElementById("fh").value
 rz= document.getElementById("rz").value

 sbut = vu * cp
 iva = sbut * 0.19
 t= sbut + iva
alert ("*********** FACTURA DE VENTA **********" +
    "\n********** DATOS DEL CLIENTE **********" +
    "\n nombre: " + nom +
    "\n identificacion: " + id +
    "\n direccion: " + dir +
    "\n telefono: " + tel +
    "\n********** DATOS DE LA FACTURA **********" +
    "\n numero de factura: " + numf +
    "\n fecha: " + fh +
    "\n razon social: " + rz +
    "\n valor unitario: $" + vu + 
    "\n cantidad de productos: " + cp +
    "\n subtotal: $" + sbut +
    "\n iva 19% : $" + iva +
    "\n total: $" + t
)
}