// Question 1

let monTableauDeDiv = document.getElementsByTagName("div");

for (i = 0; i < monTableauDeDiv.length; i++) {
    let caseTableau = monTableauDeDiv[i];
    console.log("Mes éléments de type div sont : " + caseTableau.innerHTML)
}

// Question 2

let monTableauDeClass = document.getElementsByClassName("b_yellow");

for (i = 0; i < monTableauDeClass.length; i++) {
    let caseDeClass = monTableauDeClass[i];
    console.log("Mes éléments avec la classe b_yellow sont : " + caseDeClass.innerHTML)
}

// Question 3

let elementSelecteur = document.querySelector("#container .b_yellow");
console.log("Mon élément avec la classe b_yellow est : " + elementSelecteur.innerHTML)

// Question 4

let tousLesElements = document.querySelectorAll("#container .b_yellow")

for(i=0; i<tousLesElements.length;i++){
    let tousLesElementsConnus = tousLesElements[i];
    console.log("Mes éléments avec la classe b_yellow sont : " + tousLesElementsConnus.innerText)

}