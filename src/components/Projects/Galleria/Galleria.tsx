import { useEffect, useState } from "react";

interface GalleriaProps {
  imgURL: { imgURL: string; imgAlt: string }[];
}

export const Galleria = ({ imgURL }: GalleriaProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<number | null>(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const id = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 5000);

      setTimeID(id as unknown as number);

      return () => clearTimeout(id);
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= imgURL.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return imgURL.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {imgURL.map((item, index) => (
        <div
          className={
            "slider__item " +
            (index === activeIndex ? "slider__item-active" : "")
          }
          key={index}
        >
          <img src={item.imgURL} alt={item.imgAlt} />
        </div>
      ))}

      <div className="container__slider__links">
        {imgURL.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
};

export default Galleria;
