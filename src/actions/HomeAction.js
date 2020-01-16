import { FETCH_API_DETAILS, SET_API_DETAILS } from './types';
import APIAction from './APIAction';

function fetchAPIDetails() {
    return APIAction({
        url: "https://private-7f85c-murthykarra.apiary-mock.com/questions",
        onSuccess: setAPIDetails,
        onFailure: () => console.log('Error loading API data'),
        label: FETCH_API_DETAILS
    });
}

function setAPIDetails(data) {
    return {
        type: SET_API_DETAILS,
        payload: data
    };
}

export { fetchAPIDetails };