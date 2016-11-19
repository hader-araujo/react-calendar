import { ACTIONS_TYPE, CALENDAR_TYPE } from "../Utils/Consts"
const { SET_CALENDAR_TYPE } = ACTIONS_TYPE
const { MONTHLY } = CALENDAR_TYPE

export default function reducer(state={
	calendarType : MONTHLY

}, action) {
    switch (action.type) {
		
        case SET_CALENDAR_TYPE: {
            return {
                ...state,
                calendarType: action.payload.type
            }
        }
    }

    return state
}
