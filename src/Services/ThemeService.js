export const ChangeTheme = (event) =>{
    var currState = document.documentElement.getAttribute('data-theme');

    if (currState == null || currState === 'light'){ document.documentElement.setAttribute('data-theme', 'dark'); }
    else { document.documentElement.setAttribute('data-theme', 'light'); }
};