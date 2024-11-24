import { useContext } from "react";
import { LogOut } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { Footer, LogoutIcon, TopicTag } from "../StyledComponents/styledForNavAndFooter";
import { useMediaQuery } from "../hooks/useMedia";

export default function FooterBar({ handleLogoutPopup }: { handleLogoutPopup: () => void }) {
  const context = useContext(AuthContext);
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return (
    <Footer>
      <div
        style={{
          display: "flex",
          flexDirection: isLandscape ? "column" : "row",
          maxWidth: "100%",
          fontSize: "0.8em",
          color: "#e5e5e5",
          filter: "drop-shadow(0 0.15em 0 rgba(43, 73, 109, 1))",
          pointerEvents: "none",
          justifyContent: "center",
          alignItems: isLandscape ? "flex-start" : "center",
          gap: "0.5em",
        }}
      >
        {context?.userProfile.username || "Username"}{" "}
        <TopicTag>{context?.currTopic?.toUpperCase()}</TopicTag>
      </div>

      <LogoutIcon onClick={handleLogoutPopup}>
        <LogOut color="#e5e5e5" />
      </LogoutIcon>
    </Footer>
  );
}
