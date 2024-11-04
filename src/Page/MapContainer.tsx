import { useCallback, useContext, useEffect, useState } from "react";
import {
  AvatarContainer,
  AvatarImage,
  FootBar,
  GameContainer,
  Header1,
  Header2,
  NavBar,
  NavElement,
} from "../StyledComponents/styledComponents";
import Map from "./Map";
import { Trophy } from "lucide-react";
import AvatarPopup from "../Components/AvatarPopUp";
import { fetchGameData } from "../helperFunctions";
import { AuthContext } from "../Context/AuthContext";
import styled from "styled-components";
import { LogOut } from "lucide-react";
import LogoutPopup from "../Components/LogoutPopup";
import RecordsPopup from "../Components/RecordsPopup";
import LoadingFullPageAnimation from "../Components/LoadingFullPageAnimation";

function transformImageUrl(url: string, transformationString: string) {
  // Check if the URL contains 'imagekit.io'
  const imageKitMarker = "imagekit.io/jbyap95/";
  // Find the position where the transformation should be inserted
  const position = url.indexOf(imageKitMarker) + imageKitMarker.length;
  // Insert the transformation string at the correct position in the URL
  const transformedUrl = url.slice(0, position) + transformationString + "/" + url.slice(position);
  return transformedUrl;
}
export type MapTopic = "Numeracy" | "Literacy";

export default function MapContainer() {
  const context = useContext(AuthContext);
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [recordsPopup, setRecordsPopup] = useState(false);
  const [gameData, setGameData] = useState({});
  const [loading, setLoading] = useState(true);
  const isLoggedin = localStorage.getItem("isSignedIn");
  const [currTopic, setCurrTopic] = useState<MapTopic>("Numeracy");

  const handleAvatarPopup = useCallback(() => {
    setAvatarPopup(!avatarPopup);
  }, [avatarPopup]);

  const handleLogoutPopup = useCallback(() => {
    setLogoutPopup(!logoutPopup);
  }, [logoutPopup]);

  const handleRecordsPopup = useCallback(() => {
    setRecordsPopup(!recordsPopup);
  }, [recordsPopup]);

  const handleLogout = () => {
    context?.signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const currentTopic = context?.userProfile.course[0] as MapTopic;
        const data = await fetchGameData();
        setGameData(data);
        setCurrTopic(currentTopic);
        localStorage.setItem("gameData", JSON.stringify(data));
        localStorage.setItem("currTopic", currentTopic);
      } catch (err) {
        console.error("Error fetching game data in MapContainer:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };
    fetchData();
  }, [context?.userProfile.course]);

  if (loading) return <LoadingFullPageAnimation />;

  if (!isLoggedin && !logoutPopup) {
    return (
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", gap: "1em" }}>
          <Header1>Not Signed In</Header1>
          <Header2>Return to Login</Header2>
          <LogoutIcon onClick={handleLogout}>
            <LogOut color="#e5e5e5" />
          </LogoutIcon>
        </div>
      </div>
    );
  }

  return (
    <GameContainer>
      <NavBar>
        <div style={{ height: "150%" }}>
          <img
            src="https://ik.imagekit.io/jbyap95/studyseed-logo-blue-shadow.png"
            alt="studyseed-logo"
            height={"100%"}
            style={{
              filter: " drop-shadow(0 0.1em 0 rgba(43, 73, 109, 1)) ",
              pointerEvents: "none",
            }}
          />
        </div>
        <NavElement>
          <AvatarContainer style={{ backgroundColor: "#f5a039" }} onClick={handleRecordsPopup}>
            <Trophy color="#e5e5e5" />
          </AvatarContainer>

          <AvatarContainer onClick={handleAvatarPopup}>
            <AvatarImage
              src={
                transformImageUrl(
                  context?.userProfile.avatar as string,
                  "tr:h-200,fo-face:r-max"
                ) || "https://ik.imagekit.io/jbyap95/favicon3.png"
              }
              alt="user-avatar"
            />
          </AvatarContainer>
          {avatarPopup && <AvatarPopup title="Pick An Avatar" clickHandler={handleAvatarPopup} />}
        </NavElement>
      </NavBar>

      <Map gameData={gameData} currTopic={currTopic} setCurrTopic={setCurrTopic} />

      <FootBar>
        <div
          style={{
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#e5e5e5",
            filter: "drop-shadow(0 0.15em 0 rgba(43, 73, 109, 1))",
            pointerEvents: "none",
          }}
        >
          {context?.userProfile.username || "Username"} | {currTopic}
        </div>

        <div>
          <LogoutIcon onClick={handleLogoutPopup}>
            <LogOut color="#e5e5e5" />
          </LogoutIcon>
        </div>
      </FootBar>
      {logoutPopup && <LogoutPopup handleLogoutPopup={handleLogoutPopup} />}
      {recordsPopup && <RecordsPopup handleRecordsPopup={handleRecordsPopup} />}
    </GameContainer>
  );
}

export const LogoutIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5394c;
  padding: 0.5rem;
  border: 2px solid #333333;
  border-radius: 1em;
  box-shadow: 0px 6px 0px 0px #333333;
  drop-shadow: 0 2rem 0 #333333;
  cursor: pointer;

  &:active {
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;
