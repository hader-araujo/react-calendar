import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_DATE_FULFILLED, SET_DATE } = ACTIONS_TYPE

export function fetchDate() {
    return {
        type: FETCH_DATE_FULFILLED,
        payload:
            {
                selectedDate: Date.now()
            }
    }
}

export function changeDate(newDate, holiday) {
    return {
        type: SET_DATE,
        payload: {
            selectedDate : newDate,
			holiday : holiday
        }
    }
}
