var playername = window.prompt("what is your robot's name?")

// Note the lack of quotation marsk around playername
console.log(playername)
console.log("this logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// ??
console.log("our robot name is" + playername);
// this creates a function named "fight"
function fight() {
    window.alert("The fight has begun!");
}

fight()