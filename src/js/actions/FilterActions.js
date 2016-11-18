import { ACTIONS_TYPE } from "../Utils/Consts"
const { SET_TYPE, SET_COUNTRY } = ACTIONS_TYPE

export function setType(type) {
    return {
        type: SET_TYPE,
        payload: {
            type : type
        }
    }
}

export function setCountry(country) {
	return {
        type: SET_COUNTRY,
        payload: {
            country : country
        }
    }
}
