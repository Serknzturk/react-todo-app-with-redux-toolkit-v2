
const loadedThemes = {};

window.loadTheme = (theme) => {
    const counterTheme = getCounterTheme(theme);

    const sheetLoaded = () => {
        if (loadedThemes.hasOwnProperty(counterTheme)) {
            loadedThemes[counterTheme].parentNode.removeChild(
                loadedThemes[counterTheme]
            );
        }
    }

    localStorage.setItem(theme, 'dark');
    document.documentElement.setAttribute('data-theme', theme);

    if (!loadedThemes.hasOwnProperty(theme)) {
        const sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.type = 'text/css';
        sheet.href = './css/style-variables-' + theme + '.css';
        sheet.onload = sheetLoaded;
        loadedThemes[theme] = sheet;
    }

    document.getElementsByTagName('head')[0].appendChild(loadedThemes[theme]);


}


let currentTheme = 'light';

if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
        currentTheme = "dark";
    }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    currentTheme = "dark";
}

const getCounterTheme = (theme) => {
    return theme == 'dark' ? 'light' : 'dark';
}