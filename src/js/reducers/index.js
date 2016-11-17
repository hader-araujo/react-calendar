import { combineReducers } from "redux"

import calendar from "./calendarReducer"
import holidays from "./holidaysReducer"
import filter from "./filterReducer"

export default combineReducers({
    calendar, holidays, filter
})