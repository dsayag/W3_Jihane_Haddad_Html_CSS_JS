let tableauPrenom =["Woody", "La bergère", "Woody", "Jessie", "Tom"]

////////////////////////////////////////////////////
// Parcourir et afficher tous les noms du tableau //
////////////////////////////////////////////////////
for (i = 0; i < tableauPrenom.length; i++){
    console.log("Le prénom de la case n° " + i + " est : " + tableauPrenom[i])
}

// Afficher seulement le nom de la dernière case
for (i = tableauPrenom.length-1; i < tableauPrenom.length; i++){
    console.log("Le prénom de la dernière case est : " + tableauPrenom[tableauPrenom.length-1])
}

/////////////////////////////////////////////////////////////////////
// Parcourir et afficher tous les noms du tableau en sens inverse //
/////////////////////////////////////////////////////////////////////
for (i = tableauPrenom.length-1; i >=0; i--){
    console.log("Le prénom de la case n° " + i + " est : " + tableauPrenom[i])
}