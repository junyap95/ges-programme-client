import styled from "styled-components";

export const GameMapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 3px dotted dodgerblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  perspective: 500px;
`;

export const GameMapSubwrapper = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  transition: all 1s ease-in-out;

  @media (orientation: portrait) {
    height: fit-content;
    width: 90%;
  }
  /* anything above 1024px, the map will be 100% height */
  @media (orientation: landscape) {
    height: 90%;
    width: fit-content;
  }
`;

export const GameMap = styled.img`
  pointer-events: none;
  user-select: none;
  object-fit: contain;
  filter: drop-shadow(0 0.7em 0 rgba(0, 0, 0, 0.1));

  @media (orientation: portrait) {
    height: auto;
    width: 100%;
  }

  @media (orientation: landscape) {
    height: 100%;
  }
`;

export const ChangeMapArrow = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  padding: 0.25em;
  z-index: 5;
  right: 1.25em;
  top: 50%;
  background-color: #f5a039;
  cursor: pointer;
  box-shadow: 0px 3px 0px 0px #333333;
  border-radius: 3em;
  border: 2px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    box-shadow: 0px 3px 0px 0px #333333;
    transform: translateY(2px) scale(0.9);
  }
`;
