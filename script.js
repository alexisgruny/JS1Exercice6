function division() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  // Recuperation des variables
  var nombre = /\d/ ;
  if( nombre.test(firstNumber) ||  nombre.test(secondNumber) ){
  alert(firstNumber % secondNumber);
}
}
