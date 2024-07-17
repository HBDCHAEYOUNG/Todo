import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const { data: videos } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => youtube.relatedVideos(id),
    staleTime: 1000 * 60 * 5,
  });
  console.log(id);
  return (
    <div>
      {videos && (
        <ul className=" ">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
