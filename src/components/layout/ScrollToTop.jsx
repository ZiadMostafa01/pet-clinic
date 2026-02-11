import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // شيلها لو مش عايز أنيميشن
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   // الباثات اللي نعمل عليها scroll
//   const scrollPaths = ["/media", "/profile"];

//   useEffect(() => {
//     const shouldScroll = scrollPaths.some((path) =>
//       pathname.startsWith(path)
//     );

//     if (!shouldScroll) return;

//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;
