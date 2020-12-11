let color_case = "colorRose"

function caseClickOn(idCase) {
    console.log(idCase)
    let cell = document.getElementById(idCase)
    //on verifie que la celule ne contient pas déjà une classe rose ou bleu
    //si la celule contient une classe rose ou blue alors on ne peut pas changer la couleur sinon on change la couleur
    if (cell.classList.contains("colorRose") || cell.classList.contains("colorBleu")) {

    }
    else {
        //if si la case d'avant était bleu alors la prchaine est rose
        if (color_case == "colorBleu") {+
            cell.classList.add("colorRose")
            cell.innerText = "O"
            color_case = "colorRose"
        }
        else {
            cell = document.getElementById(idCase)
            cell.classList.add("colorBleu")
            cell.innerText = "X"
            color_case = "colorBleu"
        }
    }
}

function Rejouer() {
    let cell = document.getElementById("case_1")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_2")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_3")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_4")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_5")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_6")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_7")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_8")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
    cell = document.getElementById("case_9")
    cell.classList.remove("colorBleu")
    cell.classList.remove("colorRose")
    cell.innerText = ""
}