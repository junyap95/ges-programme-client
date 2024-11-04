export const tiles = [
  { week: "week1", x: -1, y: 0, loc: "LISBURN" },
  { week: "week2", x: 9, y: 0, loc: "DRUMBO" },
  { week: "week3", x: 23, y: -17, loc: "DUNDONALD" },
  { week: "week4", x: 19, y: -5, loc: "MONEYREAGH" },
  { week: "week5", x: 18, y: 3, loc: "CARRYDUFF" },
  { week: "week6", x: 5, y: 23, loc: "DROMARA" },
  { week: "week7", x: -3, y: 15, loc: "HILLSBOROUGH" },
  { week: "week8", x: -18, y: 8, loc: "MOIRA" },
  { week: "week9", x: -10, y: 0, loc: "MAGHABERRY" },
  { week: "week10", x: -17, y: -5, loc: "BALLINDERRY" },
  { week: "week11", x: -6, y: -16, loc: "STONYFORD" },
  { week: "week12", x: 3, y: -6, loc: "DERRYAGHY" },
];

export const SAM_CONSTRUCTION =
  "https://ik.imagekit.io/jbyap95/sam_constructor01_shadow.png?updatedAt=1730139103345";
export const SAM_COMPLETION =
  "https://ik.imagekit.io/jbyap95/sam_constructor02_shadow.png?updatedAt=1730139103345";

export const SAM_LOADING = "https://ik.imagekit.io/jbyap95/sam_anim03.gif?updatedAt=1729092923412";

export const QUIZ_SELECTION_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_QUIZ_SELECTION
    : "http://localhost:3002/ges-topic-selection";

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://ges-programme-server.onrender.com"
    : "http://localhost:3001";
