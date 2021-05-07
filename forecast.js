function Forecast(city){

    this.city = city;

    this.xhr = new XMLHttpRequest();


}

Forecast.prototype.forecastcondition = function(callback){

    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=39bc00751326e5882b5bdf27fb1511cd`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {

        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText).main.temp;
            const celsius = Math.floor(json - 272.15); 
            const status = JSON.parse(this.xhr.responseText).weather[0].description;
            const wind = JSON.parse(this.xhr.responseText).wind.speed;
            const hummidity = JSON.parse(this.xhr.responseText).main.humidity;
            const image = JSON.parse(this.xhr.responseText).weather[0].description;

            callback(null,celsius,status,wind,hummidity,image);
        } else {
            console.log("Hata",null);
        }

    }

    this.xhr.send();

}