import { startCase } from "lodash";
import { MarkerWrapper } from "../StyledComponents/styledComponents";
import { useEffect, useState } from "react";
import { isWithinOneWeek } from "../utils/helper-functions";

type MarkerProps = {
  activeDate: string;
  coordinate: { x: number; y: number };
  tileData: { week: string; x: number; y: number; loc: string };
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

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
        // left: `0px`,
        // top: `0px`,
        zIndex: 1,
        backgroundColor: isActive ? "#3380fc" : "grey",
        pointerEvents: isActive ? "auto" : "none",
        fontSize: isActive ? "0.75em" : "0.5em",
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
