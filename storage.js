function Storage(){


}


// ADD CITY TO STORAGE

Storage.prototype.getCitiesFromStorage = function(){

    let cities;

    if(localStorage.getItem("cities") === null){ // Şayet films isimli key yoksa, array boş gelsin.
        
        cities = [];

    } 
    else { // films diye bir array zaten varsa bu olan değeri almamız gerekiyor.

        cities = JSON.parse(localStorage.getItem("cities")); // Local storage sadece string değer kabul ettiği için arraya çeviririz.

    } 
    return cities;

}

Storage.prototype.addCityToStorage = function(newcity){
   
    let cities = this.getCitiesFromStorage();

    cities.push(newcity);

    localStorage.setItem("cities",JSON.stringify(cities));
}



// DELETE CITY FROM STORAGE

Storage.prototype.deleteCityFromStorage = function(deletecity){

    let cities = this.getCitiesFromStorage();

    cities.forEach(function(city,index){

    if(city === deletecity){
      cities.splice(index,1);
    }

  });

  localStorage.setItem("cities",JSON.stringify(cities)); // Yeni haliyle tekrar set edilir.


}