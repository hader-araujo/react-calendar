import { ACTIONS_TYPE, HOLIDAY_TYPE } from "../Utils/Consts"
const { SET_FILTER_TYPE, SET_FILTER_COUNTRY } = ACTIONS_TYPE
const { ALL } = HOLIDAY_TYPE

export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
	filterType : ALL,
	filterCountry : "AR"
}, action) {
    switch (action.type) {
		
        case SET_FILTER_TYPE: {
            return {
                ...state,
                filterType: action.payload.type
            }
        }
		case SET_FILTER_COUNTRY: {
            return {
                ...state,
                filterCountry: action.payload.country
            }
        }
    }

    return state
}
