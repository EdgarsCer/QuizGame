function displayScore() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort(function (a, b) { 
        return b.score - a.score;
    })
    for (let i = 0; i < highScores.length; i++) {
        const score = highScores[i];
        let liTag = document.createElement("li")
        liTag.textContent = score.initials + "- " + score.score;
        let highScoresEl = document.getElementById("highscores");
        highScoresEl.appendChild(liTag)

    }
}

displayScore()