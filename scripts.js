function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value; 
    if (fahrenheit === '') { 
        alert('Por favor, insira um valor em Fahrenheit.');
        return; 
    }
    const celsius = fahrenheitToCelsius(parseFloat(fahrenheit));
    document.getElementById('celsius').value = celsius.toFixed(2); 
}

function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value; 
    if (celsius === '') { 
        alert('Por favor, insira um valor em Celsius.');
        return;
    }
    const fahrenheit = celsiusToFahrenheit(parseFloat(celsius));
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}

window.onload = function() {
    document.getElementById('fahrenheit').addEventListener('input', convertToCelsius);
    document.getElementById('celsius').addEventListener('input', convertToFahrenheit);
}
