let tableau = [0, 1, 20, 3, 4, 5, 6, 7, 8, 9];

///////////////////////////////////////////
// Affiche toutes les valeurs du tableau //
///////////////////////////////////////////
for(i=0 ; i < tableau.length ; i++){
    console.log(tableau[i]);
}

////////////////////////////////////////////////
// Affiche toutes les valeurs du tableau * 10 //
////////////////////////////////////////////////
for(i=0 ; i < tableau.length ; i++){
    calcul = tableau[i] * 10
    console.log("La valeur de la case n° " + i + " de mon tableau * 10 est : " + calcul);
    document.write("La valeur de la case n° " + i + " de mon tableau * 10 est : " + calcul + "<br>");
}