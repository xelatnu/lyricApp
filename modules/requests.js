import { urlBuilder } from "./urlBuilder.js";
import { showListingLyrics } from "./renderListing.js";
import { showPopUp } from "./modalHandler.js";
import { showLoading } from "./loaderHandler.js";

export async function fetchLyrics(searchValue, artist) {
  showLoading(true);
  const searchResult = await fetch(
    `${urlBuilder.getFetchLyrics(searchValue, artist)}`
  ).then((result) => {
    showLoading(false);

    return result;
  });

  if (searchResult.status === 200) {
    const data = await searchResult.json();
    showPopUp(false);
    showListingLyrics(data);
  } else {
    showPopUp(true);
  }
}
