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
  color: #e5e5e5;
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
    animation: ${pulse} 2s infinite;
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
  font-size: 1.5em;
  text-align: center;
`;

export const Header2 = styled.h2`
  margin: 0px;
  font-weight: lighter;
  text-align: center;
  font-size: 1.25rem;
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
