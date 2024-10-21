import { useCallback, useContext, useEffect, useState } from "react";
import { API_URL, getScores } from "../clientConstants";
import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { getAttemptCount, getWeeklyLoginStatus } from "../clientConstants";

type PopupCardProps = {
  locAndWeekData: { week: string; loc: string };
  onClose: () => void;
};

const logWeeklyCheckin = async (userid: string, week: string, date: string) => {
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
    console.error("Error:", error);
  }
};

export default function PopupCard({ locAndWeekData, onClose }: PopupCardProps) {
  const context = useContext(AuthContext);
  const userProfile = context?.userProfile;
  const userid = localStorage.getItem("userid") ?? "";
  const [userGameData, setUserGameData] = useState({ attempts: 0, progress: "", scores: 0 });

  console.log("userProfile", userProfile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attempts = await getAttemptCount(userid);
        const progress = await getWeeklyLoginStatus(userid);
        const scores = await getScores(userid);
        setUserGameData((prevData) => ({
          ...prevData,
          attempts: attempts[locAndWeekData.week],
          progress: progress[locAndWeekData.week],
          scores: scores[locAndWeekData.week],
        }));
        console.log("marks", userGameData.scores);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, [locAndWeekData.week, userGameData.scores, userid]);

  const handleAttempt = useCallback(async () => {
    if (!userGameData.progress) {
      const date = new Date().toISOString().split("T")[0];
      const res = await logWeeklyCheckin(userid, locAndWeekData.week, date);
      console.log("res", res);
    }

    // THEN COUNT ATTEMPT
    console.log("attemptData", userGameData.attempts);

    // THEN NAVIGATE TO QUIZ
  }, [locAndWeekData.week, userGameData.attempts, userGameData.progress, userid]);

  return (
    <div className="pop">
      <Header1>{locAndWeekData.loc}</Header1>
      <img
        src="https://ik.imagekit.io/jbyap95/tr:w-200/sam_anim03.gif?updatedAt=1729092923412"
        alt="sam-logo"
        width={"100%"}
      />
      <div style={{ textAlign: "center", width: "inherit", padding: "0 1em" }}>
        {userGameData.progress && userGameData.scores >= 80 ? (
          <PopupButton
            style={{
              boxShadow: "none",
              border: "solid 2px #3380fc",
              backgroundColor: "transparent",
              color: "#3380fc",
              fontWeight: "400",
              pointerEvents: "none",
            }}
          >
            Completed
          </PopupButton>
        ) : (
          <PopupButton onClick={handleAttempt}>Attempt</PopupButton>
        )}

        <div style={{ padding: "1em 0 0 0" }}>Attempts: {userGameData.attempts}</div>
      </div>
      <CloseButton onClick={onClose}>
        <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
      </CloseButton>
    </div>
  );
}
