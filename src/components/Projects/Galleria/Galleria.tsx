import { useEffect, useState } from "react";
import "./Galleria.scss";
import Nav from "../../Nav/Nav";


interface GalleriaProps {
  imgURL: { imgURL: string; imgAlt: string }[];
}

export const Galleria = ({ imgURL }: GalleriaProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeID, setTimeID] = useState<number | null>(null);

  useEffect(() => {
    console.log("Setting new timeout for auto-sliding");
    
    const id = setTimeout(() => {
      slideNext();
    }, 5000);

    setTimeID(id as unknown as number);

    return () => {
      if (timeID) {
        console.log("Clearing timeout:", timeID);
        clearTimeout(timeID);
      }
    };
  }, [activeIndex]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= imgURL.length - 1) {
        console.log("Reached last slide, going back to the first");
        return 0;
      } else {
        console.log("Going to next slide, index:", val + 1);
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        console.log("Reached first slide, going to the last");
        return imgURL.length - 1;
      } else {
        console.log("Going to previous slide, index:", val - 1);
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID) {
      console.log("AutoPlay stopped, clearing timeout:", timeID);
      clearTimeout(timeID);
      setTimeID(null);
    }
  };

  const AutoPlayStart = () => {
    console.log("AutoPlay started");
    
    const id = setTimeout(() => {
      slideNext();
    }, 5000);

    setTimeID(id as unknown as number);
  };

  return (
    <div
      className="container_slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <Nav/>
      <div className="galleri-container">
      
      <div className="slider_item slider_item-active">
        <img src={imgURL[activeIndex].imgURL} alt={imgURL[activeIndex].imgAlt} />
      </div>

      <div className="container_slider_links">
        {imgURL.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container_slider_links-small container_slider_links-small-active"
                : "container_slider_links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              console.log("Button clicked, setting activeIndex to:", index);
              setActiveIndex(index);
              AutoPlayStop(); 
            }}
          ></button>
        ))}
      </div>

      <button
        className="slider_btn-next"
        onClick={(e) => {
          e.preventDefault();
          console.log("Next button clicked");
          slideNext();
          AutoPlayStop(); 
        }}
      >
        {">"}
      </button>

      <button
        className="slider_btn-prev"
        onClick={(e) => {
          e.preventDefault();
          console.log("Previous button clicked");
          slidePrev();
          AutoPlayStop(); 
        }}
      >
        {"<"}
      </button>
      </div>
    </div>
  );
};

export default Galleria;
