import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";

export default function PopupCard({
  title,
  clickHandler,
}: {
  title: string;
  clickHandler: () => void;
}) {
  return (
    <div className="pop">
      <Header1>{title}</Header1>
      <img
        src="https://ik.imagekit.io/jbyap95/tr:w-200/sam_anim03.gif?updatedAt=1729092923412"
        alt="sam-logo"
        width={"100%"}
      />
      <div style={{ textAlign: "center", width: "inherit", padding: "0 1em" }}>
        <PopupButton>Attempt</PopupButton>
        <div style={{ padding: "1em 0 0 0" }}>Current Attempt</div>
      </div>
      <CloseButton onClick={clickHandler}>
        <X size={"2em"} strokeWidth={4} color="#e5e5e5" />
      </CloseButton>
    </div>
  );
}
