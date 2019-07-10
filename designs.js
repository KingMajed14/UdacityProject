

//**
/* @description When size is submitted by the user, call makeGrid()
*/
function makeGrid() {

  //initilize variables by getting elements from HTML page using their ID
  var pixelGrid = document.getElementById("pixelCanvas");
  // Select size input
  var widthValue = document.getElementById("inputWidth").value;
  var heightValue = document.getElementById("inputHeight").value;

  //reset the grid size and colors on submit
  pixelGrid.innerHTML="";

  /*
  n = height
  m = width
  we loop through the height to append a new tr element to pixelGrid
  while also looping through width to append td element to the gridRow
  */
  for(n = 0; n <  heightValue; n++){
    var gridRow = document.createElement("tr");
    for(m = 0; m <  widthValue; m++){
      //gridRow.innerHTML+="<td>   </td>";
      var gridCell = document.createElement("td");
      gridRow.appendChild(gridCell);
      //add event listeners to td elements for click events to change color.
      gridCell.addEventListener("click", function(c) {
        // Select color input
        var color = document.getElementById("colorPicker").value;
        c.target.style.backgroundColor=color;
      })
    }
    pixelGrid.appendChild(gridRow);
  }
}
