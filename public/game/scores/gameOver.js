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
    if (document.getElementById("username").value !== ""){
        sessionStorage.removeItem("score");
        sessionStorage.setItem("username", document.getElementById("username").innerHTML);
        window.open ('scoreboard.html','_self',false);
    }
}
