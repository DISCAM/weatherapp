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
    viewElems.weatherForecastView = getDOMElem('weatherForecastView');

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
const onEnterSubmit = () => {}

document.addEventListener('DOMContentLoaded',  initializeApp);

