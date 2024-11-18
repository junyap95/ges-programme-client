import { SAM_LOADING } from "../utils/image-constants";

export default function LoadingFullPageAnimation() {
  return (
    <div className="login-container">
      <div
        style={{
          position: "absolute",
          margin: "auto",
          inset: 0,
          height: "fit-content",
        }}
      >
        <img
          className="sam-loading"
          src={SAM_LOADING}
          alt="studyseed-sam"
          style={{
            width: "20%",
            position: "absolute",
            margin: "auto",
            inset: 0,
          }}
        />
      </div>
    </div>
  );
}
