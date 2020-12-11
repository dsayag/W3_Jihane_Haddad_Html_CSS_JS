let parentH = document.getElementById("exe39")
let parent1 = document.getElementById("maDiv1")
let titreH1 = document.getElementById("h1")

let newH1 = document.createElement("h2");

// Ajoute h2 dans maDiv1
newH1.innerText = "Mon super titre h2";
parent1.appendChild(newH1);

// Ajoute p dans maDiv1
let newP = document.createElement("p");
newP.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, praesentium.";
parent1.appendChild(newP);

// Fonction click supprimer p
function supprimerPClickOn(){
    let supprimerEnfantP = document.getElementById("monP")
    parent1.removeChild(supprimerEnfantP)
}

/*// Fonction click ajouter H
function ajouterHClickOn(){
    let parentH = document.getElementById("exe-39")
    let nouveauEnfantH = document.createElement("h2");
    nouveauEnfantH.innerText = "Mon nouveau 2"
    parentH.appendChild(nouveauEnfantH)
}*/

// Fonction click remplacer H
function remplacerH(){   
    let parentH = document.getElementById("exe39") 
    let titreH2 = document.createElement("h2")
    titreH2.innerText = "Mon nouveau titre"
    //parentH.replaceChild(titreH2,parentH.firstChild) 
    parentH.replaceChild(titreH1, titreH2)   
}

