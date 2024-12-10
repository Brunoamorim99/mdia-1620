/*
  This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.
  
  Here are some logistics that this application must follow
  Only add a color when the theme color is true otherwise console log that it's not allowed
  When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
  */

  /*
  planning 
  declare all colors and set them true by default. allow users to add color if it any of the 5 colors listed 
  create a toggle function to allow user to input color anf then readline asking the color.
  DisplayUserColors must come after AddUserColor and ToggleThemeColor.
  remove color from usercolor if toggle is switched from true to false.
  */


  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let userColor = [];

  let themeColor = {
    red: true,
    green: true,
    blue: true,
    yellow: true,
    orange: true,
  };
  
  // Add a fruit to the favorites list
function AddUserColor() {
    readline.question("What color would you like to add? ",_color=> {
      if (themeColor[color] === true) {
        if (!userColor.includes(color)) {
          userColor.push(color);
          console.log(`"${color}" Color has been added.`);
        } else {
          console.log(`"${color}" is already in your favorites.`);
        }
      } else if (themeColor.hasOwnProperty(color)) {
        console.log(`"${color}" is currently unavailable.`);
      } else {
        console.log(`"${color}" is not a valid color.`);
  }
      DisplayColor();
      StartApp();
  }); }

  
  function DisplayUserColor() {
    console.log("what your color?");
    userColor.forEach((color, index) => {
      console.log(`${index + 1}. ${color}`);
    });
    if (userColor.length === 0) {
      console.log("No colors yet.");
  }
    console.log();

  function ToggleThemeColor() {
    readline.question("Which color do you want to toggle? ", (color) => {}
      if (themeColor.hasOwnProperty(color)) 
  themeColor[color] = !themeColor[color];
        console.log(
          `"${color}" is now ${
            themeColoer[color] ? "colorful" : "no color"
  }
  }.`
 );
  

  
  
  function StartApp(){
    readline.question("What is your command? ", _command=>{
      if(_command === "quit"){
        readline.close();
      } else{
        StartApp();
      }
    })
  }
  
  StartApp
  ()
}
