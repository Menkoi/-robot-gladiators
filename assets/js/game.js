var playerName = window.prompt("what is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

var playerMoney = 10;

var enemyName = "roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack Variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove players health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has" + playerHealth + " health remaining."
        );

        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died ");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
       var confirmskip = window.confirm("Are you sure you'd like to quit");

       //if yes (true), then leave fight
       if (confirmskip) {
           window.alert(playerName + " has decided to skip this fight. Goobye!");
           //subtract money from playerMoney for skipping
           playerMoney = playerMoney - 2;
       }
       // if no (false), ask question again by running fight() again
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

    //subtract the value of player attack from the value of enemyhealth and use that result to update the value in the enemyhealth var
      enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
    );

    // check enemy health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    //subtract the value of enemyattack for the value of playerhealth and use that result to update the value in the enemyhealth var
    playerHealth = playerHealth -enemyAttack;
    //log a resulting message so we know that it worked
    console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining "
    );

    // check player health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
};

fight();