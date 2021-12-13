import test from "ava";
import util from "util";
import { execFile } from "child_process";

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

test("Validation error work", async (t) => {
	const { stdout, stderr } = await util.promisify(execFile)("./cli.js", [
		"toshino",
	]);
	t.is(stderr, 'Expected a URL, got "toshino"\n');
});

test("Validation error work2", async (t) => {
	const { stdout, stderr } = await util.promisify(execFile)("./cli.js");
	t.is(stderr, 'Expected a URL, got ""\n');
});
