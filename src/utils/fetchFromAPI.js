import axios from "axios";



// const axios = require('axios');
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

  params: {
    
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'a4b32abff7msh05e0c8b5cc943c4p18f52fjsn3869066ca791',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI = async (url) => {
   const  { data } = await axios.get(`${BASE_URL}/${url}`,options);

   return data;
};