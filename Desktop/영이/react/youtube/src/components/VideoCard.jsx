import React from "react";
import { formatAgo } from "../utill/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const isList = type === "list";

  const navigate = useNavigate();
  return (
    <li
      className={isList ? "flex gap-1 m-2 cursor-pointer" : "cursor-pointer"}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt="title"
      />
      <div className={isList ? "flex flex-col justify-center" : ""}>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
