import { X, Star, CircleCheck, CircleAlert } from "lucide-react";
import { CloseButton, Header2 } from "../StyledComponents/styledComponents";
import { useContext } from "react";
import { AuthContext, UserProfile } from "../Context/AuthContext";
import styled from "styled-components";
import { capitalize } from "lodash";
import { TopicTag } from "../StyledComponents/styledForNavAndFooter";

export default function RecordsPopup({ handleRecordsPopup }: { handleRecordsPopup: () => void }) {
  const context = useContext(AuthContext);
  const { progress, scores } = context?.userProfile as UserProfile;
  const progressTopic = progress[context?.currTopic as string];
  const scoresTopic = scores[context?.currTopic as string];

  return (
    <div className="pop-container">
      <div className="pop-card">
        <Header2>Personal Record</Header2>
        <TopicTag style={{ color: "#3380fc", borderColor: "#3380fc" }}>
          {context?.currTopic}
        </TopicTag>

        {Object.keys(progressTopic).map((week, index) => {
          const isComplete = !progressTopic[week].includes(null);
          const thisWeeksScore = scoresTopic[week];
          const finalScore = isComplete
            ? thisWeeksScore.reduce((a, b) => a + b, 0) / thisWeeksScore.length
            : 0;

          const textColor = isComplete ? "e5e5e5" : "grey";

          return (
            <RecordGrid key={index}>
              <div style={{ justifySelf: "flex-start" }}> {capitalize(week)}</div>
              <div style={{ justifySelf: "center", color: textColor }}>
                {isComplete ? `${finalScore.toFixed(1)}%` : "Pending"}
              </div>
              <div style={{ justifySelf: "flex-end" }}>
                {isComplete ? (
                  <CircleCheck color="#e5e5e5" fill="#3380fc" strokeWidth={"1.8px"} />
                ) : (
                  <CircleAlert color="#f58439" strokeWidth={"1.8px"} />
                )}
              </div>
            </RecordGrid>
          );
        })}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Star size={"2em"} strokeWidth={2} fill="#FCAF33" color="#333333" />
          {/* <Header2 style={{ color: "#333333" }}>{starsCount}</Header2> */}
        </div>
        <CloseButton style={{ width: "fit-content" }} onClick={handleRecordsPopup}>
          <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
        </CloseButton>
      </div>
    </div>
  );
}

export const RecordGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  gap: 0.5rem;
`;
