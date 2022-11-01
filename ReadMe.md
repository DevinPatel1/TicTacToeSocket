# Tic Tac Toe Socket Project
## Project Details
<pre>
Course:         CS 370 - 01
Term:           FA 22
Team #:         2
Team Members:   Devin Patel
                Jainum Patel
                Faith Grimmeisen
</pre>

## Purpose
<p>To reinforce the concepts covered throughout the course by creating a client-server socket application.</p>

## Run Instructions
<p>To start the server, use <pre>node server.js</pre>
By default, it will run on host <pre>127.0.0.1</pre> and port <pre>58901</pre></p>

<br>

<p>To run the client, use <pre>node client.js</pre>
Adjust the host and port according to what is in server.js.
By default, client.js will run on host <pre>127.0.0.1</pre> and port <pre>58901</pre></p>


## Game Instructions
<p>client.js will have the following commands:
<pre>
MOVE &lt;cell&gt;
    "cell" denotes which spot on the board to place the mark. See the following table for cell numbers.
        0 | 1 | 2
        3 | 4 | 5
        6 | 7 | 8

QUIT
&ensp;&ensp;&ensp;&ensp;&ensp;Disconnects client
</pre></p>


## Package Dependencies
<p>This project uses NodeJs. To install NodeJs, use the following Debian/Ubuntu lines below. To install the net module, use the npm line below.</p>
<pre>
sudo apt install nodejs
sudo apt install npm
<br>
npm install net
</pre>
