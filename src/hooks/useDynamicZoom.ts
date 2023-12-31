import { useState, useEffect } from "react";

const calculateZoomLevel = (windowWidth:number) => {
  // Logic to calculate zoom level based on window width
  if (windowWidth < 500) return 12;
  if (windowWidth < 1500) return 13;
  return 14;

};

const useDynamicZoom = () => {
  const [zoom, setZoom] = useState(calculateZoomLevel(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setZoom(calculateZoomLevel(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return zoom;
};

export default useDynamicZoom;
