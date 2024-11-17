document.addEventListener('DOMContentLoaded', function () {
    const genButton = document.getElementById('genbutton');
    const userIdInput = document.getElementById('userid');
    const errorBox = document.createElement('div'); // Create an error box element
    errorBox.style.color = 'red';
    errorBox.style.marginTop = '10px';
    errorBox.style.display = 'none'; // Initially hidden
    userIdInput.parentNode.insertBefore(errorBox, userIdInput.nextSibling);

    genButton.addEventListener('click', async function () {
        const appId = userIdInput.value.trim();
        
        // Validation for empty or non-numeric input
        if (!appId) {
            errorBox.textContent = "Please enter an App ID.";
            errorBox.style.display = 'block';
            return;
        } else if (!/^\d+$/.test(appId)) {
            errorBox.textContent = "App ID must contain only numbers.";
            errorBox.style.display = 'block';
            return;
        } else {
            errorBox.style.display = 'none'; // Hide error if input is valid
        }

        try {
            // First request to the initial site with the app ID
            const firstResponse = await fetch(`https://vinn-web-tools-dandys-projects-bb4af0ab.vercel.app/get-appid?appid=${appId}`);
            if (!firstResponse.ok) {
                throw new Error("Failed to fetch app details.");
            }

            // Second request to fetch the download URL
            const secondResponse = await fetch(`https://vinn-web-tools-dandys-projects-bb4af0ab.vercel.app/download?appid=${appId}`);
            if (!secondResponse.ok) {
                throw new Error("Failed to fetch download URL.");
            }

            // Extract the URL from the JSON response
            const secondData = await secondResponse.json();
            const downloadUrl = secondData.url;

            // Redirect to the extracted URL
            if (downloadUrl) {
                window.location.href = downloadUrl;
            } else {
                console.error("Download URL not found in the response.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('Menu');
    const hideButton = document.getElementById('Hide');
    const box5 = document.getElementById('box5');

    menuButton.addEventListener('click', function () {

        box5.classList.remove('scale-in-center', 'scale-out-center');

        if (box5.style.display !== 'none') {
            box5.style.display = 'block'; 
            box5.classList.add('scale-in-center'); 
            box5.addEventListener('animationend', function () {
                box5.classList.remove('scale-in-center'); 
            }, { once: true });
        } else {
            box5.classList.add('scale-out-center'); 
            box5.addEventListener('animationend', function () {
                box5.style.display = 'none'; 
                box5.classList.remove('scale-out-center'); 
            }, { once: true });
        }
    });

    hideButton.addEventListener('click', function () {

        box5.classList.remove('scale-in-center', 'scale-out-center');
        if (box5.style.display !== 'none') {
            box5.classList.add('scale-out-center'); 
            box5.style.display = 'none';
            box5.addEventListener('animationend', function () {
                box5.classList.remove('scale-out-center'); 
            }, { once: true });
        
        }
    });
});


document.getElementById('goButton').addEventListener('click', function() {
 
    const userUrl = document.getElementById("userUrl").value;

    if (userUrl) {
      
        window.location.href = userUrl;
    } else {

        alert("Please enter a valid URL.");
    }
});

function hidebutton() {
    const box2 = document.getElementById('box2');
    const urlheader = document.getElementById('urlheader');
    const hide = document.getElementById('Hide');
    const box = document.getElementById('box5');
    const Menu = document.getElementById('Menu');
    const showmore = document.getElementById('animateButton');
    const githublogo = document.getElementById('githublogos');
    const movie = document.getElementById('movie');

    if (Menu.style.display !== 'none') {
        Menu.style.display ='none'
        box2.style.display ='none'
        movie.style.display ='none'
        showmore.style.display ='none'
        githublogo.style.display ='none'
        box.style.display ='block'
        urlheader.style.display ='none'
    } else {
        Menu.style.display ='block'
        box.style.display ='none'
        box2.style.display ='block'
        movie.style.display ='block'
        showmore.style.display ='block'
        githublogo.style.display ='block'
        urlheader.style.display ='block'
    }
}

function unhidebutton() {
    hidebutton();
}




document.getElementById('animateButton').addEventListener('click', function() {
    const animatedElement = document.getElementById('animatedElement');
    const newContent = document.getElementById('newContent');
    const box6 = document.getElementById('box6'); 

    if (newContent.style.display === 'block') {
        newContent.classList.add('slide-in-bck-br');
        box6.classList.add('slide-in-bck-br');
        newContent.addEventListener('animationend', () => {
            newContent.classList.remove('slide-in-bck-br');
        }, { once: true });
    } else {
        if (newContent.style.display === 'none') {}
        newContent.classList.remove('slide-out-bck-br');
        box6.classList.remove('slide-out-bck-br');
        newContent.classList.add('slide-out-bck-br');
        newContent.addEventListener('animationend', () => {
            newContent.classList.remove('slide-out-bck-br'); 
        }, { once: true });
    }
});

function hideContent() {
    const originalContent = document.getElementById('boxContainer');
    const newContent = document.getElementById('newContent');
    const toggleButton = document.getElementById('toggleButton');
    const showOriginalButton = document.getElementById('showOriginalButton');
    const centerContainer = document.getElementById('CenterContainer'); 
    const box6 = document.getElementById('box6'); 
    const movie = document.getElementById('movie');

    if (originalContent.style.display !== 'none') {
        centerContainer.style.display = 'none';
        originalContent.style.display = 'none'; 
        movie.style.display ='none'
        newContent.style.display = 'block'; 
        box6.style.display = 'block';
        toggleButton.style.display = 'none'; 
        showOriginalButton.style.display = 'block'; 
    } else {
        centerContainer.style.display = 'block';
        originalContent.style.display = 'block'; 
        newContent.style.display = 'none'; 
        box6.style.display = 'none';
        movie.style.display = 'block'
        toggleButton.style.display = 'block'; 
        showOriginalButton.style.display = 'none';
    }
}

function showOriginalContent() {
    hideContent(); 
}

window.onload = function() {
    document.body.style.backgroundImage = "url('https://github.com/emperoralex2/Deezstuff.github.io/releases/download/%23files/miles2.jpeg')";
    document.body.style.backgroundSize = "cover";  
    document.body.style.backgroundPosition = "center"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
};