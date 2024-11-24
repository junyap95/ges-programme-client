import { CloseButton, Header1, Header2 } from "../StyledComponents/styledComponents";
import { X } from "lucide-react";
import Slider from "react-slick";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { SAM_OCCUPATION1, SAM_OCCUPATION2, SAM_OCCUPATION3 } from "../utils/image-constants";

const avatars = [
  {
    samName: "Architect",
    url: SAM_OCCUPATION1,
  },
  {
    samName: "Astronaut",
    url: SAM_OCCUPATION2,
  },
  {
    samName: "Teacher",
    url: SAM_OCCUPATION3,
  },
];

const settings = {
  centerPadding: "10px",
  autoplay: false,
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
