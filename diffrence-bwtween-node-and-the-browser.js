//!node vs the browser
//in node there is the process and global object
//global- all the files of my application (same as the window object of the browser)
//process-process is object inside global,represnting the current nodeJS process
//TODOin the browser there is the window and document object

//in node we can set the enviroment
//meaning that we dont care what is the browswer type

//in node there is no DOM
//and no CSS

//node is non-blocking
// meaning the I-O operations in node are async

//TODObrowser has the ES6 module system
//in node there is the common-js module system
//module system- bundle of js files and functionalities (reusable piece of js code that exports specific objects that the code depends upon)
//web applications with real-time, two-way connections,
// where both the client and server can initiate communication,
// allowing them to exchange data freely. This is in stark contrast to the
// typical web response paradigm, where the client always initiates communication.

// Compared to traditional web-serving techniques where each connection (request)
//spawns a new thread, taking up system RAM and eventually maxing-out at the amount of RAM
// available, Node.js operates on a single-thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections held in the event loop

//!client side script
// client-side script is a program that is processed within the client browser.
// These kinds of scripts are small programs which are downloaded,
// compiled and run by the browser.

//!servewr side
//node js works via his file system
//fs module to access physical file system
