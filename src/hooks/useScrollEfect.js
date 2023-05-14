import { useEffect, useState } from "react";

export const useScrollEffect = (data) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${data}`);
      const elementPosition = element.offsetTop;
      const offset = window.innerHeight / 2;
      if (window.pageYOffset > elementPosition - offset) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return [visible];
};
