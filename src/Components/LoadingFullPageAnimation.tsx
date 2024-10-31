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
          src="https://ik.imagekit.io/jbyap95/sam_anim03.gif?updatedAt=1729092923412"
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
