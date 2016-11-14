export default function reducer(state={
    temp: '',
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_HOLIDAYS": {
            return {...state, fetching: true}
        }
        case "FETCH_HOLIDAYS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_HOLIDAYS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                selectedDate: action.payload.selectedDate
            }
        }
    }

    return state
}
