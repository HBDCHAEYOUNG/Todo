import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return axios
      .get(`/videos/channel.json`)
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async RelatedVideos(id) {
    return axios.get(`/videos/videos.json`).then((res) => res.data.items);
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/keyword.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((data) => ({ ...data, id: data.id.videoId })));
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
