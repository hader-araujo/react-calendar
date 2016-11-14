import { combineReducers } from "redux"

import calendar from "./calendarReducer"
import holidays from "./holidaysReducer"

export default combineReducers({
    calendar, holidays
})