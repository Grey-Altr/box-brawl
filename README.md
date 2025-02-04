# **Project 1 - Browser Game Plan**

### **Note on proposals**
In either of the following projects, I'd like the opportunity to leverage the skills covered at GA, as well as those I had gained and utilized from my prior experience at Alchemy Code Lab, and the Creative Coding AS degree program at Portland Community College (PCC) while maintaining the scope of this project assignment. Specifically, I'd like the opportunity to utilize the `<canvas>` element to render the projects. Reference materials would include notes from GA, Alchemy, PCC, as well as online documentation. Either project will only utilize **HTML**, **CSS** and vanilla **JavaScript**.

Where used references were necessary see (DRFI):
Documentation Reference For Implementation


## **Proposal 1: Simple Platform Fighter**

This game will be a simple 2-player fighting game, featuring two characters, a static level comprised of a single floating platform. Players attempt to knock each other off of the platform or deplete one another's health.

### **Features and user story**

Player will be able to:

1. Display clear instructions for the control of the player characters.
1. Move forward, backwards, jump and fall with gravity.
1. Attack one another to either knock the opponent off the platform, or deplete the opponents health.
1. Display each players health.

### **Project Schedule**

* **Day 1** - Implement player movement (walking, jumping, falling)
* **Day 2** - Implement combat mechanics (attacks, hit detection, knockback)
* **Day 3** - Implement health system and health tracking
* **Day 4** - Implement level elements (platform and background art)
* **Day 5** - Debugging and code clean-up
* **Day 6** - Presentation preparation

### **Outcome**

By the end of the week, the project will deliver a fully functional, two-player platform fighting game with:

1. Smooth movement and combat mechanics.
1. Real-time health tracking and UI updates.
1. Dynamic stage interaction with platform collisions.
1. Engaging local multiplayer battles.

# Implementation Plan and Pseudocode for Simple Platform Fighter

1. ***Game initialization:***
    - ~~Initialize canvas element in html~~
    - ~~Define get for canvas in app.js to render 2D context~~
    - ~~Define global variables~~:
        ~~- Canvas size (width, height)~~
        ~~- Gravity (value defines y axis constant)~~
1. ***Define character class:***
    - ~~Define class named "character" for player objects~~
    (DRFI: [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes))
    - Define stats for "character":
        ~~- A screen position (x, y)~~
        - A movement velocity (velocityX, velocityY)
        ~~- A size (width, height)~~
        - A health value
        - A marker to check the character is on the platform
    - Define methods for "character" to:
        ~~- Draw on screen~~
        - Track movement based on player input, knockback and gravity
        - Attacking the opponent applies knockback
        - Attacking the opponent applies damage (reduces health)
1. ***Player Setup:***
    ~~- Create two players with "character" class~~
    ~~- Assign colors to define characters 1 and 2~~
    - ~~Assign initial position for each character on platform at game start~~
1. ***Health Setup:***
    - Create health bars for each player (js or css?)
    - Assign each character's a health bar
    - Update health bars upon damage taken
1. ***Movement Setup:***
    - Define eventLister for player control:
        - Move left or right
        - Jump if player is on platform, and double-jump if in the air
        - Stop movement when key is released
1. ***Damage and Knockback Setup:***
    - Upon player hit:
        - Reduce health
        - Knock player away from opponent
    - When player health reaches zero, call winner and end game
1. ***Game Loop***
    - Clear canvas and redraw for animation
    - Draw platform
    - Initialize player positions
    - Update player positions based on gameplay
    - Register collisions between players, and players and platform
    - Update health bars based on damage taken
    - Continuously run loop at appropriate framerate
    - Call game function:
        - Starts game and animation
        - Initialize all systems for gameplay




==========================================================================

## **Proposal 2: Snake-style Game**

This game will be a Snake-style game, featuring one character, the Snake; a static level comprised of a top-down square with obstacles, stat tracking, and a timer. Players attempt to collect food before the timer counts down to zero.

### **Features and user story**

Player will be able to:

1. Display clear instructions for the control of the player character.
1. Move along the x and y axes of the the game area.
1. Collect food.
1. Track their stats through on-screen display.
1. Track time remaining for the session.

### **Project Schedule**

* **Day 1** - Implement game environment and player movement
* **Day 2** - Implement items (food)
* **Day 3** - Implement timer
* **Day 4** - Implement level elements (obstacles, boundaries)
* **Day 5** - Debugging and  code clean-up
* **Day 6** - Presentation preparation

### **Outcome**

By the end of the week, the project will deliver a fully functional, one-player 2D snake-style game:

1. Smooth movement.
1. Real-time time tracking and UI updates.
1. Dynamic stage interaction with obstacle collisions and item collection.

# Implementation Plan and Pseudocode for Snake-style game

1. ***Game initialization:***
    - ~~Initialize canvas element in html~~
    - Define get for canvas in app.js to render 2D context
    - Define global variables:
        - Canvas size (width, height)
        - Positions of random food and obstacles
        - Countdown timer
1. ***Define snake class:***
    - Define class named "snake" for player object
    - Define stats for "snake":
        - An initial screen position (x, y)
        - A movement velocity (velocityX, velocityY)
        - An initial length for "snake"
    - Define methods for "snake" to:
        - Draw on screen
        - Track movement based on player input
        - Eating food increases snake size
        
1. ***Player Setup:***
    - Create player with "snake" class
    - Assign initial position and size of snake at game start
1. ***Eaten Setup:***
    - Create create and render icon for food eaten
    - Assign counter for food eaten
    - Update counter when snake eats food
1. ***Movement Setup:***
    - Define eventLister for player control:
        - Move left, right, up and down
        - Snake always moves forward
1. ***Collision and game-over state:***
    - Colliding with walls, obstacles or tail triggers losing condition
1. ***Game Loop***
    - Clear canvas and redraw for animation
    - Draw environment with random food and obstacle generation
    - Initialize player position
    - Update player position based on gameplay
    - Register collisions between players, and players and platform
    - Update food eaten when snake eats food
    - Continuously run loop at appropriate framerate
    - Call game function:
        - Starts game and animation
        - Initialize all systems for gameplay