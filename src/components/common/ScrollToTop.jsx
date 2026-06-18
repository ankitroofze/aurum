import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line har page change par screen ko top par le jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;