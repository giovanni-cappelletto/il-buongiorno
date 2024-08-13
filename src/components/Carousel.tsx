import { ReactNode } from "react";
import Slider from "react-slick";
import { Data, DialogInfo } from "../App";
import getAssets from "../utils/getAssets";
import leftArrowIcon from "../assets/leftArrowIcon.svg";
import rightArrowIcon from "../assets/rightArrowIcon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({
  periodicals,
  setDialogInfo,
}: {
  periodicals: Data[];
  setDialogInfo: (dialogInfo: DialogInfo) => void;
}) => {
  const settings = {
    slidesToShow: 4,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Arrows type="nextArrow" />,
    prevArrow: <Arrows type="prevArrow" />,
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "-5px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "hsl(0, 0%, 85%)",
          borderRadius: "50px",
          border: "1px solid hsl(0, 0%, 85%)",
          marginInlineEnd: "10px",
          marginBlockStart: "5px",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {periodicals.map((periodical: Data, index: number): ReactNode => {
          return (
            <div key={index}>
              <a
                href={getAssets("pdf", periodical.year, periodical.month)}
                download={`Giornalino di ${periodical.month}`}
                target="_blank"
              >
                <img
                  src={getAssets(
                    "thumbnails",
                    periodical.year,
                    periodical.month
                  )}
                  alt="Copertina"
                  className="cover"
                />
              </a>
              <span
                className="material-symbols-outlined info_icon side_image__info_icon"
                onClick={() => {
                  setDialogInfo({ isOpen: true, periodical });
                }}
              >
                info
              </span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const Arrows = ({
  type,
  className,
  onClick,
}: {
  type: string;
  className?: string;
  onClick?: () => void;
}) => {
  const source = type === "prevArrow" ? leftArrowIcon : rightArrowIcon;

  return (
    <img
      src={source}
      alt="Freccia"
      className={`${className} slider__icon`}
      onClick={onClick}
    />
  );
};

export default Carousel;
