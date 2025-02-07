import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snake',
  templateUrl: './snake.page.html',
  styleUrl: './snake.page.scss'
})
export class SnakePage implements OnInit {
    /*Create variables that store the last render, or drawing of the screen, the direction input to increase when a button is pressed, the last input given, 
    the initial placement of the food, number of new segments, and the score*/
    lastRenderTime: number = 0;
    inputDirection = {x: 0, y: 0}
    lastInputDirection = {x: 0, y: 0}
    food = {x: 10, y: 5}
    newSegments = 0
    score = 0
    gamestarted = false;
    gameOver: boolean = false;

    //Set the constants for how the game will run
    SNAKE_SPEED = 6;
    EXPANSION_RATE = 1;
    GRID_SIZE = 21; //21 squares for the horizontal game board and 21 for the vertical game board

    /*Set where the initial snake body will be placed and the selectors for the HTML*/
    snakeBody = [{x:11, y:11}];
    gameBoard: HTMLElement | null = null; 
    scoreBoard:  HTMLElement | null = null; 
    startbutton:  HTMLElement | null = null; 
    splashScreen: HTMLElement | null = null;

    ngOnInit(): void {
      this.splashScreen = document.getElementById("splashscreen");
      this.gameBoard = document.getElementById("game-board");
      this.scoreBoard = document.getElementById("score-board");
      this.startbutton = document.getElementById("startbutton");

      //start initial animation frame request
      window.requestAnimationFrame(this.main);

      window.addEventListener('keydown', e => { //Event listenter for if Enter is pressed to start the game
        if ((e.key) == 'Enter') { //check if the key pressed is the enter key
            this.startFunction(); //if true, start the game
        }
      });
    }

    //Display start screen
    startFunction() {
        if (!this.gamestarted) {
            if (this.splashScreen) this.splashScreen.style.display = "none" //Hide the splash screen on start
            if (this.gameBoard) this.gameBoard.style.display = "grid"; //Show the game board when started
            this.enableControls() //Enable controls for the snake
            this.gamestarted = true;
            this.main();
        }
    }

    enableControls() {
        window.addEventListener('keydown', e => { //Create an event listener for a keypress
            this.lastInputDirection = this.inputDirection //Store the last input as the current input when a button is pressed
            switch (e.key) { //Switch statement for each of the arrow keys, storing the input direction as the amount of change when the board is re-drawn
                case 'ArrowUp':
                    console.log("Arrow up");
                    if (this.lastInputDirection.y !== 0) break
                    this.inputDirection = {x:0, y: -1} //Because the x or y directions start at 0 and increase from the top left, you have to subtract 1 from the y position to move up
                    break
                case 'ArrowDown':
                    if (this.lastInputDirection.y !== 0) break
                    this.inputDirection = {x:0, y: 1}
                    break
                case 'ArrowLeft':
                    if (this.lastInputDirection.x !== 0) break   
                    this.inputDirection = {x:-1, y: 0}
                    break
                case 'ArrowRight':
                    if (this.lastInputDirection.x !== 0) break
                    this.inputDirection = {x:1, y: 0}
                    break
            }
        })
    }

    main(currentTime?: any) { //Create a counter to tell the program when to redraw the screen
        window.requestAnimationFrame(this.main.bind(this)) //get the animation frame of the current function, this.main is the callback function, which will pass the animation frame in as current time
        const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000 //figures out how long it has been since last render in seconds
        if (secondsSinceLastRender < 1 / this.SNAKE_SPEED) return; //if the time is less than 1 second, exit function, do not redraw
        console.log("Render"); //debug console log
        this.lastRenderTime = currentTime //sets the last render time to the current time
        this.update() //runs the update function, advancing the game by a frame
        this.draw() //redraws the gameboard with the new frame parameters
    };

