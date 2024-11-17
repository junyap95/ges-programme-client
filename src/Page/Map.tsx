import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";
import { tiles } from "../utils/tiles-coordinate";
import { ChevronRight } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import {
  ChangeMapArrow,
  GameMap,
  GameMapContainer,
  GameMapSubwrapper,
} from "../StyledComponents/styledForMap";
import { MapTopic, Topic } from "../utils/type-constants";
import { LITERACY_MAP, NUMERACY_MAP } from "../utils/image-constants";
import { useDelay } from "../hooks/useDelay";

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
};

export default function Map({ gameData }: MapProps) {
  const context = useContext(AuthContext);
  const numberOfCourses = context?.userProfile.course.length as number;
  const mapRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [popup, setPopup] = useState(false);
  const [locAndWeek, setLocAndWeek] = useState({ loc: "", week: "" });
  const [isFlat, setIsFlat] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const { elementLoading } = useDelay();

  const resizeHandler = () => {
    if (mapRef.current) {
      const dimensions = mapRef.current.getBoundingClientRect();
      setWidth(dimensions.width);
      setHeight(dimensions.height);
    }
  };

  const handleChangeMap = useCallback(() => {
    const currentTopic = context?.currTopic;
    console.log("topic in handler", currentTopic);
    context?.setCurrTopic((prevTopic) =>
      prevTopic === Topic.NUMERACY ? Topic.LITERACY : Topic.NUMERACY
    );
    localStorage.setItem(
      "currTopic",
      currentTopic === Topic.NUMERACY ? Topic.LITERACY : Topic.NUMERACY
    );
  }, [context]);

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
            src={context?.currTopic === Topic.NUMERACY ? NUMERACY_MAP : LITERACY_MAP}
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
      {popup && (
        <PopupCard
          locAndWeekData={locAndWeek}
          onClose={() => setPopup(false)}
          topic={context?.currTopic as MapTopic}
        />
      )}
      {numberOfCourses > 1 && !elementLoading && (
        <ChangeMapArrow onClick={handleChangeMap}>
          <ChevronRight />
        </ChangeMapArrow>
      )}
    </>
  );
}
