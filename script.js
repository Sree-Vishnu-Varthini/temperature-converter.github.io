function openCtoF() {
    window.location.href = "CtoF.html";
}

function openFtoC() {
    window.location.href = "FtoC.html";
}

function convertTemperatureToCelsius() {
    var Fahrenheit = document.getElementById("Fahrenheit").value;
    var celsius = (5/9) * (Fahrenheit - 32);
    document.getElementById("result").innerText = "Temperature in Celsius: " + celsius.toFixed(2) + " °C";
}

function convertTemperatureToFahrenheit() {
    var celsius = document.getElementById("Celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
}

function goBack() {
        window.location.href = "index.html"; // Redirect to the select page
    }