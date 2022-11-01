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
import readline from "readline"

let HOST = "127.0.0.1"
let PORT = 58901

const client = new net.Socket()
client.connect(PORT, HOST, () => {
  console.log("Connected to server")
})
client.on("data", (data) => {
  console.log(data.toString("utf-8"))
})

const reader = readline.createInterface({ input: process.stdin })
reader.on("line", (line) => {
  client.write(`${line}\n`)
})
reader.on("close", () => {
  client.end()
})
