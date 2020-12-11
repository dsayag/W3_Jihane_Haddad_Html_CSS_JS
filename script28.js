///////////////////////////
// Avec une condition if //
///////////////////////////

nombre = prompt("Ecrivez un chiffre entre 10 et 20")

if (nombre > 20){
    alert("Plus petit")    
} else if (nombre < 10){
  alert("Plus grand")
} else{
    alert("Bravo")
}


///////////////////////
// Avec boucle While //
///////////////////////

nombre = prompt("Ecrivez un chiffre entre 10 et 20")

while (nombre < 10 || nombre > 20) {
    if (nombre > 20) {
        alert("Plus petit")
    } else if (nombre < 10) {
        alert("Plus grand")
    }
    nombre = prompt("Ecrivez un chiffre entre 10 et 20")
}

alert("Bravo")