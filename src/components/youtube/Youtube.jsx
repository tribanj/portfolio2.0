import React from "react";
import "./youtube.css";
import youtubeBanner from "../../assets/youtube.png";
const YouTubeChannel = () => {
  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCBuy0RSnk-KGormyI_GJwXQ",
      "_blank"
    );
  };
  return (
    <div className="youtube-section ">
      <div className="channel-Banner container" onClick={openYoutube}>
        <h2 className="text-center my-3">My YouTube Channel</h2>
        <img src={youtubeBanner} alt="Youtube Banner" />
      </div>
      <div className="video-container container">
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/_ozYwoNxLWE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/aqZbP2olX9s"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/jSJxVatunh8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <br />
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/jcyVfo_rLpk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/RuP3IJqtPZc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/vycGLy-jkt0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeChannel;
