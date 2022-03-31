window.onload = function () {
    score = sessionStorage.getItem("score");
    username = sessionStorage.getItem("username");
    if (score == null) {
        score = "Bitte erst spielen";
        document.getElementById("submit").style.visibility = 'hidden';
    }
    if (username !== null) {
        document.getElementById("username").innerHTML = username;
    }
    document.getElementById("score").innerHTML = score;
}

async function submit() {
    score = sessionStorage.getItem("score");
    username = document.getElementById("username").value

    if (username !== "" && score !== null) {
        sessionStorage.removeItem("score");
        sessionStorage.setItem("username", username);

        await fetch("/api/scoreboard", { method: 'PUT', body: JSON.stringify({ username: username, score: score }) })
        window.location.href = "scoreboard.html";
    }
}
