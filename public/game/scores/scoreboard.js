window.onload = function() {
  fetch('scoreboard.json')
  .then(response => response.json())
  .then(data => display(data.scores));
}

function display(scores){
  let table = document.createElement("TABLE");
  //let data = Object.keys(scores[0]);
  generateTable(table, scores);
  //generateTableHead(table, data);
  document.body.appendChild(table); 
}

/*function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}*/

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
