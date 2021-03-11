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

async function submit(){
    score = sessionStorage.getItem("score");
    username = document.getElementById("username").value
    
    if (username !== "" && score !== null){
        sessionStorage.removeItem("score");
        sessionStorage.setItem("username", username);
        
        const data = await fetch('scoreboard.json')
        .then(response => response.json())
        data.scores = data.scores.concat({ /*id: data.scores.length + 1,*/ username: username, score: score })            
        await fetch("/", { method: 'PUT', body: JSON.stringify(data) })
        window.location.href = "scoreboard.html";
        
        /*const json = '{"scores":[{"id":1,"username":"System","score":"000"}]}';
        const data = JSON.parse(json)
        alert(JSON.stringify(data.scores))
        data.scores = data.scores.concat({ id: data.scores.length + 1, username: username, score: score })
        alert(JSON.stringify(data.scores))
        alert(JSON.stringify(data))*/
    }
}
