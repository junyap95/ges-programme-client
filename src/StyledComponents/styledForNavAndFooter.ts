import styled from "styled-components";

export const Nav = styled.nav`
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

export const NavElement = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const AvatarContainer = styled.div`
  height: 3em;
  width: 3em;
  border: 2px solid #333333;
  border-radius: 3em;
  cursor: pointer;
  overflow: hidden;
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

export const Footer = styled.footer`
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

export const LogoutIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5394c;
  padding: 0.5rem;
  border: 2px solid #333333;
  border-radius: 3em;
  box-shadow: 0px 6px 0px 0px #333333;
  cursor: pointer;
  &:active {
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;

export const TopicTag = styled.button`
  color: #e5e5e5;
  font-weight: 600;
  font-size: 0.8em;
  background-color: rgba(229, 229, 229, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(5px);
  border: 0px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
  border-radius: 1em;
  cursor: pointer;

  &:active {
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;
