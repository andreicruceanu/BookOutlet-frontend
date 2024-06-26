import axios from "axios";
import endpoints from "../../api/endpoints";

axios.defaults.baseURL = "https://api-book-outlet.vercel.app/api";
//axios.defaults.baseURL = "http://127.0.0.1:5000/api";

const register = async (userData) => {
  const res = await axios.post(endpoints.register, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("firstName", res.data.firstName);
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(endpoints.login, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.userDetails));
    localStorage.setItem("firstName", res.data.userDetails.firstName);
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("firstName");
  localStorage.removeItem("token");
};

const forgotPassword = async (email) => {
  const res = await axios.post(endpoints.forgotPassword, email);

  return res.data;
};
const resetPassword = async ({ token, userData }) => {
  const res = await axios.patch(endpoints.resetPassword({ token }), userData);
  return res.data;
};

const getFavoriteOfUser = async () => {
  const res = await axios.get(endpoints.getFavoriteOfUser, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
const authService = {
  register,
  logout,
  login,
  forgotPassword,
  resetPassword,
  getFavoriteOfUser,
};

export default authService;
