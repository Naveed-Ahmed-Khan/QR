import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: "https://qr1-app-server.herokuapp.com/" });
//  const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
  if (Cookies.get("token")) {
    req.headers.authorization = `Bearer ${Cookies.get("token")}`;
  }

  return req;
});

export const signup = (userdata) => API.post(`user/signup`, userdata);
export const login = (userdata) => API.post(`user/login`, userdata);
export const logedinuser = (userdata) => API.post(`user/logedin`, userdata);
export const createMenu = (userdata) => API.post(`user/createMenu`, userdata);
export const createSurvey = (userdata) =>
  API.post(`user/createSurvey`, userdata);
export const fetchUserMenus = (uid) => API.post(`user/userMenus`, uid);
export const fetchMenu = (mid) => API.post(`user/getMenu`, mid);
export const editMenu = (mid) => API.post(`user/editMenu`, mid);
export const deleteMenu = (mid) => API.post(`user/deleteMenu`, mid);
export const fetchUserSurveys = (uid) => API.post(`user/userSurveys`, uid);
export const fetchSurvey = (sid) => API.post(`user/getSurvey`, sid);
export const deleteSurvey = (sid) => API.post(`user/deleteSurvey`, sid);
//////////////////////
export const editSurvey = (sid) => API.post(`user/editSurvey`, sid);
