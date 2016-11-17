export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
	filterType : "All",
	filterCountry : "AR"
}, action) {
    switch (action.type) {
		
        case "SET_TYPE": {
            return {
                ...state,
                filterType: action.payload.type
            }
        }
		case "SET_COUNTRY": {
            return {
                ...state,
                filterCountry: action.payload.country
            }
        }
    }

    return state
}
