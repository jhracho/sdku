export function RankPopup(){
    console.log('done');
    var leaderboard = document.getElementById('leaderboard-container');
    if (leaderboard){ 
        console.log('changing');
        leaderboard.style.visibility = "visible"; 
        var page = document.getElementById('board-page-container');
        if (page){ page.classList.add('blur'); }
    }
};

export function RankHide(){
    var leaderboard = document.getElementById('leaderboard-container');
    if (leaderboard){ 
        leaderboard.style.visibility = "hidden"; 
        var page = document.getElementById('board-page-container');
        if (page){ page.classList.remove('blur'); }
    }

}