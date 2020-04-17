const theme = localStorage.getItem('theme');

if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    var element = document.body;
    element.classList.toggle("dark");
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else if  (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
var element = document.body;
element.classList.toggle("dark");
    if (currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "Light Mode";
    }
}

//Check User Device Settings
/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
}*/
