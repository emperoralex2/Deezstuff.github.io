document.getElementById("submit").addEventListener("click", function () {
    let inputvalue = document.getElementById("inputmovie").value;

    const container = document.getElementById('iframecontainer');

    if (inputvalue) {
        let embedmovie = `https://vidsrc.to/embed/movie/${encodeURIComponent(inputvalue)}`;

        let iframe = document.getElementById("movieid");
        iframe.src = embedmovie;

        container.style.display = 'block';
    } else {
    alert("Please enter a movie name or ID.");

    }

});


document.body.style.backgroundColor = '#1A1D46';