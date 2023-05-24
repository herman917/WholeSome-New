//const {storeData} = require('../assets/store-location.json')
let storeData;

fetch('../../assets/store-location.json')
  .then(response => response.json())
  .then((data) => {
                     storeData = data;
                     console.dir(data);
                  })
  .catch(error => console.log(error));

function convert() {
 
 // Get the container element where the table will be inserted
 let container = document.getElementById("Locations_wrapper");
 // Create the table element
 let table = document.createElement("table");
 table.setAttribute("id", "Locations");
 table.setAttribute("class", "Locations dataTable");
 table.setAttribute("style", "max-width:60%; margin-top: 40px");
 table.setAttribute("aria-describedby", "Locations_info");
 // Get the keys (column names) of the first object in the JSON data
 let cols = Object.keys(storeData[0]);

 // Create the header element
 let thead = document.createElement("thead");
 //table.appendChild(thead)
 let tr = document.createElement("tr");
 let tbody = document.createElement("tbody");
 
 // Loop through the column names and create header cells
 cols.forEach((item) => {
    let th = document.createElement("th");
    th.setAttribute("tabindex", "0");
    th.setAttribute("class", "sorting sorting_asc");
    th.setAttribute("aria-controls", "Locations");
    th.setAttribute("rowspan", "1");

    th.setAttribute("colspan", "1");
    th.setAttribute("aria-sort", "ascending");
    th.setAttribute("rowspan", "1");
    th.setAttribute("style", "width:72.3125px")
    th.setAttribute("aria-label", `${item}: activate to sort column descending`)
    th.innerText = item; // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
 });
 thead.appendChild(tr); // Append the header row to the header
 table.append(thead) // Append the header to the table
 
 // Loop through the JSON data and create table rows
 storeData.forEach((item) => {
    let tr = document.createElement("tr");
    
    // Get the values of the current object in the JSON data
    let vals = Object.values(item);
    
    // Loop through the values and create table cells
    vals.forEach((elem) => {
       let td = document.createElement("td");
       td.innerText = elem; // Set the value as the text of the table cell
       td.setAttribute("class", "sorting_1")
       tr.appendChild(td); // Append the table cell to the table row
    });
    tbody.appendChild(tr); // Append the table row to the table
    table.appendChild(tbody);
 });
 container.appendChild(table) // Append the table to the container element
}


document.addEventListener('DOMContentLoaded', function(){
   convert();
});
