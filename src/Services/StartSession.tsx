export function StartSession(){
    var page = document.getElementById('board-page-container');
    if (page){
        page.classList.remove('blur');
        var intro = document.getElementById('landing-page-container');
        if (intro) { intro.style.display = "none"; }
    }
}