import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 20000,
});

api.interceptors.request.use(async (axConf) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    axConf.headers.Authorization = `Bearer ${token}`;
  }
  return axConf;
});

api.interceptors.response.use(
  (response) => {
    if (response) return response;
  },
  (err) => {
    if (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("jwtToken");
        window.location.href = "/";
      }
      return Promise.reject(err);
    }
  }
);

export default api;
