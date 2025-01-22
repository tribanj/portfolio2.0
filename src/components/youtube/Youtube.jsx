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
    <div className="youtube-section">
      {/* YouTube Banner Section */}
      <div className="channel-banner container" onClick={openYoutube}>
        <h2 className="text-center">My YouTube Channel</h2>
        <img src={youtubeBanner} alt="YouTube Banner" className="banner-image" />
      </div>

      {/* Videos Section */}
      <div className="video-container container">
        {[
          "_ozYwoNxLWE",
          "aqZbP2olX9s",
          "jSJxVatunh8",
          "jcyVfo_rLpk",
          "RuP3IJqtPZc",
          "vycGLy-jkt0",
        ].map((videoId, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube Video ${index + 1}`}
            ></iframe>
            <h3 className="video-title">Video {index + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannel;