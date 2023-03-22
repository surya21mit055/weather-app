let weather={
    "apikey":"5eb7aac45bbf323685eef6f2babfd17a",
    fetchweather: function(city){
        fetch(
           " https://api.openweathermap.org/data/2.5/weather?q=" + 
           city 
           + "&units=metric&appid="
           +this.apikey

            ).then((response)=>response.json())
            .then((data)=> this.displayweather(data));

        },
        displayweather: function(data){
            const{ name } = data;
            const{ icon,description } = data.weather[0];
            const{ temp,humidity } = data.main;
            const{ speed } = data.wind;

            document.querySelector(".city").innerText="Weather in "  + name;
            document.querySelector(".icon").src=
            "https://openweathermap.org/img/wn/"+icon+".png";
            document.querySelector(".description").innerText= description;
            document.querySelector(".temprature").innerText = temp  + "°c";
            document.querySelector(".humidity").innerText="Humidity : " +humidity+"%";
            document.querySelector(".windspeed").innerText="Windspeed : " + speed + "km/h";

        },

        search: function(){
            this.fetchweather(document.querySelector(".search-bar").value);
        }
}
     document.querySelector(".search button").addEventListener("click",function(){
        weather.search();
     search: function(){
            this.fetchweather(document.querySelector(".search-bar").value);
        }
}
     document.querySelector(".search button").addEventListener("click",function(){
        weather.search();
     
     });
     document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });
     
     weather.fetchweather("coimbatore");

















