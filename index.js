const home = document.getElementById("count-home");
const away = document.getElementById("count-away");
const resetBtn = document.getElementById("reset");

let homeScore = 0;
let awayScore = 0;

function updateScore() {
    home.textContent = homeScore;
    away.textContent = awayScore;
}
function resetScores() {
    homeScore = 0; 
    awayScore = 0;
    updateScore();
}

document.querySelectorAll(".Home .score-btns button").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = Number(btn.textContent.replace("+", ""));
        homeScore += value;
        updateScore();
    });
});

document.querySelectorAll(".Away .score-btns button").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = Number(btn.textContent.replace("+", ""));
        awayScore += value;
        updateScore();
    });
});

resetBtn.addEventListener("click", () => {
    resetScores();
});