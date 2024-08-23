//Variable to hold the temperature of the day
let kelvin = 0

//Convert kelvin to celsius
let celsius = kelvin - 273

//Convert celsius to fahrenheit
let fahrenheit = celsius * (9/5)+32

//Round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)