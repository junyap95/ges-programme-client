import { useContext } from "react";
import { LogOut } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { Footer, LogoutIcon, TopicTag } from "../StyledComponents/styledForNavAndFooter";

export default function FooterBar({
  currTopic,
  handleLogoutPopup,
}: {
  currTopic: string;
  handleLogoutPopup: () => void;
}) {
  const context = useContext(AuthContext);

  return (
    <Footer>
      <div
        style={{
          maxWidth: "100%",
          fontSize: "0.8em",
          color: "#e5e5e5",
          filter: "drop-shadow(0 0.15em 0 rgba(43, 73, 109, 1))",
          pointerEvents: "none",
        }}
      >
        {context?.userProfile.username || "Username"}{" "}
        <TopicTag>{currTopic?.toUpperCase()}</TopicTag>
      </div>

      <LogoutIcon onClick={handleLogoutPopup}>
        <LogOut color="#e5e5e5" />
      </LogoutIcon>
    </Footer>
  );
}
