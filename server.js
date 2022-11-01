/*
* Project:        Tic Tac Toe Socket Project
* Course:         CS 370 - 01
* Term:           FA 22
* Team #:         2
* Team Members:   Devin Patel
*                 Jainum Patel
*                 Faith Grimmeisen
*
* Purpose: To reinforce the concepts covered throughout
* the course by creating a client-server socket application.
* 
*/

import net from "net"

let game = null
let PORT = 58901
let HOST = "127.0.0.1"

net
  .createServer((socket) => {
    console.log("Connection from", socket.remoteAddress, "port", socket.remotePort)
    if (game === null) {
      game = new Game()
      game.playerX = new Player(game, socket, "X")
    } else {
      game.playerO = new Player(game, socket, "O")
      game = null
    }
  })
  .listen(PORT, () => {
    console.log(`Tic Tac Toe Server is running on HOST=${HOST} PORT=${PORT}`)
  })


class Game {
  // A board has nine squares. Each square is either unowned or it is owned by a
  // player. So we use a simple array of player references. If null, the corresponding
  // square is unowned, otherwise the array cell stores a reference to the player that
  // owns it.
  constructor() {
    this.board = Array(9).fill(new EmptyPlayer(" "))
  }

  hasWinner() {
    const b = this.board
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    return wins.some(([x, y, z]) => b[x].constructor.name !== "EmptyPlayer" && b[y].constructor.name !== "EmptyPlayer" && b[z].constructor.name !== "EmptyPlayer" &&  b[x].mark === b[y].mark && b[y].mark === b[z].mark)
  }

  boardFilledUp() {
    return this.board.every((square) => square.constructor.name !== "EmptyPlayer")
  }

  move(location, player) {
    if (player !== this.currentPlayer) {
      throw new Error("Not your turn")
    } else if (!player.opponent) {
      throw new Error("You do not have an opponent yet")
    } else if (this.board[location].constructor.name !== "EmptyPlayer") {
      throw new Error("Cell already occupied")
    }
    this.board[location] = this.currentPlayer
    this.currentPlayer = this.currentPlayer.opponent
  }

  toString() {
    let str = `\t${this.board[0].mark} | ${this.board[1].mark} | ${this.board[2].mark}\n
    \t${this.board[3].mark} | ${this.board[4].mark} | ${this.board[5].mark}\n
    \t${this.board[6].mark} | ${this.board[7].mark} | ${this.board[8].mark}`
    return str
  }
}

class Player {
  constructor(game, socket, mark) {
    Object.assign(this, { game, socket, mark })
    this.send(`WELCOME ${mark}`)
    if (mark === "X") {
      game.currentPlayer = this
      this.send("MESSAGE Waiting for opponent to connect")
    } else {
      this.opponent = game.playerX
      this.opponent.opponent = this
      this.opponent.send("MESSAGE Your move")
    }

    socket.on("data", (buffer) => {
      const command = buffer.toString("utf-8").trim()
      if (command === "QUIT") {
        socket.destroy()
      } else if (/^MOVE \d+$/.test(command)) {
        const location = Number(command.substring(5))
        try {
          game.move(location, this)
          this.send("VALID_MOVE")
          this.opponent.send(`OPPONENT_MOVED ${location}`)
          this.send(game.toString())
          this.opponent.send(game.toString())
          if (this.game.hasWinner()) {
            this.send("VICTORY")
            this.opponent.send("DEFEAT")
          } else if (this.game.boardFilledUp()) {
            ;[this, this.opponent].forEach((p) => p.send("TIE"))
          }
        } catch (e) {
          this.send(`MESSAGE ${e.message}`)
        }
      }
    })

    socket.on("close", () => {
      try {
        this.opponent.send("OTHER_PLAYER_LEFT")
      } catch (e) {}
    })
  }

  send(message) {
    this.socket.write(`${message}\n`)
  }
}


class EmptyPlayer {
  constructor(mark) {
    Object.assign(this, { mark })
  }
}