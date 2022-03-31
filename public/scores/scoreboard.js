window.onload = function () {
  fetch('/api/scoreboard')
    .then(response => response.json())
    .then(data => display(data.scores));
}

function display(scores) {
  scores.sort(function (obj1, obj2) {
    // Ascending: first score less than the previous
    return obj2.score - obj1.score;
  });
  let table = document.createElement("TABLE");
  //let data = Object.keys(scores[0]);
  generateTable(table, scores);
  //generateTableHead(table, data);
  document.body.appendChild(table);
}

function generateTable(table, data) {
  let i = 1
  for (let element of data) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(i);
    cell.appendChild(text);
    i++;
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
