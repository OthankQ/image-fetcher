import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7d45cf5f8558d3dde060bd23cdf1780800296fb40d30a4e6706c917d4c290565'
  }
});