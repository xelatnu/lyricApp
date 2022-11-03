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
    console.log(data);
    showListingLyrics(data);
  } else {
    showPopUp(true);

    // alert(`Status: ${searchResult.status}, message: ${searchResult.statusText}`);
  }

  // if (!data.result.length) {
  //   alert("lyrics doesnt exist in this api");
  //   console.log("lyrics doesnt exist in this ap");
  // }
}
