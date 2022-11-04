export function showListingLyrics(data) {
  const resultField = document.getElementById("result");
  resultField.innerHTML = `
    <table class="lyrics-table" >
      <tr>
        <th>Artist</th>
        <th>Song</th>
        <th>Album</th>
      </tr>
      ${data.result
        .map(
          (song) => `<tr>
                    <td>
                        <a target='_blank' href=${song["artist-link"]}>${song.artist}</a>
                    </td>
                    <td>
                      <a target='_blank' href=${song["song-link"]}>${song.song}</a>
                    </td>
                    <td>
                      <a target='_blank' href=${song["album-link"]}>${song.song}</a>
                    </td>

                </tr>`
        )
        .join("")}
    </table>
  `;
}
