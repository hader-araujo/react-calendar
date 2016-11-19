import { ACTIONS_TYPE } from "../Utils/Consts"
const { SET_CALENDAR_TYPE } = ACTIONS_TYPE

export function setType(type) {
    return {
        type: SET_CALENDAR_TYPE,
        payload: {
            type : type
        }
    }
}
