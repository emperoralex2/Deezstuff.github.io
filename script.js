document.addEventListener('DOMContentLoaded', function () {
    // Toggle visibility of the additional buttons
    const toggleButton = document.getElementById('show-more');
    const extraButtons = document.getElementById('extra-buttons');

    // Hide the extra buttons on load
    extraButtons.style.display = 'none';

    toggleButton.addEventListener('click', function () {
        if (extraButtons.style.display === 'none') {
            extraButtons.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            extraButtons.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });

    // Background image setup (optional)
    const backgroundImageUrls = [
        'https://github.com/emperoralex2/Deezstuff.github.io/releases/download/%23files/miles2.jpeg',
    ];

    let currentBackgroundIndex = 0;

    function updateBackgroundImage() {
        document.body.style.backgroundImage = `url('${backgroundImageUrls[currentBackgroundIndex]}')`;
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImageUrls.length;
    }

    updateBackgroundImage();
    setInterval(updateBackgroundImage, 30000); // Change background every 30 seconds
});
