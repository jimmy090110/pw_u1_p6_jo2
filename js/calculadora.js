var num1="";
var num2="";
var operacion="";
function agregar(numero){
    if(!operacion){
        num1 += numero;
        document.getElementById("idResultado").innerHTML = num1;
    }else{
        num2+=numero;
        document.getElementById("idResultado").innerHTML=num2;
    }
}


function sumar() {
  operacion = 'sumar';
}
function multiplicar() {
    operacion = 'multiplicar';
  }
  function dividir(){
    operacion='dividir';
  }
  function restar(){
    operacion='restar'
  }
  function resetear(){
    operacion='resetear';
  }

function calcular() {
  var respuesta = 0;
  if (operacion == 'sumar') {
    respuesta = parseInt(num1) + parseInt(num2);
  }if(operacion=='multiplicar'){
    respuesta = parseInt(num1) * parseInt(num2);
  }if(operacion=='dividir'){
    respuesta= parseFloat(num1)/parseFloat(num2);
  }if(operacion=='restar'){
    respuesta= parseInt(num1)-parseInt(num2);
  }if(operacion=='resetear'){
    respuesta = "";
  }
 

  document.getElementById("idResultado").innerHTML = respuesta;
 
  num1 = "";
  num2 = "";
  operacion = "";
}



