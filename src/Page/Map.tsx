import { useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";
import styled from "styled-components";
import { MapWrapper } from "../StyledComponents/styledComponents";

const tiles = [
  { week: "WEEK 1", x: 3, y: 2, loc: "LISBURN" },
  { week: "WEEK 2", x: 2, y: 4, loc: "DRUMBO" },
  { week: "WEEK 3", x: 5, y: 6, loc: "DUNDONALD" },
];

export default function Map() {
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
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [mapRef]);

  const onMarkerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Marker clicked", e);
    setPopup(!popup);
    const target = e.target as HTMLButtonElement;
    setCurrentLoc(target.dataset.loc || "unknown");
  };

  console.log("width", width, "height", height);

  return (
    <>
      <MapWrapper>
        <img
          src="https://ik.imagekit.io/jbyap95/Lisburn_and_Castlereagh_Lisburn_North_highlight.svg.png?updatedAt=1729081265923"
          alt="map-of-lisburn"
          onLoad={resizeHandler}
          style={{ width: "100%", height: "100%", display: "block" }}
          ref={mapRef}
        />
        {width > 0 &&
          height > 0 &&
          tiles.map((tile, index) => (
            <Marker
              coordinate={{ x: (width * tile.x) / 10, y: (height * tile.y) / 10 }}
              tileData={tile}
              clickHandler={(e) => onMarkerClick(e)}
              key={index}
            />
          ))}
        {popup && (
          <>
            <Backdrop />
            <PopupCard title={currentLoc} clickHandler={() => setPopup(false)} />
          </>
        )}
      </MapWrapper>
    </>
  );
}
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1rem);
  z-index: 5;
  pointer-events: none;
`;
