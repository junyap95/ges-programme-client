import React, { useContext, useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";
import { tiles } from "../constants";
import { ChevronRight } from "lucide-react";
import { AvatarContainer } from "../StyledComponents/styledComponents";
import { MapTopic } from "./MapContainer";
import { AuthContext } from "../Context/AuthContext";

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
    }, 1200);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  const onMarkerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopup(!popup);
    const target = e.target as HTMLButtonElement;
    setLocAndWeek({ loc: target.dataset.loc || "unknown", week: target.dataset.week || "unknown" });
  };

  return (
    <div
      style={{
        width: "100svw",
        height: "100svh",
        zIndex: popup ? 4 : 2,
        position: "relative",
      }}
    >
      {numberOfCourses > 1 && (
        <AvatarContainer
          style={{
            height: "fit-content",
            width: "fit-content",
            position: "absolute",
            padding: "0.2em",
            zIndex: 5,
            right: "1em",
            top: "50%",
            backgroundColor: "#f5a039",
          }}
          onClick={handleChangeMap}
        >
          <ChevronRight />
        </AvatarContainer>
      )}

      <div
        style={{
          height: "100%",
          zIndex: -4,
          display: "flex",
          justifyContent: "center",
          // border: "1px solid red",
          background:
            currTopic === "Numeracy"
              ? "radial-gradient(circle, rgba(229, 229, 229, 1) 0%, rgba(103, 143, 201, 1) 70%)"
              : "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(103, 180, 201, 1) 80%)",
          perspective: "500px",
        }}
      >
        <div
          style={{
            // border: "1px solid green",
            height: "100%",
            width: "fit-content",
            position: "relative",
            padding: "4rem",
            transform: isFlat ? "rotateX(0deg)" : "rotateX(40deg)",
            transition: "all 1s ease-in-out",
            transformStyle: "preserve-3d",
          }} /** This div is needed to contain the img and the markers. Because Marker's absolute position is only affected by its parent, not siblings */
        >
          <img
            ref={mapRef}
            src={
              currTopic === "Numeracy"
                ? "https://ik.imagekit.io/jbyap95/pixel-map-no-bg.png"
                : "https://ik.imagekit.io/jbyap95/Map_no%20shadow.png?updatedAt=1729330471856"
            }
            alt="lisburn-map"
            style={{
              height: "100%",
              pointerEvents: "none",
              filter: "drop-shadow(0 0.7em 0 rgba(0, 0, 0, 0.1))",
              userSelect: "none",
            }}
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
        </div>
      </div>

      {popup && (
        <div className="popContainer">
          <PopupCard locAndWeekData={locAndWeek} onClose={() => setPopup(false)} />
          <div className="backdrop" />
        </div>
      )}
    </div>
  );
}
