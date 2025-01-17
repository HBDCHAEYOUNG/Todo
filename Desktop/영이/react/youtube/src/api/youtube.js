export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          channelId: id,
          type: "video",
        },
      })
      .then((res) => {
        return res.data.items;
      })
      .catch((error) => console.log(error));
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
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
    return this.apiClient
      .videos({
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
