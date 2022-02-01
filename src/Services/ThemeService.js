export const ChangeTheme = (event) =>{
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

export const GetTheme = () =>{
    var theme = window.localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', theme);
};