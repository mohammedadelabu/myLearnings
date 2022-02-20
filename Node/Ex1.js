#!/usr/bin/env node

"use strict";

//process.stdin.read("Hello world")

//process.stdout.write("Hello world")

// console.log("Hello world");
// console.error("Oops");
var path = require("path");
var fs = require("fs");

var args = require("minimist")(process.argv.slice(2), {
    boolean: [ "help" ],
    string: [ "file" ]
} );

if (args.help) {
    printHelp();
}
else if (args.file){
    processFile( path.resolve(args.file) );
} else {
    error("Incorrect usage.", true);
}

//console.log(process.argv.slice(2));

function error(msg,includeHelp = false) {
    console.error(msg);
    if (includeHelp) {
        console.log("");
        printHelp();
    }
}
// ********************

function processFile(filepath) {
    var contents = fs.readFileSync(filepath, "utf8");
    process.stdout.write(contents);
}
//*******************************************
//WRITING USING A COMMAND LINE SCRIPT
//#!usr/bin/env node
//"use strict"

printHelp();


function printHelp() {
    console.log("Ex1 usage:");
    console.log(" Ex1.js --help");
    console.log("");
    console.log("--help                print this help");
    console.log("");
}