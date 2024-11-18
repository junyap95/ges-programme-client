import { API_URL, IMAGEKIT_URL_PREFIX } from "./API-URL-constants";

export const login = async (userid: string) => {
  try {
    const params = { userid: userid };
    const response = await fetch(`${API_URL}/authdb/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return { operation: false };
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchUserProgress = async (userid: any) => {
  try {
    const params = { userid: userid };
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchActiveDates = async () => {
  try {
    const response = await fetch(`${API_URL}/mdb/week-dates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getWeeklyLoginStatus = async (userid: string, course: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-progress?userid=${userid}&course=${course}`);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAttemptCount = async (userid: string, course: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-attempts?userid=${userid}&course=${course}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getScores = async (userid: string, course: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-scores?userid=${userid}&course=${course}`);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const logWeeklyCheckin = async (userid: string, week: string, date: string) => {
  try {
    const response = await fetch(`${API_URL}/update/weekly-progress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, week, date }),
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error logging weekly check-in in progress table:", error);
  }
};

export const incrementAttemptCount = async (userid: string, week: string) => {
  try {
    const response = await fetch(`${API_URL}/update/attempt-count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, week }),
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error incrementing attempt count:", error);
  }
};

export const incrementUserStars = async (userid: string, amount: number) => {
  try {
    const response = await fetch(`${API_URL}/update/user-stars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, amount }),
    });

    if (response.ok) return await response.json();
  } catch (error) {
    console.error("Error incrementing user stars:", error);
  }
};

export function transformImageUrl(url: string, transformationString: string) {
  // Find the position where the transformation should be inserted
  const position = url.indexOf(IMAGEKIT_URL_PREFIX) + IMAGEKIT_URL_PREFIX.length;
  // Insert the transformation string at the correct position in the URL
  const transformedUrl = url.slice(0, position) + transformationString + "/" + url.slice(position);
  return transformedUrl;
}

// Mongo
export const fetchUserProfile = async (userid: string) => {
  try {
    const response = await fetch(`${API_URL}/mdb/find?userid=${userid}`);
    if (response.ok) {
      const [parsedData] = await response.json();
      return parsedData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getUserProgress = async (userid: string) => {
  try {
    const response = await fetch(`${API_URL}/mdb/user-progress?userid=${userid}`);
    if (response.ok) return await response.json();
  } catch (error) {
    console.error("Error fetching user progress from MDB: ", error);
  }
};
