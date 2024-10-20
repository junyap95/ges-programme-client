export const API_URL = process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export const fetchUserProgress = async (userid: any, URL: any) => {
  try {
    const params = { userid: userid };
    const response = await fetch(`http://localhost:3001/auth/login`, {
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
