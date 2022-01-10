// Node has experimental support for ES modules. To enable them we need to make some changes to the package.json file. Before following the steps make sure that Node is installed. Below are the steps to achieve the same.

// In the package.json file add “type” : “module”. Adding this enables ES6 modules.

//! Advantages of using import in place of require in nodejs:

// Import helps in selectively loading the pieces of code which are required that helps in saving memory.
// In case of require loading is synchronous whereas import can be asynchronous so it performs better than required.

// https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/
