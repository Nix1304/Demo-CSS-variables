const themes = ['light', 'dark', 'red-dark', 'blue-dark'];
let currentTheme = 0;

function changeTheme() {
    if(currentTheme == themes.length - 1) {
        currentTheme = 0;
    } else {
        currentTheme++;
    }
    document.body.setAttribute('theme', themes[currentTheme]);
}