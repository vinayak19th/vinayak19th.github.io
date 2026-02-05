const storageKey = 'mode';
const theme = localStorage.getItem(storageKey) || localStorage.getItem('theme');
const darkicon = '<i class="bi bi-moon-fill mode-logo"></i>';
const lighticon = '<i class="bi bi-sun-fill mode-logo"></i>';

const toggle = document.getElementById('mode-toggle');
const circle_toggle = document.getElementById('circle-toggle');

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Set cookie for the top-level domain to share with subdomains/paths if needed
    // For vinayak19th.me and vinayak19th.me/Blog, path=/ is sufficient if they are same origin. 
    // If they were subdomains, we'd need domain=.vinayak19th.me
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
}

function applyTheme(mode) {
    if (mode === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add("dark");
        if (toggle) toggle.classList.add('active');
        if (circle_toggle) circle_toggle.innerHTML = lighticon;

        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('ocean_dark', 'tokyonight');
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove("dark");
        if (toggle) toggle.classList.remove('active');
        if (circle_toggle) circle_toggle.innerHTML = darkicon;

        var items = document.getElementsByClassName("GitData");
        for (var i = 0; i < items.length; i++) {
            items[i].src = items[i].src.replace('tokyonight', 'ocean_dark');
        }
    }
}

// Helper to get cookie
function getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
}

// Initial Load
// Priority: localStorage > cookie > user preference
const storedMode = localStorage.getItem(storageKey);
const storedCookie = getCookie(storageKey);
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (storedMode === "dark" || (!storedMode && storedCookie === "dark")) {
    applyTheme("dark");
    if (!storedMode) localStorage.setItem(storageKey, 'dark'); // Sync back to LS
} else if (storedMode === "light" || (!storedMode && storedCookie === "light")) {
    applyTheme("light");
    if (!storedMode) localStorage.setItem(storageKey, 'light'); // Sync back to LS
} else if (userPrefers === "dark") {
    applyTheme("dark");
    localStorage.setItem(storageKey, 'dark');
    setCookie(storageKey, 'dark', 365);
} else {
    applyTheme("light");
    localStorage.setItem(storageKey, 'light');
    setCookie(storageKey, 'light', 365);
}

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        applyTheme("light");
        window.localStorage.setItem(storageKey, 'light');
        window.localStorage.setItem('theme', 'light'); // Keep legacy key just in case
        setCookie(storageKey, 'light', 365);
    } else {
        applyTheme("dark");
        window.localStorage.setItem(storageKey, 'dark');
        window.localStorage.setItem('theme', 'dark'); // Keep legacy key just in case
        setCookie(storageKey, 'dark', 365);
    }
}