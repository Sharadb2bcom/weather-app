import axios from 'axios';

const API_KEY='5e30a58e64ae712e859b8816ed161b9a';

const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},in`;
	const request= axios.get(url)
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}