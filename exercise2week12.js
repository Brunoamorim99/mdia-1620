const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let users = [];

let role = {
  moderator: {
    darkMode: true,
    sensitivityAmount: false,
    editAccounts: true,
    deleteAccounts: false,
    createChannels: false,
    editChannels: true,
  },
  simple: {
    darkMode: true,
    sensitivityAmount: false,
    editAccounts: false,
    deleteAccounts: false,
    createChannels: false,
    editChannels: false,
  },
  coAdmin: {
    darkMode: true,
    sensitivityAmount: true,
    editAccounts: true,
    deleteAccounts: false,
    createChannels: true,
    editChannels: true,
  }
};

let settings = {
  darkMode: true,
  sensitivityAmount: true,
  editAccounts: true,
  deleteAccounts: true,
  createChannels: true,
  editChannels: true
};

function createUser() {
  readline.question("Enter user name: ", (username) => {
    users.push({ name: username, permissions: { ...settings } });
    console.log(`${username} has been added.`);
    StartApp();
  });
}

function assignRole() {
  readline.question("Enter role (moderator/simple/coAdmin): ", (roleName) => {
    readline.question("Enter username to assign role: ", (username) => {
      let user = users.find(user => user.name === username);
      if (user && role[roleName]) {
        user.permissions = { ...role[roleName] };
        console.log(`${username} has been assigned the ${roleName} role.`);
      } else {
        console.log("User or role not found.");
      }
      StartApp();
    });
  });
}

function listUsers() {
  if (users.length === 0) {
    console.log("No users available.");
  } else {
    console.log("Users:");
    users.forEach(user => {
      console.log(`${user.name}:`, user.permissions);
    });
  }
  StartApp();
}

function assignPermissions() {
  readline.question("Enter username to assign permissions: ", (username) => {
    let user = users.find(user => user.name === username);
    if (user) {
      console.log("Current permissions: ", user.permissions);
      readline.question("Turn all permissions on/off? (on/off): ", (action) => {
        if (action === "on") {
          for (let key in user.permissions) {
            user.permissions[key] = true;
          }
          console.log("All permissions have been turned on.");
        } else if (action === "off") {
          for (let key in user.permissions) {
            user.permissions[key] = false;
          }
          console.log("All permissions have been turned off.");
        } else {
          console.log("Invalid input.");
        }
        StartApp();
      });
    } else {
      console.log("User not found.");
      StartApp();
    }
  });
}

function showPermissions() {
  if (users.length === 0) {
    console.log("No users available.");
  } else {
    users.forEach(user => {
      console.log(`${user.name}'s Permissions:`);
      for (let key in user.permissions) {
        console.log(`${key}: ${user.permissions[key]}`);
      }
    });
  }
  StartApp();
}

function StartApp() {
  readline.question("What would you like to do? (createUser, assignRole, listUsers, assignPermissions, showPermissions, quit): ", (_command) => {
    if (_command === "createUser") {
      createUser();
    } else if (_command === "assignRole") {
      assignRole();
    } else if (_command === "listUsers") {
      listUsers();
    } else if (_command === "assignPermissions") {
      assignPermissions();
    } else if (_command === "showPermissions") {
      showPermissions();
    } else if (_command === "quit") {
      readline.close();
    } else {
      console.log("Invalid command.");
      StartApp();
    }
  });
}

StartApp();
