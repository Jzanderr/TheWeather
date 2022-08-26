
/* Seacrch for a city */
function search() {
var city = document.getElementById('city');
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.value +',us&appid=abb1e4e7da367c7e0f50870bf926ab41&units=imperial'
var apiToday = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value +',us&appid=abb1e4e7da367c7e0f50870bf926ab41&units=imperial'





/* funstion for 5day */
async function getWeather() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const city = data.city.name;
  console.log(data.list[0].main.temp);
  console.log(data);
  console.log(city)
  document.getElementById('date1').textContent = data.list[8].dt_txt;
  document.getElementById('temp1').textContent = data.list[8].main.temp + '° ' + 'F';
  document.getElementById('wind1').textContent ='wind: ' + data.list[8].wind.speed + 'mph';
  document.getElementById('hum1').textContent = 'Humidity: ' +  data.list[8].main.humidity + '%';

  document.getElementById('date2').textContent = data.list[16].dt_txt;
  document.getElementById('temp2').textContent = data.list[16].main.temp + '° ' + 'F';
  document.getElementById('wind2').textContent ='wind: ' + data.list[16].wind.speed + 'mph';
  document.getElementById('hum2').textContent = ' Humidity: ' + data.list[16].main.humidity + '%';

  document.getElementById('date3').textContent = data.list[24].dt_txt;
  document.getElementById('temp3').textContent = data.list[24].main.temp + '° ' + 'F';
  document.getElementById('wind3').textContent ='wind: ' + data.list[24].wind.speed + 'mph';
  document.getElementById('hum3').textContent = ' Humidity: ' + data.list[24].main.humidity + '%';

  document.getElementById('date4').textContent = data.list[32].dt_txt;
  document.getElementById('temp4').textContent = data.list[32].main.temp + '° ' + 'F';
  document.getElementById('wind4').textContent ='wind: ' + data.list[32].wind.speed + 'mph';
  document.getElementById('hum4').textContent = ' Humidity: ' + data.list[32].main.humidity + '%';

  document.getElementById('date5').textContent = data.list[39].dt_txt;
  document.getElementById('temp5').textContent = data.list[39].main.temp + '° ' + 'F';
  document.getElementById('wind5').textContent ='wind: ' + data.list[39].wind.speed + 'mph';
  document.getElementById('hum5').textContent = ' Humidity: ' + data.list[39].main.humidity + '%' ;
}

/* function for todays weather */

async function todayWeather() {
  const response = await fetch(apiToday);
  const data = await response.json();
  console.log(data.name);

  document.getElementById('cityT').textContent = data.name;
  document.getElementById('tempT').textContent ='Temp: ' + data.main.temp + '° ' + 'F';
  document.getElementById('windT').textContent ='Wind: ' + data.wind.speed + 'mph';
  document.getElementById('humT').textContent ='Humidity: ' + data.main.humidity + '%';

}
getWeather();
todayWeather();}
document.getElementById('search').addEventListener('click', search);
document.getElementById('city').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    search();
  }
});