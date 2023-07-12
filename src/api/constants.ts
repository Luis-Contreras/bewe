const baseUrl = process.env.REACT_APP_API_PATH || "https://tecnical.bewe.co";

export const LINKS_API = `${baseUrl}/links`;
export const AUTH_API = `${baseUrl}/auth`;
export const REQUEST_TYPE = {
  POST: "POST",
  GET: 'GET',
  DELETE: 'DELETE'
};