const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /*
  You are making a simple drinking store application. There are 2 parts to this
  
  1) You need the organizer to register the age of each customer coming in. You will do this using an array.
  2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"
  
  CHALLENGE 1
  Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting
  
  CHALLENGE 2
  Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.
  
  When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
  */

 /*planning  
    part1 REgister the age of each customer by making an array with RegisterUser funciton.
  part2 make it so if alcohol is true only adults can purschase it > 19 years of age, to say console log "You are allow to drink in here." if < 19 say "You are not allowed in here." and if alc setting is false say "Everyone is welcome in here!"
  challenge 1 
  challenge 2 
  */
  
  
  let drinkregistry = [];
  let setting = {
    alcohol:true
   
  };
  
  function RegisterUser(){
    if(setting.alcohol === true){
        readline.question("What is your age? ", _drink=>{ let exist = false;
      readline.question("Everyone is welcome in here!",_drink=> { let

      })  
    }
    //ask for the age with readline
    }
  
  //rename this to ToggleAlcohol
  function ToggleAlcohol(){
    //toggle alcohol setting
  }
  
  //rename this to NotifyAll
  function NotifyAll(){
    //go through the array to notify everyone
  }
  
  function StartApp(){
    readline.question("What is your command? ", _command=>{
      if(_command === "quit"){
        readline.close();
      } else{
        StartApp();
      }
    })
  }
  
  StartApp();