function swipe(){
    let varDiv1 = document.getElementById("maDiv1")
    let varDiv2 = document.getElementById("maDiv2")
    let varDiv3 = document.getElementById("maDiv3")
    
    if(varDiv1.style.display == "" || varDiv1.style.display == "inherit"){
        varDiv1.style.display = "none"
        varDiv2.style.display = "inherit"
    } else if(varDiv2.style.display == "" || varDiv2.style.display == "inherit"){
        varDiv2.style.display = "none"
        varDiv3.style.display = "inherit"
    } else if(varDiv3.style.display == "" || varDiv3.style.display == "inherit"){
        varDiv3.style.display = "none"
        varDiv1.style.display = "inherit"
    }
}