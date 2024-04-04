import {BEGIN_GET_STATIONS, ERROR_GET_STATIONS, SUCCESS_GET_STATIONS,} from './dailyAction'

const initialState = {
    stationsLoading: false,
    stationsError: false,
    stationsData: [],
    date: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_GET_STATIONS:
            return {
                ...state,
                stationsLoading: true
            };
        case SUCCESS_GET_STATIONS:
            return {
                ...state,
                stationsLoading: false,
                stationsError: false,
                stationsData: action.payload
            }
        case ERROR_GET_STATIONS:
            return {
                ...state,
                stationsLoading: false,
                stationsError: true,
            }

        default:
            return state
    }
}