import React from "react";
import bgCoverImg from "../../assets/best_briyani.jpg";

const CoverBanner = () => {
  const bgImage = {
    backgroundImage: `url(${bgCoverImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    height: "200px",
    width: "100%",
  };

  return (
    <div style={bgImage}>
      <div className="h-[200px] flex justify-center items-center text-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">
          The Best Briyani in Davanagere
        </h1>
      </div>
    </div>
  );
};

export default CoverBanner;
