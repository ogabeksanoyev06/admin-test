import axios from 'axios';

export const useApi = () => {
   const config = useRuntimeConfig();
   const token = useCookie('auth_token').value;

   const api = axios.create({
      headers: { 'Content-Type': 'application/json' }
   });

   api.defaults.baseURL = config.public.apiBaseUrl;

   api.interceptors.request.use(
      (config) => {
         const auth_tooken = token;
         if (auth_tooken) {
            config.headers['Authorization'] = `Bearer ${auth_tooken}`;
         }
         return config;
      },
      (error) => Promise.reject(error)
   );

   api.interceptors.response.use(
      (response) => {
         return response;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   return api;
};
