const yargs = require("yargs");
const { demandOption } = require("yargs");

const command = process.argv[2];

yargs.command({
  command: "add",
  describe: "add numbers",
  builder: {
    first: {
      describe: "first number",
      demandOption: true,
      type: "number",
    },
    second: {
      describe: "second number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`first: ${argv.first}`);
    console.log(`second: ${argv.second}`);
    console.log(argv.first + argv.second);
  },
});

yargs.command({
  command: "sub",
  describe: "subtract numbers",
  builder: {
    first: {
      describe: "first number",
      demandOption: true,
      type: "number",
    },
    second: {
      describe: "second number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log(`first: ${argv.first}`);
    console.log(`second: ${argv.second}`);
    console.log(argv.first - argv.second);
  },
});

yargs.command({
  command: "mult",
  handler: function (argv) {
    console.log(yargs.argv._[1] * yargs.argv._[2]);
  },
});

yargs.command({
  command: "pow",
  handler: function (argv) {
    console.log(Math.pow(yargs.argv._[1], yargs.argv._[2]));
  },
});

yargs.parse();
console.log(yargs.argv);
