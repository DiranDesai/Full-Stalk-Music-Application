import React, { useEffect, useState } from "react";

function useScrollValue(cardContainerRef) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    cardContainerRef.current.style.transform = `translateX(-${scrollValue}px)`;
  }, [scrollValue]);

  function handleNext() {
    setScrollValue((prevScroll) => {
      const newScroll = prevScroll + 256;
      // Limit scroll to prevent scrolling beyond the container's width
      const maxScroll = cardContainerRef.current.scrollWidth;
      return newScroll > maxScroll ? maxScroll : newScroll;
    });
  }

  function handlePrev() {
    setScrollValue((prevScroll) => {
      if (
        cardContainerRef.current.offsetWidth + prevScroll <=
        cardContainerRef.current.scrollWidth
      )
        return 0;
      return prevScroll - 256;
    });
  }

  return {scrollValue, handlePrev, handleNext};
}

export default useScrollValue;
