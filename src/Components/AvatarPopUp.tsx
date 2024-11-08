import styled, { keyframes } from "styled-components";
import { CloseButton, Header1, Header2 } from "../StyledComponents/styledComponents";
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
  centerPadding: "10px",
  autoplay: true,
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
    console.log(imgRefs.current[index]?.id, currentIndex);
  };

  return (
    <div className="pop-container">
      <div className="pop-card">
        <Header1>Avatar</Header1>
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
        <br />
        <br />

        <Header2>Coming soon!</Header2>

        <CloseButton onClick={clickHandler}>
          <X size={"2em"} strokeWidth={4} color="#f5f5f5" />
        </CloseButton>
      </div>
    </div>
  );
}
