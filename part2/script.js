"use strict";
let userName = undefined;
let userHp = 40;
let grantHp = 10;
let wins = 0;
let rematch 


function startGame() {
let game = prompt("Do you want to play?");
if (game === "yes" || game === "Yes"); {
    userName = prompt("Input your name soldier!");
}
startCombat();
}
function startCombat() {
    while (grantHp > 0) {
        console.log(`${userName}'s remaining health: ${userHp -= getDamage()}`);
        console.log(`Almighty Grant's remaining health: ${grantHp -= getDamage()}`);
        if (wins >= 2 && grantHp <= 0) {
            console.log(`"Winner: ${userName}! You've defeated the Almighty Grant!"`);
            

            break;
        } else if (userHp <= 0) {
            console.log("HaHa...the Almighty Grant wins!");
            break; 
        } else if (grantHp <= 0) {
            wins++;
            grantHp = 10;
            console.log(`${userName} wins: ${wins}`);

        }
    }

} 
function getDamage() {
    return Math.floor((Math.random()* 5) + 1)
}

startGame();




// function rematch() {
//     let attack = prompt("Do you want to Attack or Quit?");
//     if (attack === "Attack" || attack === "attack");{
//     startCombat();
// } else {
//         console.log("GG hold the re:!");
//     }
// }
// ^^^^^ not a separate function. unecessary.  could do rematch as another if or else statement.
// if (game === "no");{
//     console.log("Catch you next time, scaredy-cat!");
// } ????
