import React, { useEffect } from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";
import { flushSync } from "react-dom";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const { data: videos } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => youtube.RelatedVideos(id),
  });

  return (
    <div>
      {videos && (
        <ul className=" ">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
