import React, { useState, useEffect, useRef } from "react";
import WorkCard from "@/chip/WorkCard";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlinePause,
} from "react-icons/ai";

const Work = () => {
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const cardWrapperRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      if (cardWrapperRef.current) {
        const element = cardWrapperRef.current;
        setShowLeftScroll(element.scrollLeft > 0);
        setShowRightScroll(
          element.scrollLeft < element.scrollWidth - element.clientWidth
        );
      }
    }
    handleScroll();

    if (cardWrapperRef.current) {
      cardWrapperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardWrapperRef.current) {
        cardWrapperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollCard = (direction) => {
    setIsAutoPlay(false);
    if (cardWrapperRef.current) {
      let amount =
        direction === "left"
          ? cardWrapperRef.current.scrollLeft - 400
          : cardWrapperRef.current.scrollLeft + 400;
      cardWrapperRef.current.scrollTo({
        top: 0,
        left: amount,
        behavior: "smooth",
      });
    }
  };
  const handleAutoPlay = () => {
    if (!cardWrapperRef.current) return;

    const element = cardWrapperRef.current;
    element.scrollLeft += 1;
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(handleAutoPlay, 16);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  return (
    <div id="works" className="container m-auto mt-16">
      {}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl works">
          Projects
          <div className="right-0 flex items-center gap-4">
            {/* <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="px-2 py-1 button transition-transform duration-200 transform hover:scale-110"
            >
              {isAutoPlay ? <AiOutlinePause /> : <AiOutlinePlayCircle />}
            </button> */}
            {showLeftScroll && (
              <button
                onClick={() => scrollCard("left")}
                className="px-2 py-1 hover:scale-110 button"
              >
                <AiOutlineLeft />
              </button>
            )}
            {showRightScroll && (
              <button
                onClick={() => scrollCard("right")}
                className="px-2 py-1 hover:scale-110 button"
              >
                <AiOutlineRight />
              </button>
            )}
          </div>
        </h3>

        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my projects:
        </p>
      </div>
      {}
      <div
        ref={cardWrapperRef}
        className="card-wrapper w-[90%] sm:w-full mx-auto mt-5 overflow-x-auto whitespace-nowrap space-x-4"
      >
        <div className="card-box">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
