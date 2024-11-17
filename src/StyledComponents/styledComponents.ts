import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1) translate(-50%, -50%);
  }
  50% {
    transform: scale(1.1) translate(-50%, -50%);
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
  }
`;

// background-color: #f5a039;
export const MarkerWrapper = styled.button`
  background-color: #3380fc;
  color: #f5f5f5;
  position: absolute;
  font-weight: 600;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  padding: 1em 0.5em;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border: 2px solid #333333;
  border-radius: 0.3em;
  box-shadow: 0 0.4em 0 0 #333333;

  &:active {
    background-color: #f58439;
    cursor: pointer;
    box-shadow: 0px 0.2em 0px 0px #333333;
    /* add transform here so on marker click doesn't displace its position */
    transform: translateY(0.2em) translate(-50%, -50%);
  }

  &.active {
    animation: ${pulse} 3s infinite;
    transition: all 0.2s ease;
    /* transform: translate(-50%, -50%); */
    /* transform-origin: center; */
  }
`;

export const PopupButton = styled.button`
  background-color: #3380fc;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  padding: 0.5rem;
  color: #f5f5f5;

  border: 2px solid #333333;
  border-radius: 1em;
  box-shadow: 0px 6px 0px 0px #333333;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &:active {
    cursor: pointer;
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 100%;
  width: 50%;
  background-color: #f5394c;
  padding: 0.5rem;
  border: 2px solid #333333;
  border-radius: 1em;
  box-shadow: 0px 6px 0px 0px #333333;

  cursor: pointer;

  &:active {
    background-color: #f5394c;
    cursor: pointer;
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;

export const Header1 = styled.div`
  margin: 0px;
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
`;

export const Header2 = styled.h2`
  margin: 0px;
  font-weight: lighter;
  text-align: center;
  font-size: 1.5rem;
`;

export const AvatarImage = styled.img`
  height: 120%;
  /* object-fit: contain; */
  /* position: absolute; */
  transform: translate(-3%);
  background-color: #f5f5f5;
`;

export const LogoutPopupContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.3rem);
  pointer-events: auto;
  width: 100vw;
  top: 0%;
  left: 0%;
  z-index: 4;
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: auto;
  box-shadow: 0 0.5em 0 #333333;
  border: 1px solid black;
  border-radius: 1em;

  background-color: rgba(255, 255, 255, 0.75);

  padding: 2rem 6rem;
  gap: 2rem;
`;

export const FillInputs = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3em;
  font-size: 1em;
  text-align: center;
  caret-color: #2b496d;
  color: #333333;
  border: 0px solid #3380fc;
  border-bottom: 2px solid #2b496d;
  background-color: transparent;

  &::placeholder {
    color: #2b496d;
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const LoginFormWrapper = styled.div<{
  $isLoading?: boolean;
}>`
  position: relative;
  top: 10%;
  width: 25rem;
  padding: 3rem;
  border: 2px solid #3380fc;
  height: 14rem;

  background-color: rgba(229, 229, 229, 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0px solid rgba(255, 255, 255, 0.1);

  ${(props) => props.$isLoading && `visibility: hidden;`}
`;

export const ErrorMsg = styled.small`
  position: absolute;
  top: -50%;
  left: 0%;
  right: 0%;
  color: #f5394c;
  white-space: nowrap;
`;

export const LoginBtn = styled.button<{ $btnActive?: boolean }>`
  background-color: ${(props) => (props.$btnActive ? "#3380fc" : "grey")};
  pointer-events: ${(props) => (props.$btnActive ? "auto" : "none")};
  color: #f5f5f5;
  position: relative;
  font-weight: 600;
  transform-origin: center;
  font-size: 1em;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border: 2px solid #333333;
  border-radius: 0.3em;
  box-shadow: 0 0.4em 0 0 #333333;
  width: 100%;
  height: 3.5em;
`;
