import { fetchLyrics } from "./requests.js";

const form = document.querySelector("#search-form");

form.addEventListener("submit", (e) => {
  const lyrics = document.getElementById("lyricsInput").value.trim();
  const artist = document.getElementById("artistInput").value.trim();

  e.preventDefault();

  if (!lyrics) {
    alert("Lyrics required");
  } else {
    fetchLyrics(lyrics, artist);
  }
});
