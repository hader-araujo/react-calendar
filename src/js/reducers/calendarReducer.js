import { ACTIONS_TYPE } from "../Utils/Consts"
const { FETCH_DATE, FETCH_DATE_REJECTED, FETCH_DATE_FULFILLED, SET_DATE } = ACTIONS_TYPE

export default function reducer(state={
    selectedDate: Date.now(),
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case FETCH_DATE: {
            return {...state, fetching: true}
        }
        case FETCH_DATE_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_DATE_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                selectedDate: action.payload.selectedDate
            }
        }
        case SET_DATE: {
            return {
                ...state,
                selectedDate: action.payload.selectedDate
            }
        }
    }

    return state
}
