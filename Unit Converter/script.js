function convertTemp(event) {
	event.preventDefault(); // prevent form from submitting and reloading the page

	// get the Celsius temperature from the form
	const celsiusTemp = document.getElementById("celsius").value;

	// convert Celsius to Fahrenheit
	const fahrenheitTemp = (celsiusTemp * 9/5) + 32;

	// display the converted temperature in Fahrenheit on the website
	document.getElementById("result").innerHTML = `${celsiusTemp} degrees Celsius is equal to ${fahrenheitTemp} degrees Fahrenheit.`;
}