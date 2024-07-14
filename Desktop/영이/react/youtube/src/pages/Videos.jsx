import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      return fetch(
        `videos/${keyword ? "keyword" : "popular"}`
          .then((res) => res.json())
          .then((data) => data.items)
      );
    },
  });

  return (
    <div>
      videos
      {keyword ? `🔎${keyword}` : "🔥"}
    </div>
  );
}
