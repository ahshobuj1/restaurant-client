import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('access-token')}`,
  },
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      const statusCode = err?.response?.status;
      console.log(statusCode);
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
