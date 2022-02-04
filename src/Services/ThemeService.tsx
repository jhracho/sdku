export function ChangeTheme() {
    var currState = document.documentElement.getAttribute('data-theme');

    if (currState == null || currState === 'light'){ 
        document.documentElement.setAttribute('data-theme', 'dark'); 
        window.localStorage.setItem('theme', 'dark');
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'light'); 
        window.localStorage.setItem('theme', 'light');
    }
};

export function GetTheme(){
    var theme = window.localStorage.getItem('theme');
    if (theme){ 
        document.documentElement.setAttribute('data-theme', theme);
    }
};