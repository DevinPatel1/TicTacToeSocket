var player
var otherPlayer

function setPlayerSymbols() {

}

function placeInSpace(space) {
    document.getElementById(space).innerHTML = player;
}

function isWinner() {
    if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("01").innerHTML.trim() === player && document.getElementById("02").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("10").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("12").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("20").innerHTML.trim() === player && document.getElementById("21").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("10").innerHTML.trim() === player && document.getElementById("20").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("01").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("21").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("02").innerHTML.trim() === player && document.getElementById("12").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
        alert("Winner!")
    } else if (document.getElementById("02").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("20").innerHTML.trim() === player) {
        alert("Winner!")
    }
}


