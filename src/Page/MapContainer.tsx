import { useCallback, useContext, useEffect, useState } from "react";
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
import { fetchGameData } from "../clientConstants";
import { AuthContext } from "../Context/AuthContext";

export default function MapContainer() {
  const context = useContext(AuthContext);
  const [avatarPopup, setAvatarPopup] = useState(false);
  const [gameData, setGameData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleAvatarPopup = useCallback(() => {
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
  }, []);

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
          <AvatarContainer onClick={handleAvatarPopup}>
            <AvatarImage
              src={context?.userProfile.avatar || "https://ik.imagekit.io/jbyap95/favicon3.png"}
              alt="user-avatar"
            />
          </AvatarContainer>
          {avatarPopup && <AvatarPopup title="Pick An Avatar" clickHandler={handleAvatarPopup} />}
        </NavElement>
      </NavBar>

      <Map gameData={gameData} />

      <FootBar>
        <div>{context?.userProfile.username || "Username"}</div>
        <div>LOGOUT</div>
      </FootBar>
    </GameContainer>
  );
}
