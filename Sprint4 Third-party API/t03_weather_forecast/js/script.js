let url = "http://api.openweathermap.org/data/2.5/weather?q=Dnipro&lang=ru&units=metric&appid=ab7c62137ab85e6214b93398ff6bd49e";

axios.get(url).then(res => 
    {
        document.querySelector('.city').innerHTML = res.data.name;
        let state = "";
        state = res.data.weather[0].icon;
        let gif = res.data.weather[0];
        console.log(gif);
        currentImage.src = `http://openweathermap.org/img/wn/${state}@4x.png`;
        
        document.querySelector('.temp').innerHTML = res.data.main.temp;
        document.querySelector('.humidity').innerHTML = res.data.main.humidity;
        document.querySelector('.wind').innerHTML = res.data.wind.speed;
    });