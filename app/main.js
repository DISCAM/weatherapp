
import { getWeatherByCity } from './apiService.js';

const viewElems = {};  // jako obiekt przechowujący wszyskie elemnty

const getDOMElem = id => {
  return document.getElementById(id);
};

const connectHTMLElems = () => {
    viewElems.weatherSearchView = getDOMElem('weatherSearchView');
    viewElems.mainContainer = getDOMElem('mainContainer');
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

    viewElems.searchInput = getDOMElem('searchInput');
    viewElems.searchButton = getDOMElem('searchButton');



    viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn');
    viewElems.weatherCity = getDOMElem('weatherCity');
    viewElems.weatherIcon = getDOMElem('weatherIcon');

    viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp');
    viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp');
    viewElems.weatherMinTemp = getDOMElem('weatherMinTemp');
};

const setupListeners = () => {
    viewElems.searchButton.addEventListener('click', onClickSubmit);
    viewElems.searchInput.addEventListener('keydown' , onEnterSubmit );
    viewElems.returnToSearchBtn.addEventListener('click', returnToSearch);
}

const initializeApp = () => {
    connectHTMLElems();
    setupListeners();

};


const onClickSubmit = (event) => {
    console.log(event);

        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then((data) => {

            displayWeatherData(data);
        });

}

const onEnterSubmit = (event) => {
    console.log(event);
    if (event.key === 'Enter') {
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then((data) => {
            displayWeatherData(data);
        });
    }
}



const displayWeatherData = (data) => {
    switchView();
    fadeInOut();
   // console.log('data:', data.date);
   // Wypisz całą odpowiedź
   // console.log('Cała odpowiedź z API:', data);

    // Wypisz tylko dane dzienne
    // console.log('Pogoda za dnia:', data.day);
    // Wypisz tylko temperaturę maksymalną i minimalną w dzień
    // console.log(`Temperatura w dzień: max ${data.day.temp_max}°C, min ${data.day.temp_min}°C`);

    viewElems.weatherCity.innerText = viewElems.searchInput.value;
    viewElems.weatherIcon.src = `https://dobrapogoda24.pl/assets/icons/${data.day.icon}.png`;
    viewElems.weatherIcon.alt = "pogoda ";
    viewElems.weatherCurrentTemp.innerText = `Temp w dzień: max ${data.day.temp_max.toFixed(0)}`;
    viewElems.weatherMinTemp.innerText = `Wilgotność ${data.day.humidity}`;

}


const switchView = () => {
    if (viewElems.weatherSearchView.style.display !== 'none') {
        viewElems.weatherSearchView.style.display = 'none';
        viewElems.weatherForecastView.style.display = 'block';
    }
    else {
        viewElems.weatherSearchView.style.display = 'flex';
        viewElems.weatherForecastView.style.display = 'none';
    }
}

const fadeInOut = () => {
    if(viewElems.mainContainer.style.opacity === '1' ||
    viewElems.mainContainer.style.opacity === '' ) {
        viewElems.mainContainer.style.opacity = '1';
    }
    else{
        viewElems.mainContainer.style.opacity = '1';
    }

}

const returnToSearch = () => {
    fadeInOut();
    setTimeout(() => {
        switchView();
        fadeInOut();
    },500)
}


document.addEventListener('DOMContentLoaded',  initializeApp);

