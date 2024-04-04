import axios from 'axios'

export const BEGIN_GET_STATIONS = 'BEGIN_GET_STATIONS';
export const SUCCESS_GET_STATIONS = 'SUCCESS_GET_STATIONS';
export const ERROR_GET_STATIONS = 'ERROR_GET_STATIONS';

export const getStationsData = () => async dispatch => {
    dispatch({type: BEGIN_GET_STATIONS});
    try {
        const res = await axios.get('monitoringStations');
        dispatch({type: SUCCESS_GET_STATIONS, payload: res.data});
    } catch (e) {
        dispatch({type: ERROR_GET_STATIONS});
    }
};