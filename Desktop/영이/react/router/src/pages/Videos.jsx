import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const navigate = useNavigate();
  const videoId = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(videoId.current.value);
    navigate(`/videos/${videoId.current.value}`);
  };

  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="video id: " ref={videoId} />
      </form>
    </div>
  );
}
