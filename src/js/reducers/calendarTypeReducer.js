import { ACTIONS_TYPE } from "../Utils/Consts"
const { SET_TYPE } = ACTIONS_TYPE

export default function reducer(state={
	type : "monthly"

}, action) {
    switch (action.type) {
		
        case SET_TYPE: {
            return {
                ...state,
                filterType: action.payload.type
            }
        }
    }

    return state
}
