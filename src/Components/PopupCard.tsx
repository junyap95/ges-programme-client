import { useCallback, useContext, useEffect, useState } from "react";
import { getScores, incrementUserStars } from "../helperFunctions";
import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { getAttemptCount, getWeeklyLoginStatus } from "../helperFunctions";
import { QUIZ_SELECTION_API_URL, SAM_COMPLETION, SAM_CONSTRUCTION } from "../constants";

type PopupCardProps = {
  locAndWeekData: { week: string; loc: string };
  onClose: () => void;
};

export default function PopupCard({ locAndWeekData, onClose }: PopupCardProps) {
  const context = useContext(AuthContext);
  const userProfile = context?.userProfile;
  const userid = localStorage.getItem("userid") ?? "";
  const [userGameData, setUserGameData] = useState({ attempts: 0, progress: "", scores: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attempts = await getAttemptCount(userid); /**To be refactored */
        const progress = await getWeeklyLoginStatus(userid);
        const scores = await getScores(userid);
        setUserGameData((prevData) => ({
          ...prevData,
          attempts: attempts[locAndWeekData.week],
          progress: progress[locAndWeekData.week],
          scores: scores[locAndWeekData.week],
        }));
      } catch (err) {
        console.error("Error fetching game progress in PopupCard:", err);
      }
    };
    fetchData();
  }, [locAndWeekData.week, userGameData.scores, userid]);

  const handleAttempt = useCallback(async () => {
    // If first ever attempt, stars + 1
    console.log(userGameData.attempts);
    if (userGameData.attempts === 0) await incrementUserStars(userid, 1);

    // THEN NAVIGATE TO QUIZ
    const userData = { ...userProfile, userid, currentAttempt: userGameData.attempts };
    const userDataParams = encodeURIComponent(JSON.stringify(userData));
    window.location.href = `${QUIZ_SELECTION_API_URL}?course=ges&week=${locAndWeekData.week}&data=${userDataParams}`;
  }, [locAndWeekData.week, userGameData.attempts, userProfile, userid]);
  console.log(userGameData.attempts);

  return (
    <div className="pop">
      <Header1>{locAndWeekData.loc}</Header1>
      <img
        src={userGameData.progress ? SAM_COMPLETION : SAM_CONSTRUCTION}
        alt="sam-logo"
        width={"100%"}
        style={{ pointerEvents: "none" }}
      />
      <div style={{ textAlign: "center", width: "inherit", padding: "0 1em" }}>
        {userGameData.progress ? (
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
