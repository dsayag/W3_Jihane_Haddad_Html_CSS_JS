let color_case = "colorRose"

function caseClickOn(idCase) {
    console.log(idCase)
    let cell = document.getElementById(idCase)
    //on verifie que la celule ne contient pas déjà une classe rose ou bleu
    //si la celule contient une classe rose ou blue alors on ne peut pas changer la couleur sinon on change la couleur
    if (cell.classList.contains("colorRose") || cell.classList.contains("colorBleu")) {
    }
    else {
        // si la case d'avant était bleu alors la prochaine est rose
        if (color_case == "colorBleu") {
            cell.classList.add("colorRose")
            cell.innerText = "O"
            color_case = "colorRose"
        }
        else {
            //cell = document.getElementById(idCase)
            cell.classList.add("colorBleu")
            cell.innerText = "X"
            color_case = "colorBleu"
        }

        let case1 = document.getElementById("case_1");
        let case2 = document.getElementById("case_2");
        let case3 = document.getElementById("case_3");
        let case4 = document.getElementById("case_4");
        let case5 = document.getElementById("case_5");
        let case6 = document.getElementById("case_6");
        let case7 = document.getElementById("case_7");
        let case8 = document.getElementById("case_8");
        let case9 = document.getElementById("case_9");

        // Alert pour queles bleus gagnent

        if (case1.classList.contains("colorBleu") && case2.classList.contains("colorBleu") && case3.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case4.classList.contains("colorBleu") && case5.classList.contains("colorBleu") && case6.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case7.classList.contains("colorBleu") && case8.classList.contains("colorBleu") && case9.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case1.classList.contains("colorBleu") && case4.classList.contains("colorBleu") && case7.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case2.classList.contains("colorBleu") && case5.classList.contains("colorBleu") && case8.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case3.classList.contains("colorBleu") && case6.classList.contains("colorBleu") && case9.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case1.classList.contains("colorBleu") && case5.classList.contains("colorBleu") && case9.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }
        if (case3.classList.contains("colorBleu") && case5.classList.contains("colorBleu") && case7.classList.contains("colorBleu")) {
            alert("Tictacoe, vous avez ligné 3 rond bleu, vous avez gagné")
        }

        // Alert pour que les roses gagnent

        if (case1.classList.contains("colorRose") && case2.classList.contains("colorRose") && case3.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case4.classList.contains("colorRose") && case5.classList.contains("colorRose") && case6.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case7.classList.contains("colorRose") && case8.classList.contains("colorRose") && case9.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case1.classList.contains("colorRose") && case4.classList.contains("colorRose") && case7.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case2.classList.contains("colorRose") && case5.classList.contains("colorRose") && case8.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case3.classList.contains("colorRose") && case6.classList.contains("colorRose") && case9.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case1.classList.contains("colorRose") && case5.classList.contains("colorRose") && case9.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
        }
        if (case3.classList.contains("colorRose") && case5.classList.contains("colorRose") && case7.classList.contains("colorRose")) {
            alert("Tictacoe, vous avez ligné 3 croix rose, vous avez gagné")
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