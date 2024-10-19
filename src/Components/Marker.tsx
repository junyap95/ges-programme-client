import { MarkerWrapper } from "../StyledComponents/styledComponents";

type MarkerProps = {
  coordinate: { x: number; y: number };
  tileData: { week: string; x: number; y: number; loc: string };
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Marker({ coordinate, tileData, clickHandler }: MarkerProps) {
  return (
    <MarkerWrapper
      style={{ left: `${coordinate.x}px`, top: `${coordinate.y}px`, zIndex: -3 }}
      onClick={clickHandler}
      data-week={tileData.week}
      data-loc={tileData.loc}
    >
      {tileData.week}
    </MarkerWrapper>
  );
}
