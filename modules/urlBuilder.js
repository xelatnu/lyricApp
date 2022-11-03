import { url, uid, tokenid } from "./parameters.js";

class UrlBuilder {
  getFetchMusic(searchValue, artist = "") {
    return (
      `${url}?` +
      new URLSearchParams({
        uid: uid,
        tokenid: tokenid,
        term: searchValue,
        artist: artist,
        format: "json",
      })
    );
  }
}

export const urlBuilder = new UrlBuilder();
