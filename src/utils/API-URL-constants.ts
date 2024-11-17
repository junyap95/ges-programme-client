const baseUrl = `${window.location.protocol}//${window.location.hostname}:`;

export const QUIZ_SELECTION_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_QUIZ_SELECTION
    : `${baseUrl}3002/ges-topic-selection`;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ges-programme-server.onrender.com"
    : `${baseUrl}3001`;

export const IMAGEKIT_URL_PREFIX = "imagekit.io/jbyap95/";
