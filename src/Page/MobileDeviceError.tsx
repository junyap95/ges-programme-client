import styled from "styled-components";
import { GES_STUDYSEED_LOGO, SAM_CONSTRUCTION } from "../utils/image-constants";

export default function MobileDeviceError() {
  return (
    <Error>
      <img
        src={GES_STUDYSEED_LOGO}
        alt="studyseed-logo"
        style={{
          width: "15rem",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div
        style={{
          textAlign: "center",
          maxWidth: "80svw",
        }}
      >
        This device is not supported. Please use a tablet or a computer browser.
      </div>

      <img
        src={SAM_CONSTRUCTION}
        alt="studyseed-sam"
        style={{
          width: "30%",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </Error>
  );
}

const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100svw;
  height: 100svh;
  background: radial-gradient(circle, rgba(229, 229, 229, 1) 0%, rgba(103, 143, 201, 1) 70%);
`;
