export function ChangeTheme() {
    var currState = document.documentElement.getAttribute('data-theme');

    if (currState == null || currState === 'light'){ 
        document.documentElement.setAttribute('data-theme', 'dark'); 
        window.localStorage.setItem('theme', 'dark');
        var label = document.getElementById('label-text');
        if (label){
            label.innerText = 'Enable Light Mode!'
        }
    }
    else { 
        document.documentElement.setAttribute('data-theme', 'light'); 
        window.localStorage.setItem('theme', 'light');
        var label = document.getElementById('label-text');
        if (label){
            label.innerText = 'Enable Dark Mode!'
        }
    }
};

export function GetTheme(){
    var theme = window.localStorage.getItem('theme');
    if (theme === 'dark'){ 
        document.documentElement.setAttribute('data-theme', 'dark');
        var label = document.getElementById('label-text');
        if (label){
            label.innerText = 'Enable Light Mode!';
        }
        var checkbox = document.getElementById('checkbox') as HTMLInputElement;
        if (checkbox){
            checkbox.checked = true;
        }
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        var label = document.getElementById('label-text');
        if (label){
            label.innerText = 'Enable Dark Mode!'
        }   
    }
};