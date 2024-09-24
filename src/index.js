function showSubmit(event){
    event.preventDefault();
  let searchInput=document.querySelector("#search-input-app");
 let cityElement =document.querySelector("#city");
   cityElement.innerHTML=searchInput.value;

}


let searchFormElement=document.querySelector("#search-form-app");
searchFormElement.addEventListener ("submit", showSubmit);