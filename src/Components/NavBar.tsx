import { Trophy } from "lucide-react";
import { AvatarImage } from "../StyledComponents/styledComponents";
import { transformImageUrl } from "../utils/helperFunctions";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { AvatarContainer, Nav, NavElement } from "../StyledComponents/styledForNavAndFooter";

export default function NavBar({
  handleAvatarPopup,
  handleRecordsPopup,
}: {
  handleAvatarPopup: () => void;
  handleRecordsPopup: () => void;
}) {
  const context = useContext(AuthContext);

  return (
    <Nav>
      <div style={{ height: "150%" }}>
        <img
          src="https://ik.imagekit.io/jbyap95/studyseed-logo-blue-shadow.png"
          alt="studyseed-logo"
          style={{
            filter: " drop-shadow(0 0.1em 0 rgba(43, 73, 109, 1)) ",
            pointerEvents: "none",
            objectFit: "contain",
            maxHeight: "100%",
            maxWidth: "100%",
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
              transformImageUrl(context?.userProfile.avatar as string, "tr:h-200,fo-face:r-max") ||
              "https://ik.imagekit.io/jbyap95/favicon3.png"
            }
            alt="user-avatar"
          />
        </AvatarContainer>
      </NavElement>
    </Nav>
  );
}
