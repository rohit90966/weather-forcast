const url= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;
const key="a2485e185326d1f0ad4651550044c137";


async function checkWeather(city){
     const response= await fetch(url+city+`&appid=${key}`);
     var data = await response.json();
     console.log(data);
    document.querySelector("#city").innerHTML=data.name;
     document.querySelector("#temp").innerHTML=data.main.temp+"°C";
     document.querySelector("#humidity").innerHTML=data.main.humidity+"%";
     document.querySelector("#wind").innerHTML=data.wind.deg+"km/h";
    let image= document.querySelector("#img");
    let weathername=document.querySelector("#weather-name");

     if(data.weather[0].main=="Clouds"){
        image.src="/clouds.png"
        weathername.innerHTML="Clouds"
     }
     else if(data.weather[0].main=="Clear"){
        image.src="/clear.png"
         weathername.innerHTML="Clear Sky";
     }
     else if(data.weather[0].main=="Rain"){
        image.src="/rain.png"
         weathername.innerHTML="Rain Started";
     }
      else if(data.weather[0].main=="Drizzle"){
        image.src="/drizzle.png"
         weathername.innerHTML="Drizzle";
     }
     else if(data.weather[0].main=="Mist"){
        image.src="/mist"
         weathername.innerHTML="Mist";
     }
     
    
     
} 
let getcity=document.querySelector(".main input");

let button=document.querySelector(".main button");
button.addEventListener("click",()=>{
    checkWeather(getcity.value);
})