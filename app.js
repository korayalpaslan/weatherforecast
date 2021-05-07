
// 1.EVENT - ADD NEW CITY
const addCity = document.querySelector(".add-city");
const cityList = document.querySelector("#city-list");



eventlisteners();

function eventlisteners(){

    addCity.addEventListener("click",addNewCityToUI); // 1.EVENT
    document.addEventListener("DOMContentLoaded",loadAllCitiesFromStorage); // 2.EVENT
    cityList.addEventListener("click",deleteCity);
    cityList.addEventListener("click",seeMoreDetails);

};

const ui = new UI();
const storage = new Storage();



// 1.EVENT - ADD NEW CITY TO UI & STORAGE
function addNewCityToUI(e){

    const newcity = document.getElementById("create-city").value;
    ui.addNewCity(newcity);
    storage.addCityToStorage(newcity);

    const addedCity = document.querySelectorAll("#city");
    const lastCity = addedCity[addedCity.length -1].textContent;
    const forecast = new Forecast(lastCity);
    forecast.forecastcondition(function(err,response,response2,response3,response4,response5){

        if(err === null){
            ui.displayWeather(response);
            ui.displayStatus(response2);
            ui.displayWind(response3);
            ui.displayHumidity(response4);
            ui.displayIcon(response5);

        } else {
            console.error(err);
        }

    });


    e.preventDefault();

}

// 2.EVENT LOAD ALL CITIES FROM STORAGE TO UI

function loadAllCitiesFromStorage(){

    ui.loadAllCitiesToUI();

    let i = 0;
    const addedCity = document.querySelectorAll("#city");

    for (let i=0; i<addedCity.length; i++) {

        task(i);
     }

     function task(i) {
        setTimeout(function() {
            const firstCity = addedCity[i].textContent;
            const forecast = new Forecast(firstCity);
            forecast.forecastcondition(function(err,response,response2,response3,response4,response5){
        
                if(err === null){
                    ui.displayWeatherFromStorage(response);
                    ui.displayStatusFromStorage(response2);
                    ui.displayWindFromStorage(response3);
                    ui.displayHumidityFromStorage(response4);
                    ui.displayIconFromStorage(response5);
        
                } else {
                    console.error(err);
                }
        
            });
        }, 500 * i);
      }

};

// 3.EVENT DELETE CITY FROM UI & STORAGE

function deleteCity(e){

    if(e.target.className === "fas fa-minus"){

        e.target.parentElement.parentElement.remove();
        storage.deleteCityFromStorage(e.target.parentElement.nextElementSibling.firstElementChild.textContent);

      }

}

// 4. EVENT SEE MORE DETAILS

function seeMoreDetails(e){

    if(e.target.parentElement.className === "details"){

        e.target.parentElement.parentElement.classList.add("fix");
        e.target.parentElement.previousElementSibling.lastElementChild.classList.add("fa-3x");
    } 
    
    if(e.target.parentElement.className === "close") {
        e.target.parentElement.parentElement.classList.remove("fix");
        e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.classList.remove("fa-3x");
    }

}; 