import { useState } from "react";
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

export default function MapContainer() {
  const [avatar, setAvatar] = useState(
    "https://ik.imagekit.io/jbyap95/sam.png?updatedAt=1729092924046"
  );
  const [avatarPopup, setAvatarPopup] = useState(false);

  const handleAvatar = () => {
    setAvatarPopup(!avatarPopup);
    console.log("avatar clicked");
  };

  return (
    <GameContainer>
      <NavBar>
        <div style={{ height: "100%" }}>
          <img
            src="https://ik.imagekit.io/jbyap95/studyseed-logo-stroke.png?updatedAt=1729092924066"
            alt="studyseed-logo"
            // width={"100%"}
            height={"150%"}
          />
        </div>
        <NavElement>
          <Trophy size={"2.5rem"} strokeWidth={"1.5px"} />
          <AvatarContainer onClick={handleAvatar}>
            <AvatarImage
              src="https://ik.imagekit.io/jbyap95/sam.png?updatedAt=1729092924046"
              alt="user-avatar"
            />
          </AvatarContainer>
        </NavElement>
      </NavBar>
      {avatarPopup && <AvatarPopup title="Pick An Avatar" clickHandler={handleAvatar} />}

      <Map />

      <FootBar>
        <div>Star x 10</div>
        <div>LOGOUT</div>
      </FootBar>
    </GameContainer>
  );
}
