import React, { useMemo } from "react";

const PreloadImages = ({ imgUrls }) => {
  const preloadImgs = [];
  let keyCounter = 1;
  useMemo(() => {
    imgUrls.map((imgs) => {
      imgs.map((link) => {
        preloadImgs.push(<img key={keyCounter} src={link} />);
        keyCounter++;
      });
    });
  }, [imgUrls]);
  return (
    <div className="hidden" id="preload">
      {" "}
      {preloadImgs}
    </div>
  );
};

export default PreloadImages;
