export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_HOLIDAYS": {
			
			const objectToReturn = {
				...state, 
				fetching: true
			}
			objectToReturn[action.payload.year] = JSON.parse(action.payload.holidays)
			
			return objectToReturn
        }
        case "FETCH_HOLIDAYS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_HOLIDAYS_FULFILLED": {
			return {
                ...state,
                fetching: false,
                fetched: true,
            }
        }
    }

    return state
}