    drawSnake(gameBoard: any) { //draws the snake on the game board
        this.snakeBody.forEach(segment => { //do the following for each segment of the snake
            const snakeElement = document.createElement('div'); //create a new snake body at the new positions
            snakeElement.style.gridRowStart = segment.y.toString(); //set the new snake element y position
            snakeElement.style.gridColumnStart = segment.x.toString(); //set the new snake element x position
            snakeElement.style.backgroundColor = 'black' //add a new snake class to the new div, styling the snake body
            gameBoard.appendChild(snakeElement) //add a new snake element to the gameboard
        })
    }

    draw() { //draw the game board with the snake and food
        this.gameBoard!.innerHTML = "" //replace the gameboard with an empty string
        this.drawSnake(this.gameBoard) //call the drawsnake function, passing the game board constant into it. This redraws the snake
        this.drawFood(this.gameBoard) //same as above but for the food
    }

    update() { //update the position of each snake segment
        for (let i = this.snakeBody.length - 2; i >= 0; i--) { //select each segment and increase by the new input directions
            this.snakeBody[i + 1] = { ...this.snakeBody[i] }
        }
        this.snakeBody[0].x += this.inputDirection.x //increase the position of the head of the snake by the input directions
        this.snakeBody[0].y += this.inputDirection.y

        if(this.onSnake(this.food)) { //if onSnake(food) = true (the snake is on top of the food), add a new segment by the expansion rate amount
            this.addSegments(this.EXPANSION_RATE)
            this.food = this.getRandomFoodPosition() //generate new food position
        }
        this.checkDeath(); //finally, check if the snake is either outside of the boundary or running into itself
    }

    drawFood(gameBoard: any) { //draw a new food piece, using the same logic as drawing the snake, minus looping through each segment
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = this.food.y.toString();
        foodElement.style.gridColumnStart = this.food.x.toString();
        foodElement.style.backgroundColor = 'red'
        gameBoard.appendChild(foodElement)
    }

    onSnake(position: any, { ignoreHead = false } = {}) { 
        return this.snakeBody.some((segment, index) => {
            if ( ignoreHead && index === 0 ) return false
            return this.equalPositions(segment, position)
        })
    }

    equalPositions(pos1: any, pos2: any) {
        return (pos1.x === pos2.x && pos1.y === pos2.y)
    }

    addSegments(amount: any) {
        this.newSegments += amount //add the number of new segments to be added
        this.updateScore(); //adds a new score
        for (let i = 0; i < this.newSegments; i++) { //adds the new snake body segments to the snake 
            this.snakeBody.push({ ...this.snakeBody[this.snakeBody.length] })
        }
        this.newSegments = 0 //resets the new segments to 0
    }

    getRandomFoodPosition() { //get new food position and check if the snake is on the food position
        let newFoodPosition;
        while ((newFoodPosition == null) || this.onSnake(newFoodPosition)) {
            newFoodPosition = this.randomGridPosition()
        }
        return newFoodPosition
    }

    randomGridPosition() { //Generate a random position on the grid
        return {
            x: Math.floor(Math.random() * this.GRID_SIZE) + 1,
            y: Math.floor(Math.random() * this.GRID_SIZE) + 1
        }
    }

    checkDeath() { //check if the snake is intersecting itself or outside the grid
        this.gameOver = this.outsideGrid(this.snakeBody[0]) || this.snakeIntersection()
        
        if (this.gameOver) {
            console.log("You lost");
            window.location.reload();
            alert("You lost. Thank you for playing");
        }
    }

    outsideGrid(position: any) { //will return true if the x or y position is > the grid size or less than 1
        return (
            position.x < 1 || position.x > this.GRID_SIZE || position.y < 1 || position.y > this.GRID_SIZE 
        )
    }

    snakeIntersection() { //check if the snake is running into itself, importantly while ignoring the head of the snake
        return this.onSnake(this.snakeBody[0], { ignoreHead: true })
    }

    updateScore() { //update the score if the snake eats something. this is called within the addSegments function
        this.scoreBoard!.innerHTML = (this.score += 10).toString();
    }

}