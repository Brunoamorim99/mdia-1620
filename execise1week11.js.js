
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let users = [];
let banned = [];
let settings = {
  addRegistry: true, 
  checkRegistry: true, 
  banPerson: true, 
  checkBans: true 
};

function AddUserToRegistry() {
  if (!settings.addRegistry) {
    console.log("Adding users to the registry is currently disabled.");
    return;
  }
  
  readline.question("Enter the name of the user to add: ", (name) => {
    
    if (banned.includes(name)) {
      console.log(`${name} is banned and cannot be added.`);
    } else if (users.includes(name)) {
      console.log(`${name} is already in the registry.`);
    } else {
      users.push(name);
      console.log(`${name} has been added to the registry.`);
    }
    StartApp();
  });
}

function CheckRegistry() {
  if (!settings.checkRegistry) {
    console.log("Checking the registry is currently disabled.");
    return;
  }

  if (users.length === 0) {
    console.log("The registry is empty.");
  } else {
    console.log("--- Registered Users ---");
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user}`);
    });
  }
  StartApp();
}

function BanUser() {
  if (!settings.banPerson) {
    console.log("Banning users is currently disabled.");
    return;
  }

  readline.question("Enter the name of the user to ban: ", (name) => {
    if (!users.includes(name)) {
      console.log(`${name} is not in the registry.`);
    } else {
      banned.push(name);
      users = users.filter(user => user !== name); 
      console.log(`${name} has been banned.`);
    }
    StartApp();
  });
}

function CheckBanned() {
  if (!settings.checkBans) {
    console.log("Checking banned users is currently disabled.");
    return;
  }

  if (banned.length === 0) {
    console.log("No users are banned.");
  } else {
    console.log("--- Banned Users ---");
    banned.forEach((user, index) => {
      console.log(`${index + 1}. ${user}`);
    });
  }
  StartApp();
}

function StartApp() {
  console.log("\nAvailable commands:");
  console.log("1. add - Add a new user to the registry.");
  console.log("2. check - View the registry.");
  console.log("3. ban - Ban a user.");
  console.log("4. checkBans - View banned users.");
  console.log("5. quit - Exit the application.");
  
  readline.question("What would you like to do? ", (_command) => {
    switch (_command.toLowerCase()) {
      case "add":
        AddUserToRegistry();
        break;
      case "check":
        CheckRegistry();
        break;
      case "ban":
        BanUser();
        break;
      case "checkbans":
        CheckBanned();
        break;
      case "quit":
        console.log("Exiting the application.");
        readline.close();
        break;
      default:
        console.log("Invalid command. Please try again.");
        StartApp();
        break;
    }
  });
}
StartApp();