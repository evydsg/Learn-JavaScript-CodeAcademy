function getUserChoice (userInput){
    userInput = userInput.toLowerCase()
  
    if (userInput=== 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    }else{
      console.log("Invalid choice")
    }
  }
  
  function getComputerChoice(){
    let number = Math.floor(Math.random() *3)
  
    if(number === 0){
      return 'rock'
    }else if(number === 1){
      return 'paper'
    }else{
      return 'scissors'
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return 'tie'
    }else{
      if (userChoice === 'rock') {
      // Inner if/else to check the computer's choice
      if (computerChoice === 'paper') {
        // If the computer chose 'paper', the computer wins
        return 'The computer won! Paper beats rock.';
      } else {
        // If the computer did not choose 'paper', the user wins
        return 'You won! Rock beats scissors.';
      }
    }
    }
  }
  
  function playGame(){
    let userChoice = getUserChoice('rock')
    let computerChoice = getComputerChoice()
  
    let result = determineWinner(userChoice, computerChoice)
    return result
  }