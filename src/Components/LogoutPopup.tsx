import { X } from "lucide-react";
import {
  LogoutPopupContainer,
  Popup,
  Header1,
  PopupButton,
  CloseButton,
} from "../StyledComponents/styledComponents";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function LogoutPopup({ handleLogoutPopup }: { handleLogoutPopup: () => void }) {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context?.signOut();
    window.location.href = "/";
  };

  return (
    <LogoutPopupContainer>
      <Popup>
        <Header1>Ready To Log Off?</Header1>
        <PopupButton style={{ width: "20rem" }} onClick={handleLogout}>
          Goodbye!
        </PopupButton>
        <CloseButton style={{ width: "fit-content" }} onClick={handleLogoutPopup}>
          <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
        </CloseButton>
      </Popup>
    </LogoutPopupContainer>
  );
}
