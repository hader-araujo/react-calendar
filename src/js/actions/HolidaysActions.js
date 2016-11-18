import axios from "axios"

import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_HOLIDAYS, FETCH_HOLIDAYS_REJECTED } = ACTIONS_TYPE

export function fetchHolidays(year, country, dispatch) {

	const url = `https://holidayapi.com/v1/holidays?key=cc8c2a66-7922-48ec-bd4c-3b999be58f66&country=${country}&year=${year}`

		console.log("------------------------ACCESSING URL " + url)
		
        axios.get(url)
        .then(function (response) {
			dispatch(
				{
					type: FETCH_HOLIDAYS,
					payload: {
						year: year,
						country: country,
						holidays: JSON.stringify(response.data.holidays)
					}
				}
			)
        })
		
        .catch(function (error) {
            dispatch( {
                type: FETCH_HOLIDAYS_REJECTED,
                payload: error
            } )
        })
}