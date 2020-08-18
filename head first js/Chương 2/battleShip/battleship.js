var randomLoc = Math.floor(Math.random() * 5);
var location2 = randomLoc + 1;
var location3 = randomLoc + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk !== true) {
    guess = prompt("bắn bỏ mẹ nó đi!")

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == 3 || guess == 4 || guess == 5) {
            alert("hit")
            hits++
            if (hits === 3) {
                isSunk = true
                alert("nổ rồi")
            }
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);
