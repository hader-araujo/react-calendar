import axios from "axios"

const url = 'https://holidayapi.com/v1/holidays?key=cc8c2a66-7922-48ec-bd4c-3b999be58f66&country=US&year='

export function fetchHolidays(year, dispatch) {

		console.log("------------------------ACCESSING URL " + url + year)
		
        axios.get(url + year)
        .then(function (response) {
			dispatch(
				{
					type: "FETCH_HOLIDAYS",
					payload: {
						year: year,
						holidays: JSON.stringify(response.data.holidays)
					}
				}
			)
        })
		
        .catch(function (error) {
            dispatch( {
                type: "FETCH_HOLIDAYS_REJECTED",
                payload: error
            } )
        })
}