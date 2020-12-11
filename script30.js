temperatureEnCelsius = prompt("Rentrez votre température à convertir en Fahrenheit")

function celsiusToFahrenheit (temperatureEnCelsius){
    tempFahrenheit = (9 * temperatureEnCelsius  + (32 * 5)) / 5;
    return tempFahrenheit;
    }

let celToFahr = celsiusToFahrenheit(temperatureEnCelsius)

alert("Le résultat en Fahrenheit est : " + celToFahr)