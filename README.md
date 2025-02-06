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
        - ~~Canvas size (width, height)~~
        - ~~Gravity (value defines y axis constant)~~
1. ***Define character class:***
    - ~~Define class named "character" for player objects~~
    (DRFI: [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes))
    - ~~Define stats for "character":~~
        - ~~A screen position (x, y)~~
        - ~~A movement velocity (velocityX, velocityY)~~
        - ~~A size (width, height)~~
        - ~~A health value~~
        - ~~A marker to check the character is on the platform~~
    - ~~Define methods for "character" to:~~
        - ~~Draw on screen~~
        - ~~Track movement based on player input, knockback and gravity~~
        - ~~Attacking the opponent applies knockback~~
        - ~~Attacking the opponent applies damage (reduces health)~~
1. ***Player Setup:***
    - ~~Create two players with "character" class~~
    - ~~Assign colors to define characters 1 and 2~~
    - ~~Assign initial position for each character on platform at game start~~
1. ***Health Setup:***
    - ~~Create health bars for each player~~
    - ~~Assign each character's a health bar~~
    - ~~Update health bars upon damage taken~~
1. ***Movement Setup:***
    - ~~Define eventLister for player control~~:
        - ~~Move left or right~~
        - ~~Jump if player is on platform, and double-jump if in the air~~
        - ~~Stop movement when key is released~~
1. ***Damage and Knockback Setup:***
    - Upon player hit:
        - ~~Reduce health~~
        - ~~Knock player away from opponent~~
        - When player health reaches zero, call winner and end game
1. ***Game Loop***
    - ~~Clear canvas and redraw for animation~~
    - ~~Draw platform~~
    - ~~Initialize player positions~~
    - ~~Update player positions based on gameplay~~
    - ~~Register collisions between players, and players and platform~~
    - ~~Update health bars based on damage taken~~
    - ~~Continuously run loop at appropriate framerate~~
    - Call game function:
        - ~~Starts game and animation~~
        - ~~Initialize all systems for gameplay~~


# Project Requirements
## Technical Requirements - MVP

- [x] Render the game in the browser using the DOM manipulation techniques
demonstrated in lecture.

- [ ] Include win/loss logic and render win/loss messages in HTML. The game you chose. The game you chose must have a win/lose condition.

- [ ] Include separate HTML, CSS, JavaScript, and JavaScript data files organized in an
appropriate file structure.

- [ ] Include all required features specific to your game as defined in the Required
Features column in the table in the Recommended games document, or as
discussed with your instructor if doing a custom game.

- [ ] The game is deployed online so the rest of the world can play it.

## Code Convention Requirements

- [ ] The game can be played without encountering errors. No errors may be present in
the console in the browser.

- [ ] The code in the app adheres to coding conventions covered in lessons, like using
plural names for arrays.

- [ ] There is no remaining dead and/or commented out code or console logs outside of
a commented out Code Graveyard section of your code.

- [ ] The game may not utilize the prompt() or alert() methods.

- [ ] The game is coded using proper indentation.

## UX/UI Requirements

- [x] CSS Flexbox or Grid is used for page layout design.

- [ ] Instructions about how to play the game are included in your app.

- [ ] Colors used on the site have appropriate contrast that meet the WCAG 2.0 level AA
standard.

- [ ] All images on the site have alt text.

- [ ] No text is placed on top of an image in a way that makes that text inaccessible.

## Git and GitHub Requirements

- [x] You are shown as the only contributor to the project on GitHub.

- [ ] The GitHub repository used for the project is named appropriately. For example,
names like connect-four or adventure-game are appropriate names, whereas
game-project or ga-project are not. The repo must be publicly accessible.

- [x] Frequent commits dating back to the very beginning of the project. If you start over
with a new repo, do not delete the old one.

- [x] Commit messages should be descriptive of the work done in the commit.

## README Requirements

- [ ] Screenshot/Logo: A screenshot of your app or a logo.

- [ ] Your game's name: Include a description of your game and what it does.
Background info about the game and why you chose it is a nice touch.

- [ ] Getting started: Include a link to your deployed game and any instructions you
deem important. This should also contain a link to your planning materials.

- [ ] Attributions: This section should include links to any external resources (such as
libraries or assets) you used to develop your application that require attribution.
You can exclude this section if it does not apply to your application.

- [ ] Technologies Used: List of the technologies used, for example: JavaScript, HTML,
CSS, etc.

- [ ] Next steps: Planned future enhancements (stretch goals).

## Presentation Requirements

- [ ] Present your project in front of the class on the scheduled presentation day.

- [ ] The project you present is the project you were approved by your instructor to
build.