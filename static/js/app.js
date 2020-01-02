// from data.js
var tableData = data1;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

function buildtable(ufodata){
  tbody.html("")
   ufodata.forEach(function(sighting){
    console.log(sighting);
    var row = tbody.append("tr")
    Object.entries(sighting).forEach(function([key,value]){
    console.log(key,value)
    var cell = row.append("td")
    cell.text(value)
    }); 
  });
}
// Step 1: Loop Through `data` and console.log each data object
buildtable(tableData);

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
d3.event.preventDefault();
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
var filteredData = data.filter(ufoseen => ufoseen.datetime === inputValue);
buildtable(filteredData);
});
