let td1 = document.getElementById("td1")
let td2 = document.getElementById("td2")
let td3 = document.getElementById("td3")
let td4 = document.getElementById("td4")
let td5 = document.getElementById("td5")

function generujPalete(){
    let h = document.getElementById("kolor").value;
    td1.style = "background-color: hsl(" + h + ",100%,50%)";
    td2.style = "background-color: hsl(" + h + ",80%,50%)";
    td3.style = "background-color: hsl(" + h + ",60%,50%)";
    td4.style = "background-color: hsl(" + h + ",40%,50%)";
    td5.style = "background-color: hsl(" + h + ",20%,50%)";
}
