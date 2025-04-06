import axios from 'axios';
import useAuth from './useAuth';
import {useNavigate} from 'react-router';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('access-token')}`,
  },
});

const useAxiosSecure = () => {
  const {logOutUser} = useAuth();
  const navigate = useNavigate();

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

      if (statusCode === 403 || statusCode === 401) {
        logOutUser()
          .then(() => navigate('/login'))
          .catch((err) => console.log(err));
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
