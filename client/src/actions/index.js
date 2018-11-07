let numeral = require('numeral');

// const API_KEY = config.API_KEY;
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// export const FETCH_WEATHER = 'FETCH_WEATHER';
// export const FETCH_POSTS = 'fetch_posts';

// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us`;
//   const request = axios.get(url);
  
//   // console.log('req', request);
//   return {
//   	type: FETCH_WEATHER,
//   	payload: request
//   };
// }
// export function fetchPosts() {

//   const request = axios.get('/posts')

//   return {
//     type: FETCH_POSTS,
//     payload: request
//   };

export const ADD_LINE_ITEM = 'ADD_LINE_ITEM';
export const DELETE_LINE_ITEM = 'DELETE_LINE_ITEM';
export const UPDATE_TAX = 'UPDATE_TAX';
export const UPDATE_LINE_ITEM = 'UPDATE_LINE_ITEM';
export const UPDATE_INVOICE_NUMBER = 'UPDATE_INVOICE_NUMBER';




export function addLineItem() {
  return {
    type: 'ADD_LINE_ITEM'
  }
}

export function deleteLineItem (lineItemId) {
  return {
    type: 'DELETE_LINE_ITEM',
    lineItemId: lineItemId
  }
}

export function updateTax(taxPercentage) {
  return {
    type: 'UPDATE_TAX',
    taxPercentage: numeral(taxPercentage)
  }
}

export function updateLineItem(id, lineItem) {
  return {
    type: 'UPDATE_LINE_ITEM',
    lineItemId: id,
    lineItem: lineItem
  }
}

export function updateInvoiceNumber(newNumber) {
  return {
    type: 'UPDATE_INVOICE_NUMBER',
    number: newNumber
  }
}
  

