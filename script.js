function division() {
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  // Recuperation des variables
  if(/^[0-9.]+$/.test(firstNumber && secondNumber) == true  ){
  alert(firstNumber % secondNumber);
}
}
