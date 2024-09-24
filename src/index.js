function changeWeather(response){
let temperatureElement=document.querySelector("#temperature");
let temperature =response.data.temperature.current;
let cityElement =document.querySelector("#city");

temperatureElement.innerHTML=Math.round(temperature);
cityElement.innerHTML=response.data.city;
}

function searchCity(city){
let apiKey="8e95b71ct703a6fac0458b466ebo4b0b";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(changeWeather);
}

function showSubmit(event){
    event.preventDefault();
  let searchInput=document.querySelector("#search-input-app");

   
   searchCity(searchInput.value);

}


let searchFormElement=document.querySelector("#search-form-app");
searchFormElement.addEventListener ("submit", showSubmit);

searchCity("Paris");