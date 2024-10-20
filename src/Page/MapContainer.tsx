import { useCallback, useEffect, useState } from "react";
import {
  AvatarContainer,
  AvatarImage,
  FootBar,
  GameContainer,
  NavBar,
  NavElement,
} from "../StyledComponents/styledComponents";
import Map from "./Map";
import { Trophy } from "lucide-react";
import AvatarPopup from "../Components/AvatarPopUp";
import { useLocation } from "react-router-dom";
import { fetchGameData } from "../clientConstants";

export default function MapContainer() {
  const { state } = useLocation(); // user profile data is passed from the Login page
  const { result } = state;
  // should not pass user data here, instead fetch it from the server

  const [avatar, setAvatar] = useState(result.avatar);
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [gameData, setGameData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleAvatar = useCallback(() => {
    setAvatarPopup(!avatarPopup);
  }, [avatarPopup]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchGameData();
        setGameData(data);
      } catch (err) {
        //TODO: handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [result.avatar]);

  console.log("c avatr", avatar);
  console.log("c gameData", gameData);
  if (loading) return <div>Loading...</div>;
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
            }}
          />
        </div>
        <NavElement>
          <Trophy size={"2.5rem"} strokeWidth={"1.5px"} />
          <AvatarContainer onClick={handleAvatar}>
            <AvatarImage src={result && avatar} alt="user-avatar" />
          </AvatarContainer>
          {avatarPopup && <AvatarPopup title="Pick An Avatar" clickHandler={handleAvatar} />}
        </NavElement>
      </NavBar>

      <Map gameData={gameData} />

      <FootBar>
        <div>Star x 10</div>
        <div>LOGOUT</div>
      </FootBar>
    </GameContainer>
  );
}
