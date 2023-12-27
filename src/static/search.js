function search() {
  const searchTerm = document.querySelector("input[type='text']").value;
  const resultsContainer = document.querySelector(".results-container");
  const explicitFilter = document.getElementById("explicitFilter").value;
  maxDuration = document.getElementById("maxDuration").value;

  let url = `https://itunes.apple.com/search?term=${searchTerm}`;

  if (explicitFilter !== "") {
    url += `&explicit=${explicitFilter}`;
  }

  let exp;
  if (explicitFilter === "Yes") {
    exp = "explicit";
  } else {
    exp = "notExplicit";
  }

  resultsContainer.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      results = data.results.filter(
        (result) =>
          explicitFilter === "" ||
          (result.trackExplicitness && result.trackExplicitness === exp)
      );
      if (maxDuration !== "") {
        maxDuration = parseFloat(maxDuration);
        results = results.filter(
          (result) => result.trackTimeMillis <= maxDuration * 60 * 1000
        );
      }

      const numResults = Math.min(results.length, 10);
      if (numResults === 0) {
        resultsContainer.innerHTML = "<p>Sorry, no songs found :(</p>";
      } else {
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        const trackNameHeader = document.createElement("th");
        trackNameHeader.textContent = "Song";
        const artistNameHeader = document.createElement("th");
        artistNameHeader.textContent = "Artist";
        const artworkHeader = document.createElement("th");
        artworkHeader.textContent = "";
        const audioHeader = document.createElement("th");
        audioHeader.textContent = "Preview";
        headerRow.appendChild(artworkHeader);
        headerRow.appendChild(trackNameHeader);
        headerRow.appendChild(artistNameHeader);
        headerRow.appendChild(audioHeader);
        table.appendChild(headerRow);

        for (let i = 0; i < numResults; i++) {
          const result = results[i];
          const trackName = result.trackName;
          const artistName = result.artistName;
          const artworkUrl = result.artworkUrl100;
          const previewUrl = result.previewUrl;

          const resultRow = document.createElement("tr");

          const artworkCell = document.createElement("td");
          const artworkImg = document.createElement("img");
          artworkImg.src = artworkUrl;
          artworkImg.alt = "Album artwork";
          artworkCell.appendChild(artworkImg);
          resultRow.appendChild(artworkCell);

          const trackNameCell = document.createElement("td");
          trackNameCell.textContent = trackName;
          resultRow.appendChild(trackNameCell);

          const artistNameCell = document.createElement("td");
          artistNameCell.textContent = artistName;
          resultRow.appendChild(artistNameCell);

          const audioCell = document.createElement("td");
          if (previewUrl) {
            const audioPlayer = document.createElement("audio");
            audioPlayer.src = previewUrl;
            audioPlayer.controls = true;
            audioCell.appendChild(audioPlayer);
          } else {
            audioPlayer = document.createElement("div");
            audioPlayer.textContent = "No audio available";
            audioCell.appendChild(audioPlayer);
          }
          resultRow.appendChild(audioCell);

          table.appendChild(resultRow);
        }

        resultsContainer.appendChild(table);
      }
    })
    .catch((error) => console.log(error));
}
const clearFiltersButton = document.getElementById("clearFiltersButton");
clearFiltersButton.addEventListener("click", () => {
  document.getElementById("explicitFilter").value = "";
  document.getElementById("maxDuration").value = "";
});

//Typing effect
const typewriter = document.getElementById("typing_effect");
const words = [
  { text: "Search", color: "rgb(255,233,156)" },
  { text: "Find", color: "rgb(195,139,91)" },
  { text: "Discover", color: "rgb(243,200,81)" },
]; // List of words to be displayed
let currentWordIndex = 0; // Index of the current word being typed
let currentCharIndex = 0; // Index of the current character being typed

function typeWriter() {
  if (currentCharIndex < words[currentWordIndex].text.length) {
    const char = words[currentWordIndex].text.charAt(currentCharIndex);
    const color = words[currentWordIndex].color;
    const span = document.createElement("span");
    span.style.color = color;
    span.innerHTML = char;
    typewriter.appendChild(span);
    currentCharIndex++;
    setTimeout(typeWriter, 150); // delay between each character
  } else {
    setTimeout(function () {
      deleteText(words[currentWordIndex].text);
    }, 800);
  }
}

function deleteText(word) {
  if (currentCharIndex > 0) {
    typewriter.removeChild(typewriter.lastChild);
    currentCharIndex--;
    setTimeout(function () {
      deleteText(word);
    }, 150); // delay between each character
  } else {
    currentWordIndex = (currentWordIndex + 1) % words.length; // move to next word
    currentCharIndex = 0; // reset character index
    setTimeout(typeWriter, 800);
  }
}

typeWriter();
