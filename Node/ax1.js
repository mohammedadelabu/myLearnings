#!/usr/bin/env node

"use strict";

//process.stdin.read("Hello world")

//process.stdout.write("Hello world")

//console.log("Hello world");
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

//FOR SYNCH
function processFile(filepath) {
    const contents = fs.readFileSync(filepath, "utf8");
    process.stdout.write(contents);
}


//FOR ASYNC
function processFile(filepath) {
    fs.readFile(filepath,function onContents(err,contents) {
        if(err) {
            error(err.toString());
        } else {
            process.stdout.write(contents);
        }
    });
}

function printHelp() {
    console.log("Ex1 usage:");
    console.log(" Ex1.js --help");
    console.log("");
    console.log("--help                print this help");
    console.log("");
}

//FILE HANDLING WITH STREAMS
var stream1;    //readable
var stream2;    //writable

var stream3 = stream1
.pipe(stream2);
.pipe(stream5);
.pipe(final);

//read sync
const fs = require('fs')

function readIt(params) {
    const maze = fs.readFileSync(filepath, "utf-8")
        console.log(maze);
}

//read async
const fs = require('fs')

function name(params) {
    const com = fs.readFile(filepath, function name(err, data){
        if(err){
            error(err.toString())
        }else{
        console.log(com);
        }
    })
}