let apiKey="8e95b71ct703a6fac0458b466ebo4b0b";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=mertic`;


function showSubmit(event){
    event.preventDefault();
  let searchInput=document.querySelector("#search-input-app");
 let cityElement =document.querySelector("#city");
   cityElement.innerHTML=searchInput.value;

}


let searchFormElement=document.querySelector("#search-form-app");
searchFormElement.addEventListener ("submit", showSubmit);