import styled from "styled-components";
import { Topic } from "../utils/type-constants";

export const GameContainer = styled.div<{ $currTopic?: string }>`
  /* box-sizing: border-box; */
  /* border: 5px solid purple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100svh;
  width: 100svw;
  background: ${(props) =>
    props.$currTopic === Topic.NUMERACY
      ? "radial-gradient(circle, rgba(229, 229, 229, 1) 0%, rgba(103, 143, 201, 1) 70%)"
      : "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(100, 170, 190, 1) 70%)"};
`;
