import { urlBuilder } from "./urlBuilder.js";

function showData(data) {
  const resultField = document.getElementById("result");
  resultField.innerHTML = `
    <table class="lyrics-table" >
      <tr>
        <th>Artist</th>
        <th>Song</th>
        <th>Album</th>
      </tr>
      ${data.result
        // .slice(0, 10)
        .map(
          (song) => `<tr>
                    <td>
                        <a target='_blank' href=${song['artist-link']}>${song.artist}</a>
                    </td>
                    <td>
                      <a target='_blank' href=${song['song-link']}>${song.song}</a>
                    </td>
                    <td>
                      <a target='_blank' href=${song['album-link']}>${song.song}</a>
                    </td>

                </tr>`
        )
        .join("")}
    </table>
  `;
}


export async function fetchMusic(searchValue, artist) {
  const searchResult = await fetch(
    `${urlBuilder.getFetchMusic(searchValue, artist)}`
  );
  const data = await searchResult.json();

  if (!data.result.length) {
    alert("lyrics doesnt exist in this api");
    console.log("lyrics doesnt exist in this api");
  }
  showData(data);
}
