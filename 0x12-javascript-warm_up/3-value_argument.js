#!/usr/bin/node
const args = process.argv.slice(2);
const firstArgument = args[0];

if (firstArgument) {
  console.log(firstArgument);
} else {
  console.log("No argument");
}
