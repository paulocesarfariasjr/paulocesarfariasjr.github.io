
async function callWeatherApi(CityName){

    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=a09f32c04dacc583693e1bfb69a6517d`);
    if(!response.ok){

        alert('erro ao consultar');
        

    }

    return response.json();
}

    
async function showWeather(event){


const info = document.querySelectorAll('.info');
info.forEach(i => {
    i.remove();
})


const userInput = document.getElementById('UserInput').value;
const weather = document.getElementById('result');
const results = document.getElementById('useful');

const json = await callWeatherApi(userInput);


const name = document.createElement('h1');
name.className = 'info'
name.innerText = json.name
const tempoImg = document.createElement('img') ;
tempoImg.height = 260 ;
 tempoImg.width = 260;
tempoImg.className = 'info'

if( json.weather[0].main === 'Clouds'){

    tempoImg.src = "../arquivos/images/clouds.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/cloudsBackgrounds.gif)';

   
}else if(json.weather[0].main === 'Clear'){

    tempoImg.src = "../arquivos/images/clear.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/sunbackground.gif)';
   

}else if(json.weather[0].main === 'Rain'){

    tempoImg.src = "../arquivos/images/rain.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/rain-background.gif)';
   
}else if(json.weather[0].main === 'Drizzle'){

    tempoImg.src = "../arquivos/images/drizzle.png"
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/DrizzleBackground.gif)';
   

}else if(json.weather[0].main === 'Mist'){

    tempoImg.src = "../arquivos/images/mist.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/mist-backgrounds.gif)';

}else if(json.weather[0].main === 'Smoke'){

    tempoImg.src = "../arquivos/images/cloud.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/fogWeather.gif)';

}else if(json.weather[0].main === 'Snow'){

    tempoImg.src = "../arquivos/images/snow.png";
    document.querySelector('body').style.backgroundImage = 'url(../arquivos/images/snowWeather.gif)';

}

const temperatura = document.createElement('h1');
temperatura.className = 'info';
temperatura.innerText = (Math.round(json.main.temp - 273.15)) + '°C'
const umidade = document.createElement('p');
umidade.className = 'info';
umidade.innerText = 'Humidade : ' + json.main.humidity + '%';
const vento = document.createElement('p');
vento.className = 'info';
vento.innerText = 'Vento : ' + json.wind.speed;
const fellsLike = document.createElement('p');
fellsLike.className = 'info';
fellsLike.innerText = 'Sens Térmica : ' + (Math.round(json.main.feels_like - 273.15)) + '°C'


weather.append(name,tempoImg);
results.append(temperatura,fellsLike,umidade,vento);


}






document.getElementById('pesquisar').addEventListener('click',showWeather);
















