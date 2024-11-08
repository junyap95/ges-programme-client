import React, { useContext, useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";
import { tiles } from "../utils/constants";
import { ChevronRight } from "lucide-react";
import { MapTopic } from "./Home";
import { AuthContext } from "../Context/AuthContext";
import {
  ChangeMapArrow,
  GameMap,
  GameMapContainer,
  GameMapSubwrapper,
} from "../StyledComponents/styledForMap";
import { AvatarContainer } from "../StyledComponents/styledForNavAndFooter";

type GameData = {
  [key: string]: {
    [key: string]: {
      activeDate: string;
      allQuestions: {};
    };
  };
};

type MapProps = {
  gameData: GameData;
  currTopic: MapTopic;
  setCurrTopic: React.Dispatch<React.SetStateAction<MapTopic>>;
};

export default function Map({ gameData, currTopic, setCurrTopic }: MapProps) {
  const context = useContext(AuthContext);
  const numberOfCourses = context?.userProfile.course.length as number;
  const mapRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [popup, setPopup] = useState(false);
  const [locAndWeek, setLocAndWeek] = useState({ loc: "", week: "" });
  const [isFlat, setIsFlat] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  console.log({ height, width });

  const resizeHandler = () => {
    if (mapRef.current) {
      const dimensions = mapRef.current.getBoundingClientRect();
      setWidth(dimensions.width);
      setHeight(dimensions.height);
    }
  };

  const handleChangeMap = () => {
    const { currTopic } = localStorage;
    setCurrTopic((prevTopic) => (prevTopic === "Numeracy" ? "Literacy" : "Numeracy"));
    localStorage.setItem("currTopic", currTopic === "Numeracy" ? "Literacy" : "Numeracy");
  };

  useEffect(() => {
    // resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [mapRef]);

  useEffect(() => {
    // Trigger the flat animation after a delay (e.g., 1 second)
    const timer = setTimeout(() => {
      setIsFlat(true);
    }, 0);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  useEffect(() => {
    // Trigger the flat animation after a delay (e.g., 1 second)
    const timer = setTimeout(() => {
      resizeHandler();
      setAnimationDone(true);
    }, 1005);
    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  const onMarkerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopup(!popup);
    const target = e.target as HTMLButtonElement;
    setLocAndWeek({ loc: target.dataset.loc || "unknown", week: target.dataset.week || "unknown" });
  };

  return (
    <>
      <GameMapContainer>
        <GameMapSubwrapper style={{ transform: isFlat ? "rotateX(0deg)" : "rotateX(40deg)" }}>
          <GameMap
            ref={mapRef}
            src={
              currTopic === "Numeracy"
                ? "https://ik.imagekit.io/jbyap95/pixel-map-no-bg.png"
                : "https://ik.imagekit.io/jbyap95/Map_no%20shadow.png?updatedAt=1729330471856"
            }
            alt="lisburn-map"
          />

          {animationDone &&
            tiles.map((tile, index) => (
              <Marker
                activeDate={gameData.num[tile.week].activeDate}
                coordinate={{
                  x: width / 2 + (width / 50) * tile.x,
                  y: height / 2 + (height / 50) * tile.y,
                }}
                tileData={tile}
                clickHandler={(e) => onMarkerClick(e)}
                key={index}
              />
            ))}
        </GameMapSubwrapper>
      </GameMapContainer>
      {popup && <PopupCard locAndWeekData={locAndWeek} onClose={() => setPopup(false)} />}
      {numberOfCourses > 1 && (
        <ChangeMapArrow onClick={handleChangeMap}>
          <ChevronRight />
        </ChangeMapArrow>
      )}
    </>
  );
}
