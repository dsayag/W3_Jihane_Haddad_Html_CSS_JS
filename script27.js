// Exe 1
alert("Heylo");
nom = prompt("Heylo, quel est ton nom ?")
alert("Votre nom est : " + nom)

// Exe 2
ageUser = prompt("Heylo, quel âge avez-vous ?");
ageMoi = prompt("Rentre ton âge David");


if (ageUser < ageMoi) {
    alert("Je suis plus grand")
} else if (ageUser > ageMoi) {
    alert("Il est plus grand")
} else if (ageUser == ageMoi) {
    alert("Hey, nous sommes jumeaux")
}