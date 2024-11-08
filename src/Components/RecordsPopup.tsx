import { X, Star } from "lucide-react";
import { CloseButton, Header2 } from "../StyledComponents/styledComponents";
import { getScores } from "../utils/helperFunctions";
import { useEffect, useState } from "react";

export default function RecordsPopup({ handleRecordsPopup }: { handleRecordsPopup: () => void }) {
  const userid = localStorage.getItem("userid") ?? "";
  const [starsCount, setStarsCount] = useState(0);
  const { currTopic } = localStorage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scores = await getScores(userid, currTopic);
        setStarsCount(scores.stars);
      } catch (err) {
        console.error("Error fetching stars count in records:", err);
      }
    };
    fetchData();
  }, [currTopic, userid]);
  return (
    <div className="pop-container">
      <div className="pop-card">
        <Header2>Personal Records Coming Soon!</Header2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Star size={"2em"} strokeWidth={2} fill="#FCAF33" color="#333333" />
          <Header2 style={{ color: "#333333" }}>{starsCount}</Header2>
        </div>
        {/* <PopupButton style={{ width: "20rem" }} onClick={handleLogout}>
          Goodbye!
        </PopupButton> */}
        <CloseButton style={{ width: "fit-content" }} onClick={handleRecordsPopup}>
          <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
        </CloseButton>
      </div>
    </div>
  );
}
