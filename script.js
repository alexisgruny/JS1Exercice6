function division() {
  // Recuperation des saisies
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  // test regex
  if(/^[0-9.]+$/.test(firstNumber && secondNumber) == true  ){
  // affichage du resultat de firstNumber et secondNumber
  alert(firstNumber % secondNumber);
}
}
