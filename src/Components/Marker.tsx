import { startCase } from "lodash";
import { MarkerWrapper } from "../StyledComponents/styledComponents";

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
  const isToday = today.toDateString() === activeDateObj.toDateString();
  const currentWeek = startCase(tileData.week).toUpperCase();
  return (
    <MarkerWrapper
      title={tileData.loc}
      className={isToday ? "active" : ""}
      style={{
        left: `${coordinate.x}px`,
        top: `${coordinate.y}px`,
        zIndex: 1,
        backgroundColor: isActive ? "#3380fc" : "grey",
        pointerEvents: isActive ? "auto" : "none",
        fontSize: isActive ? "0.75em" : "0.5rem",
      }}
      onClick={clickHandler}
      data-week={tileData.week}
      data-loc={tileData.loc}
    >
      {currentWeek}
    </MarkerWrapper>
  );
}
