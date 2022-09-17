const switch_button = document.querySelector('button');
let theme = localStorage.getItem('theme');

switch_button.addEventListener('click', () => {
    if (theme == 'dark') {
        document.querySelector('body').classList.add('light');
        document.querySelector('body').classList.remove('dark');
        theme = 'light';
    } else {
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

if (theme == 'dark') {
    document.querySelector('body').classList.add('light');
}

if (theme == 'light') {
    document.querySelector('body').classList.add('dark');
}