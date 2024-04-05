const apikey="3ad67ac2c52772b9f84aafd8c145abad";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city=document.querySelector(".city");
const temp=document.querySelector(".temp");
const hum=document.querySelector(".humidity");
const wind=document.querySelector(".wind");

const search = document.querySelector(".search input");
const search_btn= document.querySelector(".search button");
const image = document.querySelector(".weather-icon");

async function checkWeather(city_name){
    const response= await fetch(apiurl+city_name+`&appid=${apikey}`);
    var data= await response.json();

    if(data.name==undefined){
        alert("No City Found");
        search.value="";
    }

    else{
        city.innerHTML=data.name;
        temp.innerHTML=Math.round(data.main.temp)+"°c";
        hum.innerHTML=data.main.humidity+"%";
        wind.innerHTML=data.wind.speed+" km/h";

        if(data.weather[0].main=="Clouds"){
            image.src = "clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            image.src = "rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            image.src = "drizzle.png";           
        }
        else if(data.weather[0].main=="Clear"){
            image.src = "clear.png";
        }
        else if(data.weather[0].main=="Mist"){
            image.src = "mist.png";
        }
        else if(data.weather[0].main=="Snow"){
            image.src = "snow.png";
        }
    }
}

search_btn.addEventListener("click",()=>{
    checkWeather(search.value);
})

