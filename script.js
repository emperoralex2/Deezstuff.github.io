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

    if (Menu.style.display !== 'none') {
        Menu.style.display ='none'
        box2.style.display ='none'
        showmore.style.display ='none'
        githublogo.style.display ='none'
        box.style.display ='block'
        urlheader.style.display ='none'
    } else {
        Menu.style.display ='block'
        box.style.display ='none'
        box2.style.display ='block'
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

    if (newContent.style.display === 'block') {
        newContent.classList.add('slide-in-bck-br');
        newContent.addEventListener('animationend', () => {
            newContent.classList.remove('slide-in-bck-br');
        }, { once: true });
    } else {
        if (newContent.style.display === 'none') {}
        newContent.classList.remove('slide-out-bck-br');
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

    if (originalContent.style.display !== 'none') {
        centerContainer.style.display = 'none';
        originalContent.style.display = 'none'; 
        newContent.style.display = 'block'; 
        toggleButton.style.display = 'none'; 
        showOriginalButton.style.display = 'block'; 
    } else {
        centerContainer.style.display = 'block';
        originalContent.style.display = 'block'; 
        newContent.style.display = 'none'; 
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