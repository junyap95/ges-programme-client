import styled, { keyframes } from "styled-components";
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
    <PopupCardWrapper>
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
    </PopupCardWrapper>
  );
}

const flipIn = keyframes`
  from {
    transform: rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const PopupCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #000;
  border-radius: 1em;
  width: 20rem;
  height: 30rem;
  padding: 1em;
  box-shadow: 0px 8px 0px 0px #333333;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  position: fixed;
  margin: auto;
  inset: 0;
  z-index: 10;
  user-select: none;
  animation: ${flipIn} 0.25s ease-out;
`;
