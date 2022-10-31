class Game {

    constructor() {
        this.player = "X"
        this.otherPlayer = "O"
        this.isTurn = true
    }

    setPlayerSymbols() {

    }

    placeInSpace(space) {
        if (isTurn) {
            document.getElementById(space).innerHTML = player;
            isTurn = false;
        }
    }

    placeInSpaceOther() {
        if (!isTurn) {
            document.getElementById(space).innerHTML = otherPlayer;
            isWinner()
        }
        isTurn = true
    }

    isWinner() {
        if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("01").innerHTML.trim() === player && document.getElementById("02").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("10").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("12").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("20").innerHTML.trim() === player && document.getElementById("21").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("10").innerHTML.trim() === player && document.getElementById("20").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("01").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("21").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("02").innerHTML.trim() === player && document.getElementById("12").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("00").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("22").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        } else if (document.getElementById("02").innerHTML.trim() === player && document.getElementById("11").innerHTML.trim() === player && document.getElementById("20").innerHTML.trim() === player) {
            isTurn = false
            alert("Winner!")
        }
    }

    isLoser() {
        if (document.getElementById("00").innerHTML.trim() === otherPlayer && document.getElementById("01").innerHTML.trim() === otherPlayer && document.getElementById("02").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("10").innerHTML.trim() === otherPlayer && document.getElementById("11").innerHTML.trim() === otherPlayer && document.getElementById("12").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("20").innerHTML.trim() === otherPlayer && document.getElementById("21").innerHTML.trim() === otherPlayer && document.getElementById("22").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("00").innerHTML.trim() === otherPlayer && document.getElementById("10").innerHTML.trim() === otherPlayer && document.getElementById("20").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("01").innerHTML.trim() === otherPlayer && document.getElementById("11").innerHTML.trim() === otherPlayer && document.getElementById("21").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("02").innerHTML.trim() === otherPlayer && document.getElementById("12").innerHTML.trim() === otherPlayer && document.getElementById("22").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("00").innerHTML.trim() === otherPlayer && document.getElementById("11").innerHTML.trim() === otherPlayer && document.getElementById("22").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        } else if (document.getElementById("02").innerHTML.trim() === otherPlayer && document.getElementById("11").innerHTML.trim() === otherPlayer && document.getElementById("20").innerHTML.trim() === otherPlayer) {
            isTurn = false
            alert("Loser!")
        }
    }
}