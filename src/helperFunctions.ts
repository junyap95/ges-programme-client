import { API_URL } from "./constants";

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
    console.log("response client", response);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchUserProfile = async (userid: any) => {
  try {
    const response = await fetch(`${API_URL}/get/select-user?userid=${userid}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchGameData = async () => {
  try {
    const response = await fetch(`${API_URL}/get/game-data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response game data", response);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getWeeklyLoginStatus = async (userid: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-progress?userid=${userid}`);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAttemptCount = async (userid: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-attempts?userid=${userid}`);

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getScores = async (userid: string) => {
  try {
    const response = await fetch(`${API_URL}/get/user-scores?userid=${userid}`);

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
    console.log("client side run incrementUserStars");
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
