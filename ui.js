function UI(){

    this.city = document.getElementById("create-city");
    
}

// 1.EVENT - ADD NEW CITY TO UI
UI.prototype.addNewCity = function(newcity){

        const createNewCity = document.createElement("li");

        createNewCity.innerHTML += `                
        <div class="remove-todo">
        <i class="fas fa-minus"></i>
    </div>
    <div class="report">
        <p id="city">${newcity}</p>
        <span id="keyapi"></span>
        <i id="icon"class=""></i>
    </div>
    <div class="details">
        <p>Details</p>
    </div>
    <div class="info">
        <ul class="headings">
            <li>Status</li>
            <li>Wind</li>
            <li>Hummidity</li>
        </ul>
        <ul class="datas">
            <li id="status"></li>
            <li id="wind"></li>
            <li id="humidity"></li>
        </ul>
    </div>
    <div class="close" id="close">
        <i class="fas fa-chevron-up fa-2x"></i>
    </div>
        `
        cityList.appendChild(createNewCity);
        this.city.value = "";

}

// 2.EVENT - LOAD ALL CITIES FROM STORAGE TO UI

UI.prototype.loadAllCitiesToUI = function(){

    let cities = storage.getCitiesFromStorage(); // Local storage'daki array halindeki değerlerdir.

    i = 0;

    while(i < cities.length){
        ui.addNewCity(cities[i]);
        i++
    }

    // cities.forEach(function(city){
    //     ui.addNewCity(city); // her bir todoyu daha önce oluşturduğumuz (1.konu) fonksiyon ile önyüze yazarız.
    //     console.log(cities);

    // })

}

UI.prototype.displayWeather = function(status){

   const test = document.querySelectorAll("#keyapi");
   const span = test[test.length -1];
   span.textContent = status;

}

UI.prototype.displayStatus = function(data){

    const test = document.querySelectorAll("#status");
    const span = test[test.length -1];
    span.textContent = data;

}

UI.prototype.displayWind = function(data){

    const test = document.querySelectorAll("#wind");
    const span = test[test.length -1];
    span.textContent = `${data} km`;

}

UI.prototype.displayHumidity = function(data){

    const test = document.querySelectorAll("#humidity");
    const span = test[test.length -1];
    span.textContent = `${data}%`;

}

UI.prototype.displayIcon = function(data){

    if(data === "light rain" || data === "heavy intensity rain" || data === "moderate rain"){
        const icon = document.querySelectorAll("#icon");
        const element = icon[icon.length -1];
        element.className = "fas fa-cloud-rain";
    }

    if(data === "clear sky"){
        const icon = document.querySelectorAll("#icon");
        const element = icon[icon.length -1];
        element.className = "fas fa-cloud-sun";
    }

    if(data === "overcast clouds" || data === "broken clouds" || data === "scattered clouds" || data === "few clouds") {
        const icon = document.querySelectorAll("#icon");
        const element = icon[icon.length -1];
        element.className = "fas fa-cloud";
    }

}


UI.prototype.displayWeatherFromStorage = function(data){
    
    const test = document.querySelectorAll("#keyapi");
    const cluster = Array.from(test);
    const point = cluster.filter(function(item){
        return item.textContent === "";
    })
    point[0].textContent = data;

}


UI.prototype.displayStatusFromStorage = function(data){

    const test = document.querySelectorAll("#status");
    const cluster = Array.from(test);
    const point = cluster.filter(function(item){
        return item.textContent === "";
    })
    point[0].textContent = data;

}

UI.prototype.displayWindFromStorage = function(data){

    const test = document.querySelectorAll("#wind");
    const cluster = Array.from(test);
    const point = cluster.filter(function(item){
        return item.textContent === "";
    })
    point[0].textContent = `${data} km`;

}

UI.prototype.displayHumidityFromStorage = function(data){

    const test = document.querySelectorAll("#humidity");
    const cluster = Array.from(test);
    const point = cluster.filter(function(item){
        return item.textContent === "";
    })
    point[0].textContent = `${data}%`;

}

UI.prototype.displayIconFromStorage = function(data){

    if(data === "light rain" || data === "heavy intensity rain" || data === "moderate rain"){
        const test = document.querySelectorAll("#icon");
        const cluster = Array.from(test);
        const point = cluster.filter(function(item){
            return item.className === "";
        })
        point[0].className = "fas fa-cloud-rain";
    }

    if(data === "clear sky"){
        // const test = document.querySelectorAll("#icon");
        // const element = icon[icon.length -1];
        // element.className = "fas fa-cloud-sun";

        const test = document.querySelectorAll("#icon");
        const cluster = Array.from(test);
        const point = cluster.filter(function(item){
            return item.className === "";
        })
        point[0].className = "fas fa-cloud-sun";
    }

    if(data === "overcast clouds" || data === "broken clouds" || data === "scattered clouds" || data === "few clouds") {
        const test = document.querySelectorAll("#icon");
        const cluster = Array.from(test);
        const point = cluster.filter(function(item){
            return item.className === "";
        })
        point[0].className = "fas fa-cloud";
    }

}

