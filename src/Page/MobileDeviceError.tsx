import styled from "styled-components";

export default function MobileDeviceError() {
  return (
    <Error>
      <img
        src="https://ik.imagekit.io/jbyap95/gamified%20learning%20programme.png?updatedAt=1730298460178"
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
        src="https://ik.imagekit.io/jbyap95/sam_constructor01_shadow.png?updatedAt=1730139103345"
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
