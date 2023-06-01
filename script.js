const homePoints = document.getElementById("home-points");
const homePlus1 = document.getElementById("home-plus1");
const homePlus2 = document.getElementById("home-plus2");
const homePlus3 = document.getElementById("home-plus3");

const guestPoints = document.getElementById("guest-points");
const guestPlus1 = document.getElementById("guest-plus1");
const guestPlus2 = document.getElementById("guest-plus2");
const guestPlus3 = document.getElementById("guest-plus3");

const homeName = document.getElementById("home-name");
const guestName = document.getElementById("guest-name");

const newGame = document.getElementById("new-game");

let scoreHome = 0;
let scoreGuest = 0;


function add(number, score){
    score += number;
    return score;
}

function highlightLeader(){
    if(scoreHome>scoreGuest){
        homeName.style.textShadow = "0 0 20px blue";
        guestName.style.textShadow = "none";
    } else if(scoreHome<scoreGuest){
        guestName.style.textShadow = "0 0 20px blue";
        homeName.style.textShadow = "none";
    } else{
        guestName.style.textShadow = "none";
        homeName.style.textShadow = "none";
    }
}

newGame.addEventListener("click", function(){
    scoreGuest = 0;
    scoreHome = 0;
    homePoints.innerHTML = 0;
    guestPoints.innerHTML = 0;
    guestName.style.textShadow = "none";
    homeName.style.textShadow = "none";
})

homePlus1.addEventListener("click", function(){
    let newScore = add(1, scoreHome);
    homePoints.innerHTML = newScore;
    scoreHome = newScore;
    highlightLeader();
})

homePlus2.addEventListener("click", function(){
    let newScore = add(2, scoreHome);
    homePoints.innerHTML = newScore;
    scoreHome = newScore;
    highlightLeader();
})

homePlus3.addEventListener("click", function(){
    let newScore = add(3, scoreHome);
    homePoints.innerHTML = newScore;
    scoreHome = newScore;
    highlightLeader();
})

guestPlus1.addEventListener("click", function(){
    let newScore = add(1, scoreGuest);
    guestPoints.innerHTML = newScore;
    scoreGuest = newScore;
    highlightLeader();
})

guestPlus2.addEventListener("click", function(){
    let newScore = add(2, scoreGuest);
    guestPoints.innerHTML = newScore;
    scoreGuest = newScore;
    highlightLeader();
})

guestPlus3.addEventListener("click", function(){
    let newScore = add(3, scoreGuest);
    guestPoints.innerHTML = newScore;
    scoreGuest = newScore;
    highlightLeader();
})