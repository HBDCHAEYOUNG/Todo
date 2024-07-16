import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.httpClient
      .get(`channels`, {
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet,CcontentDetails,Cstatistics",
          id: "Ks-_Mh1QhMc",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items)
      .catch((error) => console.log(error));
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((data) => ({ ...data, id: data.id.videoId })))
      .catch((error) => console.log(error));
  }

  async #mostPopular() {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "US",
        },
      })
      .then((res) => res.data.items)
      .catch((error) => console.log(error));
  }
}
