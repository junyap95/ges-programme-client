import { startCase } from "lodash";
import { MarkerWrapper } from "../StyledComponents/styledComponents";
import { useEffect, useState } from "react";

type MarkerProps = {
  activeDate: string;
  coordinate: { x: number; y: number };
  tileData: { week: string; x: number; y: number; loc: string };
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function isWithinOneWeek(startDateStr: Date) {
  // Parse the dates
  const today = new Date();
  // Calculate the end date (one week after the start date)
  const endDate = new Date(startDateStr);
  endDate.setDate(startDateStr.getDate() + 6); // Add 7 days to the start date

  // Check if the check date is within the range
  return today >= startDateStr && today <= endDate;
}

export default function Marker({ activeDate, coordinate, tileData, clickHandler }: MarkerProps) {
  // TODO: Construction Complete state
  const activeDateObj = new Date(activeDate);
  const today = new Date();
  const isActive = today >= activeDateObj;
  const isWithinOneWeekRange = isWithinOneWeek(activeDateObj);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentWeek = startCase(tileData.week).toUpperCase();
  return (
    <MarkerWrapper
      title={tileData.loc}
      className={isWithinOneWeekRange ? "active" : ""}
      style={{
        left: `${coordinate.x}px`,
        top: `${coordinate.y}px`,
        zIndex: 1,
        backgroundColor: isActive ? "#3380fc" : "grey",
        pointerEvents: isActive ? "auto" : "none",
        fontSize: isActive ? "0.75em" : "0.5rem",
        scale: isVisible ? "1" : "0",
      }}
      onClick={clickHandler}
      data-week={tileData.week}
      data-loc={tileData.loc}
    >
      {currentWeek}
    </MarkerWrapper>
  );
}
