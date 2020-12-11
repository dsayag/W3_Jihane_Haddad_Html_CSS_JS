// Version 1
function texteRed()
{
    let titre1 = document.getElementById("mon_titre");  
    titre1.className = "red";
}

function texteGreen()
{
    let titre1 = document.getElementById("mon_titre");  
    titre1.className = "green";
}

// Version 2 (optimisée)
function maFonction(color){
    let titre1 = document.getElementById("mon_titre");
    if(color == "red"){
        titre1.className = "red";
    } else if (color == "green"){
        titre1.className = "green";
    }
}

// Version 2-1 (optimisée)
function maFonction(){
    let titre1 = document.getElementById("mon_titre");
    if(titre1.className == "green") {
        titre1.classList.remove("green");
        titre1.classList.toggle("red");
    } else if (titre.className == "red") {
        titre1.classList.remove("red");
        titre1.classList.toggle("green");
    }
}

// Version 3 (ultra optimisée)
function maFonction(color){
    document.getElementById("mon_titre").className = color
}