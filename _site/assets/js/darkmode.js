const theme = localStorage.getItem('theme');
const darkicon = '<i class="fa-solid fa-moon darkicon"></i>'
// const lighticon = '<i class="fa-solid fa-circle-half-stroke"></i>'
const lighticon = '<i class="fa-solid fa-sun"></i>'

if (theme == "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    var element = document.body;
    element.classList.toggle("dark");
    document.getElementById("theme-toggle").innerHTML = lighticon;
    var items = document.getElementsByClassName("GitData");
    for (var i = 0; i < items.length; i++) {
        items[i].src = items[i].src.replace('ocean_dark', 'tokyonight');
    }
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = lighticon;
} else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = darkicon;
} else if (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = lighticon;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = darkicon;
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    var element = document.body;
    element.classList.toggle("dark");
    if (currentMode == "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = darkicon;
        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('ocean_dark', 'tokyonight');
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = lighticon;
        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('tokyonight', 'ocean_dark');
        }
    }
}

//Check User Device Settings
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").innerHTML = lighticon;
}*/