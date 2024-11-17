import { useCallback, useContext, useEffect, useState } from "react";
import Map from "./Map";
import AvatarPopup from "../Components/AvatarPopUp";
import { fetchGameData } from "../utils/network-functions";
import { AuthContext } from "../Context/AuthContext";
import { LogOut } from "lucide-react";
import LogoutPopup from "../Components/LogoutPopup";
import RecordsPopup from "../Components/RecordsPopup";
import LoadingFullPageAnimation from "../Components/LoadingFullPageAnimation";
import { Header1, Header2 } from "../StyledComponents/styledComponents";
import NavBar from "../Components/NavBar";
import FooterBar from "../Components/FooterBar";
import { LogoutIcon } from "../StyledComponents/styledForNavAndFooter";
import { GameContainer } from "../StyledComponents/styledForHome";
import { MapTopic, Topic } from "../utils/type-constants";

export default function Home() {
  const context = useContext(AuthContext);
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [recordsPopup, setRecordsPopup] = useState(false);
  const [gameData, setGameData] = useState({});
  const [loading, setLoading] = useState(true);
  const isLoggedin = localStorage.getItem("isSignedIn");

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
        localStorage.setItem("gameData", JSON.stringify(data));
        localStorage.setItem("currTopic", currentTopic);
      } catch (err) {
        console.error("Error fetching game data in MapContainer:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 0);
      }
    };
    fetchData();
  }, [context, context?.userProfile.course]);

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
    <GameContainer $currTopic={context?.currTopic}>
      <NavBar handleAvatarPopup={handleAvatarPopup} handleRecordsPopup={handleRecordsPopup} />
      <Map gameData={gameData} />
      <FooterBar handleLogoutPopup={handleLogoutPopup} />
      {avatarPopup && <AvatarPopup title="Pick An Avatar" clickHandler={handleAvatarPopup} />}
      {logoutPopup && <LogoutPopup handleLogoutPopup={handleLogoutPopup} />}
      {recordsPopup && <RecordsPopup handleRecordsPopup={handleRecordsPopup} />}
    </GameContainer>
  );
}
