
document.getElementById('convertButton').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('inputtemperature').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById('result');

    if (isNaN(temp)) {
        result.textContent = alert('Please enter a number!');
        return;
    }
    

    let convertedTemp;
    let convertedUnit;

    switch (unit) {
        case 'Celsius':
            convertedTemp = `${temp}°C = ${celsiusToFahrenheit(temp)}°F = ${celsiusToKelvin(temp)}K`;
            break;
        case 'Fahrenheit':
            convertedTemp = `${temp}°F = ${fahrenheitToCelsius(temp)}°C = ${fahrenheitToKelvin(temp)}K`;
            break;
        case 'Kelvin':
            convertedTemp = `${temperature}K = ${kelvinToCelsius(temp)}°C = ${kelvinToFahrenheit(temp)}°F`;
            break;
    }

    result.textContent = alert(convertedTemp);
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}
