const button1 = document.getElementById("clickable1");
const button2  = document.getElementById("clickable2");
const table = document.querySelector("tbody");

button1.addEventListener("click", () =>{
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = "1";
    const td2 = document.createElement("td");
    td2.innerText = "Sahil";
    tr.append(td1,td2);
    table.append(tr);
}); 
