export const tiles = [
  { week: "week1", x: -2, y: -3, loc: "LISBURN" },
  { week: "week2", x: 8, y: -3, loc: "DRUMBO" },
  { week: "week3", x: 22, y: -20, loc: "DUNDONALD" },
  { week: "week4", x: 18, y: -8, loc: "MONEYREAGH" },
  { week: "week5", x: 17, y: 0, loc: "CARRYDUFF" },
  { week: "week6", x: 4, y: 20, loc: "DROMARA" },
  { week: "week7", x: -4, y: 12, loc: "HILLSBOROUGH" },
  { week: "week8", x: -19, y: 3, loc: "MOIRA" },
  { week: "week9", x: -11, y: -3, loc: "MAGHABERRY" },
  { week: "week10", x: -18, y: -8, loc: "BALLINDERRY" },
  { week: "week11", x: -7, y: -19, loc: "STONYFORD" },
  { week: "week12", x: 0, y: -10, loc: "DERRYAGHY" },
];

export const SAM_CONSTRUCTION =
  "https://ik.imagekit.io/jbyap95/sam_constructor01_shadow.png?updatedAt=1730139103345";
export const SAM_COMPLETION =
  "https://ik.imagekit.io/jbyap95/sam_constructor02_shadow.png?updatedAt=1730139103345";

export const SAM_LOADING = "https://ik.imagekit.io/jbyap95/sam_anim03.gif?updatedAt=1729092923412";

const baseUrl = `${window.location.protocol}//${window.location.hostname}:`;

export const QUIZ_SELECTION_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_QUIZ_SELECTION
    : `${baseUrl}3002/ges-topic-selection`;

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ges-programme-server.onrender.com"
    : `${baseUrl}3001`;

// export const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://ges-programme-server.onrender.com"
//     : `http://${localIP}:3001`;

// export const QUIZ_SELECTION_API_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_QUIZ_SELECTION
//     : `http://${localIP}:3002/ges-topic-selection`;

// export const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://ges-programme-server.onrender.com"
//     : "http://localhost:3001";

// export const QUIZ_SELECTION_API_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_QUIZ_SELECTION
//     : "http://localhost:3002/ges-topic-selection";
