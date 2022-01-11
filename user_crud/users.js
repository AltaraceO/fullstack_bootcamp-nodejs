const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const createUser = (name, email) => {
  const users = getUsers();
  const newID = uuidv4();

  const dupUsers = users.find((user) => user.id === newID);

  if (!dupUsers) {
    users.push({
      name: name,
      email: email,
      id: newID,
    });
    saveUsers(users);
  } else {
    console.log("title taken");
  }
};

const saveUsers = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

const getUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeUser = (name) => {
  const users = getUsers();
  const newUsers = users.filter((user) => user.name !== name);

  if (users.length !== newUsers.length) {
    saveUsers(newUsers);
    console.log(`${name} removed`);
  } else {
    console.log("no such name");
  }
};

const updateUser = (name, newEmail) => {
  const users = getUsers();
  const foundUser = users.find((user) => user.name === name);
  foundUser.email = newEmail;
  console.log(foundUser);
  saveUsers(users);
};

const readUsers = () => {
  const users = getUsers();
  console.log("All Users");
  users.forEach((user) => console.log(user.name));
};

module.exports = {
  getUsers,
  createUser,
  removeUser,
  updateUser,
  readUsers,
};
