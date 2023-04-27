import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'b53678a251msh64e4aca459cf9b6p149262jsn6bb0b0a674f6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI= async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options);

    return data;
}