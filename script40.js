function creerUnTableau() {
    let monBody = document.getElementById("body");
    let newTable = document.createElement("table");
    newTable.classList.add("monTableau")
    monBody.appendChild(newTable);

    let newTr1 = document.createElement("tr");
    newTable.appendChild(newTr1)

    let newTr2 = document.createElement("tr");
    newTable.appendChild(newTr2)

    let newTd1 = document.createElement("td");
    newTd1.innerText = "AAA"
    newTd1.classList.add("maCell1")
    newTr1.appendChild(newTd1)

    let newTd2 = document.createElement("td");
    newTd2.innerText = "CCC"
    newTd2.classList.add("maCell2")
    newTr2.appendChild(newTd2)

    let newTd3 = document.createElement("td");
    newTd3.innerText = "BBB"
    newTd3.classList.add("maCell3")
    newTr1.appendChild(newTd3)

    let newTd4 = document.createElement("td");
    newTd4.innerText = "DDD"
    newTd4.classList.add("maCell4")
    newTr2.appendChild(newTd4)
}