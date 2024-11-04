import { useCallback, useContext, useEffect, useState } from "react";
import { getScores, incrementUserStars } from "../helperFunctions";
import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { getAttemptCount, getWeeklyLoginStatus } from "../helperFunctions";
import {
  QUIZ_SELECTION_API_URL,
  SAM_COMPLETION,
  SAM_CONSTRUCTION,
  SAM_LOADING,
} from "../constants";

type PopupCardProps = {
  locAndWeekData: { week: string; loc: string };
  onClose: () => void;
};

export default function PopupCard({ locAndWeekData, onClose }: PopupCardProps) {
  const context = useContext(AuthContext);
  const userProfile = context?.userProfile;
  const userid = localStorage.getItem("userid") ?? "";
  const [userGameData, setUserGameData] = useState({
    attempts: 0,
    progress: "",
    scores: 0,
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const { currTopic } = localStorage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attempts = await getAttemptCount(userid, currTopic); /**To be refactored */
        const progress = await getWeeklyLoginStatus(userid, currTopic);
        const scores = await getScores(userid, currTopic);

        setUserGameData({
          attempts: attempts[locAndWeekData.week],
          progress: progress[locAndWeekData.week],
          scores: scores[locAndWeekData.week],
          course: currTopic,
        });
      } catch (err) {
        console.error("Error fetching game progress in PopupCard:", err);
      }
    };

    const loadData = async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    };

    loadData();
  }, [currTopic, locAndWeekData.week, userid]);

  const handleAttempt = useCallback(async () => {
    // If first ever attempt, stars + 1
    if (userGameData.attempts === 0) await incrementUserStars(userid, 1);

    // THEN NAVIGATE TO QUIZ
    const userData = {
      ...userProfile,
      userid,
      currentAttempt: userGameData.attempts,
      currTopic: currTopic,
    };
    const userDataParams = encodeURIComponent(JSON.stringify(userData));
    window.location.href = `${QUIZ_SELECTION_API_URL}?course=ges&week=${locAndWeekData.week}&data=${userDataParams}`;
  }, [currTopic, locAndWeekData.week, userGameData.attempts, userProfile, userid]);

  return (
    <div className="pop">
      <Header1>{locAndWeekData.loc}</Header1>
      {loading ? (
        <img src={SAM_LOADING} alt="sam-logo" width={"100%"} style={{ pointerEvents: "none" }} />
      ) : (
        <img
          src={userGameData.progress ? SAM_COMPLETION : SAM_CONSTRUCTION}
          alt="sam-logo"
          width={"100%"}
          style={{ pointerEvents: "none" }}
        />
      )}

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
          <PopupButton disabled={loading} onClick={loading ? undefined : handleAttempt}>
            Attempt
          </PopupButton>
        )}

        <div style={{ padding: "1em 0 0 0" }}>Attempts: {userGameData.attempts}</div>
      </div>
      <CloseButton onClick={onClose}>
        <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
      </CloseButton>
    </div>
  );
}
