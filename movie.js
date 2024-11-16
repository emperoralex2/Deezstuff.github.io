document.getElementById("submit").addEventListener("click", function () {

    let inputvalue = document.getElementById("inputmovie").value.trim();
    const mode = document.getElementById("modeselector").value;

    if (!inputvalue) {
      alert("Please enter a movie or TV show ID.");
      return;
    }
  
    if (!mode) {
      alert("Please select a mode (Movie or TV).");
      return;
    }

    let embedurl = "";
    if (mode === "movie") {
      embedurl = `https://vidsrc.to/embed/movie/${encodeURIComponent(inputvalue)}`;
    } else if (mode === "tv") {
      embedurl = `https://vidsrc.to/embed/tv/${encodeURIComponent(inputvalue)}`;
    } else {
      alert("Invalid mode selected.");
      return;
    }
  
    let iframe = document.getElementById("movieid");
    iframe.src = embedurl;
  
    const container = document.getElementById("iframecontainer");
    container.style.display = "block";
  });
  


document.body.style.backgroundColor = '#1A1D46';