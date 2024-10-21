import styled, { keyframes } from "styled-components";
import { CloseButton, Header1, PopupButton } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import Slider from "react-slick";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const avatars = [
  {
    samName: "Architect",
    url: "https://ik.imagekit.io/jbyap95/tr:w-200/sam_period.png?updatedAt=1729092923546",
  },
  {
    samName: "Astronaut",
    url: "https://ik.imagekit.io/jbyap95/tr:w-200/sam_colon.png",
  },
  {
    samName: "Teacher",
    url: "https://ik.imagekit.io/jbyap95/tr:w-200/sam_semicolon.png?updatedAt=1729092923733",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <ChevronRight size={"2em"} strokeWidth={4} color="#3380fc" />,
  prevArrow: <ChevronLeft size={"2em"} strokeWidth={4} color="#3380fc" />,
};

type AvatarPopUpProps = {
  title: string;
  clickHandler: () => void;
};

export default function AvatarPopup({ title, clickHandler }: AvatarPopUpProps) {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
    console.log(imgRefs.current[index]?.id);
  };

  return (
    <PopupContainer>
      <AvatarPopupWrapper>
        <Header1>{title}</Header1>
        <div style={{ width: "100%" }}>
          <Slider {...settings} afterChange={handleChange} centerMode={true}>
            {avatars.map((avatar, index) => (
              <div className="test" key={index}>
                <img
                  id={avatar.samName}
                  src={avatar.url}
                  alt="sam-logo"
                  ref={(el) => (imgRefs.current[index] = el)}
                />
              </div>
            ))}
          </Slider>
        </div>

        <PopupButton>{imgRefs.current[currentIndex]?.id}</PopupButton>

        <CloseButton onClick={clickHandler}>
          <X size={"2em"} strokeWidth={4} color="#f5f5f5" />
        </CloseButton>
      </AvatarPopupWrapper>
    </PopupContainer>
  );
}

const flipIn = keyframes`
  from {
    transform: rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const AvatarPopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1em;
  width: 30rem;
  height: 30rem;
  padding: 1em;
  position: relative;
  background-color: rgba(255, 255, 255, 0.7);
  top: 700%;
  left: -50%;
  user-select: none;
  animation: ${flipIn} 0.25s ease-out;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle), #f58439, #3380fc, #f58439);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    border-radius: 1.5em;
    animation: 5s spin linear infinite;
    box-shadow: 0 0.5em 0 0 #333333;
    z-index: -1;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  transform: translate(0%, -100%);
  z-index: 10;
`;
