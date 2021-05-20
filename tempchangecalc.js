function convertFahrToCelsius(fahrenheit){
    var fahrenheitTemperature = fahrenheit;
    var fahrenheitToCelcius = ((fahrenheitTemperature  - 32) * 5 / 9);
    if (Array.isArray(fahrenheit)) {
        console.log(`${fahrenheit} is not a valid number, but is an array`);
    } else if (typeof fahrenheit === 'object' && fahrenheit !== null) {
        console.log(`${fahrenheit} is not a valid number, but is an object`);
    } else {
        console.log(celsius.toFixed(4) + " degreeC");
    }
    var output = (fahrenheitTemperature+ 'is' + fahrenheitToCelcius + 'in celcius');
    console.log(output);
};
convertFahrToCelsius({list: 40});