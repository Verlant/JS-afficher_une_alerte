// document.writeln('<form id="myForm">');
// document.writeln("<div>");
// document.writeln('<label for="myField">Champ&nbsp;:</label>');
// document.writeln('<input type="text" id="myField" size="60">');
// document.writeln("</div>");
// document.writeln("</form>");
// document.getElementById("myField").value = "Vous avez réussi votre exercice";
// document.body.insertBefore(document.createElement("form"), document.main);
// document.body.insertBefore(document.createElement("input"), document.form);
// document.body.prepend(document.createElement("input"));
// document.body.append(document.createElement("button"));
// let new_div = document.createElement("div");
// new_button.appendChild(new_div);
function saisie() {
  if (document.getElementById("text").value == "") {
    alert("Veuillez saisir des informations dans le champ");
  } else {
    alert("Vous avez inséré : " + document.getElementById("text").value);
  }
}
