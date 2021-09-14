
        let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    document.getElementById("HTML").setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
    var image = document.getElementById('logo2');
    image.src = "img/Darkmode_logo.png";
    var image = document.getElementById('logo-foot');
    image.src = "img/Darkmode_logo.png";
    var video = document.getElementById('video-dark');
    video.src = "video/logo-dark-vid.mp4";
}

const changeThemeToLight = () => {
    document.getElementById("HTML").setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
    var image = document.getElementById('logo2');
    image.src = "img/lightmode_logo.png";
    var image = document.getElementById('logo-foot');
    image.src = "img/lightmode_logo.png";
    var video = document.getElementById('video-dark');
    video.src = "video/logoFinal.mp4";
}


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});

function changing(){
    document.getElementById("HTML").setAttribute("data-theme", localStorage.getItem('data-theme')) ;
    if(localStorage.getItem('data-theme')==="dark")
    {
        var image = document.getElementById('logo2');
    image.src = "img/Darkmode_logo.png";
    var image = document.getElementById('logo-foot');
    image.src = "img/Darkmode_logo.png";
    var video = document.getElementById('video-dark');
    video.src = "video/logo-dark-vid.mp4";
    document.getElementById("checkbox").checked = true;
    }
    else if(localStorage.getItem('data-theme')===null)
    {
        document.getElementById("HTML").setAttribute("data-theme", "light") ;
    }
}
    