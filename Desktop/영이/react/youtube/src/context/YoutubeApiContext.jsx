import { createContext, useContext } from "react";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();
// const client = new FakeYoutubeClient();
const client = new YoutubeClient();

const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      //!괄호 두개인이유???? - 여러값 내려보내기
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
