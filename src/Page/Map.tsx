import { useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";
import { relative } from "path";

type GameData = {
  [key: string]: {
    activeDate: string;
    allQuestions: {};
  };
};

const tiles = [
  { week: "week1", x: -1, y: 0, loc: "LISBURN" },
  { week: "week2", x: 9, y: 0, loc: "DRUMBO" },
  { week: "week3", x: 23, y: -17, loc: "DUNDONALD" },
  { week: "week4", x: 19, y: -5, loc: "MONEYREAGH" },
  { week: "week5", x: 18, y: 3, loc: "CARRYDUFF" },
  { week: "week6", x: 5, y: 23, loc: "DROMARA" },
  { week: "week7", x: -3, y: 15, loc: "HILLSBOROUGH" },
  { week: "week8", x: -18, y: 8, loc: "MOIRA" },
  { week: "week9", x: -10, y: 0, loc: "MAGHABERRY" },
  { week: "week10", x: -17, y: -5, loc: "BALLINDERRY" },
  { week: "week11", x: -6, y: -16, loc: "STONYFORD" },
  { week: "week12", x: 3, y: -6, loc: "DERRYAGHY" },
];

export default function Map({ gameData }: { gameData: GameData }) {
  const mapRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [popup, setPopup] = useState(false);
  const [currentLoc, setCurrentLoc] = useState("");

  const resizeHandler = () => {
    console.log("mapref", mapRef.current);
    if (mapRef.current) {
      const dimensions = mapRef.current.getBoundingClientRect();
      setWidth(dimensions.width);
      setHeight(dimensions.height);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [mapRef]);

  const onMarkerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopup(!popup);
    const target = e.target as HTMLButtonElement;
    setCurrentLoc(target.dataset.loc || "unknown");
  };

  console.log("width", width, "height", height);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: popup ? 4 : 2,
      }}
    >
      <div
        onLoad={resizeHandler}
        style={{
          height: "100%",
          zIndex: -4,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(103, 143, 201, 1)",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: "4rem",
          }} /** This div is needed to contain the img and the markers. Because Marker's absolute position is only affected by its parent, not siblings */
        >
          <img
            ref={mapRef}
            src="https://ik.imagekit.io/jbyap95/pixel-map-no-bg.png"
            alt="lisburn-map"
            style={{
              height: "100%",
              width: "100%",
              pointerEvents: "none",
              filter: "drop-shadow(0 0.7em 0 rgba(0, 0, 0, 0.1))",
            }}
          />
          {width > 0 &&
            height > 0 &&
            tiles.map((tile, index) => (
              <Marker
                activeDate={gameData[tile.week].activeDate}
                coordinate={{
                  x: width / 2 + (width / 50) * tile.x,
                  y: height / 2 + (height / 50) * tile.y,
                }}
                tileData={tile}
                clickHandler={(e) => onMarkerClick(e)}
                key={index}
              />
            ))}
        </div>
      </div>

      {popup && (
        <div className="popContainer">
          <PopupCard title={currentLoc} clickHandler={() => setPopup(false)} />
          <div className="backdrop" />
        </div>
      )}
    </div>
  );
}
