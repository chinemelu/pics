import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID x-JrMXDCt8RFOmgwB04kFedRzS7B8nI7N22lrRlWgHU'
  }
});

export const axiosGetRequest = (url, options) => {
  return axiosInstance.get(url, options)
}

export default axiosInstance;