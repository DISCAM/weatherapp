// token do API pogodowego d43de585576f12ce15ef
//https://dobrapogoda24.pl/api/v1/weather/simple?city=warszawa&day=10&token=d43de585576f12ce15ef

export const getWeatherByCity = (city) => {
    return fetch(
        `https://dobrapogoda24.pl/api/v1/weather/simple?city=${city}&day=5&token=d43de585576f12ce15ef`
    )
        .then(resp => resp.json())
        .then((data) => {
           // console.log('data:', data.date);
            // Wypisz całą odpowiedź
           // console.log('Cała odpowiedź z API:', data);

            // Wypisz tylko dane dzienne
           // console.log('Pogoda za dnia:', data.day);

            // Wypisz tylko temperaturę maksymalną i minimalną w dzień
           // console.log(`Temperatura w dzień: max ${data.day.temp_max}°C, min ${data.day.temp_min}°C`);
            return data;
        })
}