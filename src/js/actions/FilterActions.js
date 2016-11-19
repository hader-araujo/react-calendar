import { ACTIONS_TYPE } from "../Utils/Consts"
const { SET_FILTER_TYPE, SET_FILTER_COUNTRY } = ACTIONS_TYPE

export function setType(type) {
    return {
        type: SET_FILTER_TYPE,
        payload: {
            type : type
        }
    }
}

export function setCountry(country) {
	return {
        type: SET_FILTER_COUNTRY,
        payload: {
            country : country
        }
    }
}
