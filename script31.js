nombreChoix = prompt("Rentrez votre nombre")

function affichageChiffre(nombreChoix) {
    for (i = 0; i <= nombreChoix; i++) {
        console.log("Les chiffres entre mon choix et 0 sont : " + i)
    }
}
let res = affichageChiffre(nombreChoix)
