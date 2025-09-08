const theme = localStorage.getItem('theme');
const darkicon = '<i class="bi bi-moon-fill mode-logo"></i>'
// const lighticon = '<i class="fa-solid fa-circle-half-stroke"></i>'
const lighticon = '<i class="bi bi-sun-fill mode-logo"></i>'

const toggle = document.getElementById('mode-toggle');
const circle_toggle = document.getElementById('circle-toggle');

if (theme == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    var element = document.body;
    element.classList.toggle("dark");
    circle_toggle.innerHTML = lighticon;
    var items = document.getElementsByClassName("GitData");
    for (var i = 0; i < items.length; i++) {
        items[i].src = items[i].src.replace('nord', 'nord');
    }
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (theme === "dark") {
    toggle.classList.toggle('active');
    circle_toggle.innerHTML = lighticon;
} else if (theme === "light") {
    circle_toggle.innerHTML = darkicon;
} else if (userPrefers === "dark") {
    toggle.classList.toggle('active');
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    circle_toggle.innerHTML = lighticon;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    circle_toggle.innerHTML = darkicon;
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    var element = document.body;
    toggle.classList.toggle('active');
    element.classList.toggle("dark");
    if (currentMode == "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        circle_toggle.innerHTML = darkicon;
        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('nord', 'nord');
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        circle_toggle.innerHTML = lighticon;
        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('nord', 'nord');
        }
    }
}

//Check User Device Settings
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").innerHTML = lighticon;
}*/