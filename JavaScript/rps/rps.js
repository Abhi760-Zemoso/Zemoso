function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "p") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "s") {
            return "Scissors beats paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == "p") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

function test(name, expected, actual) {
    if (expected === actual) {
      console.log(name + '\n- Test passed. Expected: ' + expected + ' is equal to Actual: ' + actual)
    } else {
      console.log(name + '\n- Test failed. Expected: ' + expected + ' is not equal to Actual: ' + actual)
    }
  }
  
  test('A string and a string: "r", "r".', 'Tie', rps('r', 'r'))

  test('A string and a string: "r", "p".', 'Paper beats rock. Player 2 wins.', rps('r', 'p'))

  test('A string and a string: "r", "s".', 'Rock beats scissors. Player 1 wins.', rps('r', 's'))
  
  test('A string and a string: "p", "p".', 'Tie', rps('p', 'p'))

  test('A string and a string: "p", "r".', 'Paper beats rock. Player 1 wins.', rps('p', 'r'))

  test('A string and a string: "p", "s".', 'Scissors beats paper. Player 2 wins.', rps('p', 's'))
  
  test('A string and a string: "s", "s".', 'Tie', rps('s', 's'))

  test('A string and a string: "s", "r".', 'Rock beats scissors. Player 2 wins.', rps('s', 'r'))

  test('A string and a string: "s", "p".', 'Scissors beats paper. Player 1 wins.', rps('s', 'p'))

  test('An incorrect string and a string: " r", "r".', 'Player 1 made an invalid selection.', rps(' r', 'r'))

  test('A string and an incorrect string: "r", " r".', 'Player 2 made an invalid selection.', rps('r', ' r'))
  
  test('A number and a string: 1, "r".', 'Player 1 made an invalid selection.', rps(1, 'r'))

  test('A string and a number: "r", 1.', 'Player 2 made an invalid selection.', rps('r', 1))