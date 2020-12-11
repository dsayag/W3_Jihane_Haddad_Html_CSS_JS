alert("Nous allons comparer 2 nombres")
nombre1 = prompt("Rentrez le 1er nombre")
nombre2 = prompt("Puis le second")


if (nombre1 > nombre2) {
    alert(nombre1 + " est plus grand que " + nombre2)
}
else if (nombre2 > nombre1) {
    alert(nombre2 + " est plus grand que " + nombre1)
}
else if (nombre1 == nombre2)
    alert("Les 2 nombres sont égaux")