import { ACTIONS_TYPE } from "../Utils/Consts"
const { SET_TYPE } = ACTIONS_TYPE

export function setType(type) {
    return {
        type: SET_TYPE,
        payload: {
            type : type
        }
    }
}
