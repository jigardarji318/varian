import { SET_API_DETAILS, API_START, API_END, FETCH_API_DETAILS } from '../actions/types';

export default function HomeReducer(state = {}, action) {
    switch (action.type) {
        case SET_API_DETAILS:
            return { ...state, data: action.payload }

        case API_START:
            if (action.payload === FETCH_API_DETAILS) {
                return {
                    ...state
                };
            }
            break;
        case API_END:
            if (action.payload === FETCH_API_DETAILS) {
                return {
                    ...state
                };
            }
            break;
        default:
            return {
                state
            };
    }
};