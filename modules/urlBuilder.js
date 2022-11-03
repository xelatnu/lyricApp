import { url, uid, tokenid } from "./parameters.js";

class UrlBuilder {
  getFetchLyrics(searchValue, artist = "") {
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
