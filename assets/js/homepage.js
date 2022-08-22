var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=cleveland,oh,us&limit=1&appid=abb1e4e7da367c7e0f50870bf926ab41'


fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));