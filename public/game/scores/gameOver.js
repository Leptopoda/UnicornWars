window.onload = function () {
    score = sessionStorage.getItem("score");
    username = sessionStorage.getItem("username");
    if (score == null){
        score = "Bitte erst spielen";
        document.getElementById("submit").style.visibility = 'hidden';
    }
    if (username !== null){
        document.getElementById("username").innerHTML = username;
    }
    document.getElementById("score").innerHTML = score;
}

function submit(){
    score = sessionStorage.getItem("score");
    username = document.getElementById("username").value
    if (username !== ""){        
        sessionStorage.removeItem("score");
        sessionStorage.setItem("username", username);
        
        fetch("/", { method: 'PUT', body: JSON.stringify({ username: username, score: score }) })
        
        //window.open ('scoreboard.html','_self',false);
    }
}
