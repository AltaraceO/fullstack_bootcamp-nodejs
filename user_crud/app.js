const yargs = require("yargs");
const { demandOption } = require("yargs");
const users = require("./users.js");

//create
yargs.command({
  command: "create",
  describe: "create users",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

//delete
yargs.command({
  command: "delete",
  describe: "delete users",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.removeUser(argv.name);
  },
});

//update
yargs.command({
  command: "update",
  describe: "update users",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    newEmail: {
      describe: "user name",
      demandOption: true,
    },
  },
  handler(argv) {
    users.updateUser(argv.name, argv.newEmail);
  },
});

//read
yargs.command({
  command: "read",
  describe: "show users",
  handler(argv) {
    users.readUsers();
  },
});

yargs.parse();
