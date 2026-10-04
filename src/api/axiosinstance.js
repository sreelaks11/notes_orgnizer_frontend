import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://notes-orgnizer-1.onrender.com",
  timeout: 5000,
});



// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("api response received......");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
   if (error.response) {
      // Server responded with a status code
      const status = error.response.status;

      console.log("Status:", status);
      console.log("Server Response:", error.response.data);

      if (status === 401) {
        console.log("Unauthorized error");
      } 
      else if (status === 404) {
        console.log("API is not found");
      } 
      else if (status === 500) {
        console.log("Something went wrong on server");
      }
    } 
    
    else if (error.request) {
      // Request was sent but server did not respond
      console.log("No response from the server");
    } 
    
    else {
      // Error while setting up the request
      console.log("Error:", error.message);
    }
    
    return Promise.reject(error);
  }
);
export default axiosInstance