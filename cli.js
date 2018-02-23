#!/usr/bin/env node
"use strict";
const meow = require("meow");
const open = require("open");
const url = require("url");
const validUrl = require("valid-url");

const cli = meow(`
	Usage
	  $ pomodoron [url]

	Examples
	  $ pomodoron https://www.youtube.com/watch?v=SNfXwN5JQvg
`);

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

// HACKME:
let targetURL = "";

const pomodoron = (input, opts) => {
	if (typeof input !== "string" || !validUrl.isUri(input)) {
		throw new Error(`Expected a URL, got "${input}"`);
	}
	targetURL = input;
	opts = opts || {};
	workTime();
};

function workTime() {
	console.log("Work time start. [25 minutes]");
	setTimeout(breakTime, 25 * 60 * 1000);
}

function breakTime() {
	console.log("Break time start. [5 minutes]");
	open(targetURL);
	setTimeout(workTime, 5 * 60 * 1000);
}

try {
	pomodoron(cli.input[0] || "");
} catch (e) {
	console.error(e.message);
}
