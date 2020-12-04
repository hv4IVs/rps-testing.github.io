const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./Assets/img/${this.textContent}.png`;
          computerHand.src = `./Assets/img/${computerChoice}.png`;
        }, 1000);

        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
      });
    });
  };

  const updateScore = () => {
    const pScore = document.querySelector(".player-score p");
    const cScore = document.querySelector(".computer-score p");

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const gameStatus = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      gameStatus.textContent = "It's a tie!!";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        gameStatus.textContent = "Player Wins!!";
        playerScore++;
        updateScore();
        return;
      } else {
        gameStatus.textContent = "Computer Wins!!";
        computerScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        gameStatus.textContent = "Computer Wins!!";
        computerScore++;
        updateScore();
        return;
      } else {
        gameStatus.textContent = "Player Wins!!";
        playerScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        gameStatus.textContent = "Computer Wins!!";
        computerScore++;
        updateScore();
        return;
      } else {
        gameStatus.textContent = "Player Wins!!";
        playerScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
