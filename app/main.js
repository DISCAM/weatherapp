
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
}

const initializeApp = () => {
    connectHTMLElems();
    setupListeners();

};


const onClickSubmit = () => {}

const onEnterSubmit = (event) => {
    console.log(event);
    if (event.key === 'Enter') {
        let query = viewElems.searchInput.value;
        getWeatherByCity(query).then((data) => {
            console.log('data:', data.date);
            // Wypisz całą odpowiedź
            console.log('Cała odpowiedź z API:', data);

            // Wypisz tylko dane dzienne
            console.log('Pogoda za dnia:', data.day);
            // Wypisz tylko temperaturę maksymalną i minimalną w dzień
            console.log(`Temperatura w dzień: max ${data.day.temp_max}°C, min ${data.day.temp_min}°C`);
        });
    }
}

document.addEventListener('DOMContentLoaded',  initializeApp);

