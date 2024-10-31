import { TypeAnimation } from "react-type-animation";

// interface ExampleComponentProps {
//   fn: () => void;
// }

const IntroAutoType = () => {
  return (
    <TypeAnimation
      repeat={Infinity}
      sequence={[
        500,
        "LOADING FROM SERVER...",
        2500, // Waits 1s
        "FETCHING QUESTIONS...",
        2500,
        "DOUBLE-CHECKING ANSWERS...",
        2500,
        "GETTING READY...",
        2500,
        "GATHERING SOME TOUGH QUESTIONS...",
        2500,
        "PLEASE WAIT...",
        // () => {
        //   fn(); // Executes the callback function
        // },
      ]}
      wrapper="div"
      className="sc-gtLWhw cfMAra"
      speed={60}
      cursor={false}
      style={{
        margin: "0",
        fontWeight: "lighter",
        textAlign: "center",
        position: "absolute",
        fontSize: "1em",
        bottom: "20%",
        left: "0%",
        right: "0%",
        color: "#2b496d",
      }}
    />
  );
};

export default IntroAutoType;
