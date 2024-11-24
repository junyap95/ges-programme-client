import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 0 5em;
  width: 100%;

  @media (orientation: portrait) {
    padding: 5em 0;
  }
`;

export const LoginWrapper = styled.div`
  background: radial-gradient(circle, rgba(229, 229, 229, 1) 0%, rgba(103, 143, 201, 1) 75%);
  height: 100svh;
  position: relative;
`;

export const LoginSubWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;
  width: 50svw;
  margin: auto;
  inset: 0;
  gap: 1em;
  background-color: rgba(229, 229, 229, 0.3);
  /* border-radius: 1rem; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (orientation: portrait) {
    width: 60svw;
  }
`;

export const LoginFormWrapper = styled.form<{
  $isLoading?: boolean;
}>`
  position: relative;
  top: 10%;
  width: clamp(10rem, 30vw, 25rem);
  height: clamp(10rem, 30vh, 14rem);
  padding: 2rem 1.5rem;
  background-color: rgba(229, 229, 229, 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.5px solid rgba(255, 255, 255, 1); //test

  // subn
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;

  ${(props) => props.$isLoading && `visibility: hidden;`}

  @media (orientation: portrait) {
    height: clamp(10rem, 30vw, 25rem);
    width: clamp(10rem, 30vh, 14rem);
  }
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
  font-size: clamp(0.8em, 1vw, 1em);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border: 2px solid #333333;
  border-radius: 0.3em;
  box-shadow: 0 0.4em 0 0 #333333;
  width: 100%;
  height: 3.5em;
`;

export const FillInputs = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3em;
  font-weight: 600;
  font-size: clamp(0.8em, 1.5vw, 1em);
  text-align: center;
  caret-color: #2b496d;
  color: #333333;
  border: 0px solid #3380fc;
  border-bottom: 2px solid #2b496d;
  background-color: transparent;

  &::placeholder {
    color: #2b496d;
    font-size: clamp(0.8em, 1.5vw, 1em);
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
