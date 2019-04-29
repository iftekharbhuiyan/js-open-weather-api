/* Open Weather Map API
 * requires app id for authentication
 * URL: https://openweathermap.org
 */
window.addEventListener('load', function (e) {
	e.preventDefault();
	// data displaying div
	var display = document.getElementById('weather');
	// city id for new york from open weather
	const city_id = '5128581';
	// app id from open weather
	const app_id = 'xxxxxxxxxxxxxxxxxxxxxx';
	// ajax request
	const xhr = new XMLHttpRequest();
	// deal with a response
	xhr.onload = function() {
		// do whatever you want with your response
		// parse json response
		// var data = JSON.parse(this.response);
	};
	// unsuccessful request
	xhr.onerror = function () {
		console.log('Something went wrong!');
	};
	// initialize the request
	xhr.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id='+city_id+'&appid='+app_id, true);
	// sends request
	xhr.send();
});