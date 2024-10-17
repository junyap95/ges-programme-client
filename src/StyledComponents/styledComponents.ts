import styled from "styled-components";

export const MarkerWrapper = styled.button`
  background-color: #f5a039;
  position: absolute;
  font-weight: 600;
  font-size: 0.8em;
  transform: "translate(-50%, -50%)";
  padding: 0.5em;

  border: 2px solid #333333;
  border-radius: 1em;
  box-shadow: 0 0.4em 0 0 #333333;
  drop-shadow: 0 2rem 0 #333333;

  &:hover {
    background-color: #f58439;
    cursor: pointer;
  }

  &:active {
    background-color: #f58439;
    cursor: pointer;
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px);
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
  position: fixed;
  top: 105%;
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

  border: 1px solid #333333;
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
`;
export const FootBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  color: #333333;
  align-items: center;
  width: 100%;
  border: 1px solid red;
  padding: 1em;

  bottom: 0;
  margin: 0;
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
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const MapWrapper = styled.div`
  height: 100%;
  position: relative;
`;
