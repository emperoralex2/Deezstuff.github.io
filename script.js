document.addEventListener('DOMContentLoaded', function () {
    // Toggle visibility of the additional buttons
    const toggleButton = document.getElementById('show-more');
    const extraButtons = document.getElementById('extra-buttons');
    const linkContainer = document.querySelector('.link-container');

    // Hide the extra buttons on load
    extraButtons.style.display = 'none';

    toggleButton.addEventListener('click', function () {
        linkContainer.classList.remove('scale-up-center', 'scale-down-center');
        extraButtons.classList.remove('scale-up-center', 'scale-down-center');

        if (extraButtons.style.display === 'none') {
            extraButtons.style.display = 'block';
            linkContainer.classList.add('scale-up-center');
            extraButtons.classList.add('scale-up-center');
            linkContainer.addEventListener('animationend', function () {
                linkContainer.classList.remove('scale-up-center');
                extraButtons.classList.remove('scale-up-center');
            }, { once: true });
            toggleButton.textContent = 'Show Less';
        } else {
            extraButtons.classList.add('scale-up-center');
            linkContainer.classList.add('scale-down-center');
            extraButtons.classList.add('scale-down-center');
            extraButtons.addEventListener('animationend', function() {
            extraButtons.style.display = 'none'; 
            linkContainer.classList.remove('scale-down-center');
            extraButtons.classList.remove('scale-down-center');
            }, { once: true });
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
