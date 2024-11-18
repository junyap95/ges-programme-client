import { useCallback, useContext, useEffect, useState } from "react";
import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import { AuthContext, UserProfile } from "../Context/AuthContext";
import PopupSkeleton from "./PopupSkeleton";
import { incrementUserStars } from "../utils/network-functions";
import { QUIZ_SELECTION_API_URL } from "../utils/API-URL-constants";
import { SAM_COMPLETION, SAM_CONSTRUCTION } from "../utils/image-constants";
import { MapTopic } from "../utils/type-constants";

type PopupCardProps = {
  topic: MapTopic;
  locAndWeekData: { week: string; loc: string };
  onClose: () => void;
};

export default function PopupCard({ topic, locAndWeekData, onClose }: PopupCardProps) {
  const context = useContext(AuthContext);
  const userProfile = context?.userProfile as UserProfile;
  const userid = localStorage.getItem("userid") ?? "";
  const [userGameData, setUserGameData] = useState({
    attempts: 0,
    progress: false,
    course: "",
  });
  const [loading, setLoading] = useState(true);
  const currTopic = context?.currTopic;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attempts = userProfile.attempts;
        const progress = userProfile.progress;

        const isLevelCompleted = !progress[topic][locAndWeekData.week].includes(null);

        setUserGameData({
          attempts: attempts[topic][locAndWeekData.week],
          progress: isLevelCompleted,
          course: currTopic as string,
        });
      } catch (err) {
        console.error("Error fetching game progress in PopupCard:", err);
      }
    };

    const loadData = async () => {
      setLoading(true);
      await fetchData();
      setTimeout(() => setLoading(false), 250);
    };
    loadData();
  }, [
    currTopic,
    locAndWeekData.week,
    topic,
    userProfile.attempts,
    userProfile.progress,
    userProfile.scores,
  ]);

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
    window.location.href = `${QUIZ_SELECTION_API_URL}?week=${locAndWeekData.week}&data=${userDataParams}`;
  }, [currTopic, locAndWeekData.week, userGameData.attempts, userProfile, userid]);
  console.log(locAndWeekData.week, currTopic);

  return (
    <div className="pop-container">
      <div className="pop-card" style={{ padding: loading ? "1em 2em" : "1em 0" }}>
        {loading ? (
          <PopupSkeleton />
        ) : (
          <>
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
                <PopupButton disabled={loading} onClick={loading ? undefined : handleAttempt}>
                  Attempt
                </PopupButton>
              )}

              <div style={{ padding: "1em 0 0 0" }}>Attempts: {userGameData.attempts}</div>
            </div>
          </>
        )}
        <CloseButton onClick={onClose}>
          <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
        </CloseButton>
      </div>
    </div>
  );
}
