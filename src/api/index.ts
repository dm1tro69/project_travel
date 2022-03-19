import axios from 'axios'
import {ApiOptionsType} from '../types'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw: any, ne: any) => {

    try{

        const {data: {data}} = await axios.get(URL, {

            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                // @ts-ignore
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
            }


    })
        return data
    }catch (e) {
        console.log(e)
    }
}



export const getWeatherData = async (lat: number, lng: number) => {
    try {
        if (lat && lng) {

            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat, lon: lng },
                headers: {
                    // @ts-ignore
                    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
};
