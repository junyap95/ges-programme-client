import { useEffect, useRef, useState } from "react";
import Marker from "../Components/Marker";
import PopupCard from "../Components/PopupCard";

const tiles = [
  { week: "WEEK 1", x: -50, y: 200, loc: "LISBURN" },
  { week: "WEEK 2", x: -300, y: -200, loc: "DRUMBO" },
  { week: "WEEK 3", x: 20, y: -60, loc: "DUNDONALD" },
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
    resizeHandler();
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
    <div style={{ width: "100vw", height: "100vh", zIndex: 0 }}>
      {width > 0 &&
        height > 0 &&
        tiles.map((tile, index) => (
          <Marker
            coordinate={{ x: width / 2 + tile.x, y: height / 2 + tile.y }}
            tileData={tile}
            clickHandler={(e) => onMarkerClick(e)}
            key={index}
          />
        ))}
      <div
        onLoad={resizeHandler}
        style={{
          position: "relative",
          height: "inherit",
          zIndex: -4,
        }}
      >
        <img
          ref={mapRef}
          src="https://ik.imagekit.io/jbyap95/highlighted-map.png"
          alt="lisburn-map"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
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
