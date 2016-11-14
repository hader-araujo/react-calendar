import axios from "axios"


const HolidayAPI = require('node-holidayapi');
const hapi = new HolidayAPI('cc8c2a66-7922-48ec-bd4c-3b999be58f66').v1;

const parameters = {
  // Required
  country: 'US',
  year:    2016,
  // Optional
  // month:    7,
  // day:      4,
  // previous: true,
  // upcoming: true,
  // public:   true,
  // pretty:   true,
};

export function fetchHolidays(dispatch) {
    
    hapi.holidays(parameters, function (err, data) {
        if (err) {
            dispatch( {
                    type: "FETCH_HOLIDAYS_REJECTED",
                    payload: err
                } )
        } else {
            dispatch( {
                type: "FETCH_HOLIDAYS",
                payload: data
            } )
        }
    });
}