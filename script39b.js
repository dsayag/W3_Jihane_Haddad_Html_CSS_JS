let maDivParent = document.getElementById("maDiv1")
let monNouveauTitre1 = document.createElement("h1")
monNouveauTitre1.innerText = "Mon nouveau titre 1"
maDivParent.insertBefore(monNouveauTitre1,maDivParent.firstChild);

let monNouveauP = document.createElement("p")
monNouveauP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa."
monNouveauP.style.color = "black"
maDivParent.insertBefore(monNouveauP,maDivParent.firstChild)

function supprimerParagraphe(){
    let maDivParent = document.getElementById("maDiv1")
    let monParagraphe = document.getElementById("monP")
    maDivParent.removeChild(monParagraphe)
}

function remplacerH1(){
    let maDivSup = document.getElementById("maDivSup")
    let monNouveauTitre1Sup = document.getElementById("monTitreSup")
    maDivSup.removeChild(monNouveauTitre1Sup)

    let monNouveauTitre2 = document.createElement("h2")
    monNouveauTitre2.innerText = "Mon nouveau titre 2"
    maDivSup.append(monNouveauTitre2)
}



