import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// background-color: #f5a039;
export const MarkerWrapper = styled.button`
  background-color: #3380fc;
  color: #f5f5f5;
  position: absolute;
  font-weight: 600;
  transform-origin: center;
  padding: 1em 0.5em;
  transition: all 0.1s ease;
  cursor: pointer;
  border: 2px solid #333333;
  border-radius: 0.3em;
  box-shadow: 0 0.4em 0 0 #333333;

  &:active {
    background-color: #f58439;
    cursor: pointer;
    box-shadow: 0px 0.2em 0px 0px #333333;
    transform: translateY(0.2em);suuususu
  }

  &.active {
    animation: ${pulse} 2s infinite;
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
  drop-shadow: 0 2rem 0 #333333;

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
  drop-shadow: 0 2rem 0 #333333;
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

export const GameContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  color: #333333;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 0px solid red;
  z-index: 3;
`;

// export const MapWrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   z-index: 4;
// `;

export const FootBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  border: 0px solid red;
  padding: 1em;
  bottom: 0;
  margin: 0;
  z-index: 3;
`;

export const NavElement = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const AvatarContainer = styled.div`
  height: inherit;
  border: 2px solid #333333;
  border-radius: 1em;
  cursor: pointer;
  overflow: hidden;
  width: 3em;
  box-shadow: 0px 3px 0px 0px #333333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;

export const AvatarImage = styled.img`
  width: 200%;
  height: 100%;
  object-fit: cover;
  position: absolute;
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

  padding: 2rem 8rem;
  gap: 2rem;
`;
