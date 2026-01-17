// Select the theme select element
const themeSelect = document.getElementById('theme-select');
const body = document.body;
const logo = document.querySelector('.logo-container img');


themeSelect.addEventListener('change', changeTheme);


function changeTheme() {
    const selectedTheme = themeSelect.value;
    
    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo-white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'images/byui-logo-blue.png';
    }
}