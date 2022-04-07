# MineweeperSEIR321
Proper repo no issues

1.1. 
    Game Name: Minesweeper

1.4. Date of last update
    04/04/2022
2. Game Overview
    Clear the board without getting blown up

![Minesweeper Wireframe]("<a href="https://imgbox.com/7DH7BTpt" target="_blank"><img src="https://images2.imgbox.com/23/7a/7DH7BTpt_o.png" alt="image host"/></a>")

2.1. Game Concept
2.2. Target Audience
2.3. Genre(s)
    Logic/Strategy
2.4. Game Flow Summary – How does the player move through the game? Include both the
interface and the game itself.
    The game board will be set as a square withn equal length rows and columns of popable buttons. Users will pop the game board tile buttons one by one until all empty cells have been popped and all mines have been marked as mines.
2.5. Look and Feel – What is the basic look and feel of the game? What is the visual style?
3. Gameplay
3.1. Objectives – What are the objectives of the game?
    - pop all empty cells
    - mark all bombs
3.2. Game Progression
    pop buttons one by one using the numerical data provided within cells, that are connected to cels that contain bombs, to navigate around the bombs clearing (popping) the empty cells.

4. Mechanics (Key Section)
4.1. Rules – What are the rules to the game, both implicit and explicit.
    - A game board is filled with unmarked cells that may be empty, contain a mine, or contain a numerical value to indicate how many mines are in that cells perimeter (9 surrounding cells).
    - Users pop cells (left mouse click) one by way attempting to clear empty cells and mark any cells that contain a bomb. 
    - Popping and exploding a mine is a lose.
    - Use the  marker choices (right mouse click), question mark or flag, to mark the cells around the empty spaces of numerical spaces.
    - Play continues until a win is achieved or the game is ended through popping a mine or user reset.

4.7. Actions, including whatever switches and buttons are used, interacting with objects, and
what means of communication are used
    - user based click actions
        - left click to pop gameboard tiles
        - right click to cycle markers for gameboard tiles
        - right click to select control buttons
            - start button
            - reset button

6.2.1.General description and physical characteristics
    - basic webpage
        - responsive units + css grid (3 rows 1 column)
            - r1: header and stats mines remaining (+ timer + other stretch ideas if applicable)
            - r2: Game Board
                - square outline
                    - 5 button length each rows/columns
            -r3: control buttons
                - start
                - reset


___________________________________________________________________________________________

1. Done: General Layout Set
    - Basic grid set and wireframe captured
2. Working: Create buttons
    - Some button logic started last night, in my playground file, using event listeners but I am planning to redo that. I have transfered that over to current JS doc to use as my base/notes. 
        - plan use class and constructor functions to create buttons (DRY)
    - use event listeners to set a click counter for start button. 
        - If start === 0
            - do not do anything to the tile buttons
            - do not do anything with reset button
                - will have other effects on stretch features if they happen
        - If start === 1 
            - the gameboard will randomly generate hidden mines.
            - tiles will be allowed to pop and cycle markers after that logic is applied.
3. Create Gameboard:
    - use js dom create method to autopopulate buttons for gameboard tiles
    - create a function to randomly assign mines 
4. Set Button Functionality:
    - implement previous control button + command changes
    - create event listeners to change the text input for the inner html to the assigned emoji for markers as user right clicks to cycle
        - create a function that continuously cycles through an array by comparing tile click count  to %1, %2, %3 (float, even, odd) 
            -after brainstorming with Jordan I think i'm going to impliment an additional button that will determine markings, will continue to hash this out
5. Set Run Game Functions + Win Logic:
    Things I'm still hashing out and just need to actually play with:

    Creating a function to auto populate the bombs and numbers
        I'm thinking for (i === 0, i > grid tile array .length, i++) {
            - loop once and randomly place a mine
            - loop again and place a 1 in all boxes directly in the mines perimeter
                - i'm thinking maybe an html table as the game board base has possibilities.
        }

    To check for a win I am thinking I can either loop through an array of cell perimeters comparing the values set for empty mine or integer
        - or possibly instead an array of empty cells

    As for popping the surrounding empties along with the cell being popped I'm thinking that I am going to be working with a lot of event listeners with the useCapture property set to true. I have some detailed notes on use capture in my long notes.txt
6. Test and Tweak:
7. Test Again:
8. Repeat 6 + 7 til it functions
9. Style
10. Stretch Features
11. Restyle
12. Tidy and Finalize Code
13. Push and Pull
14. Go and and spend this extra time reworking my kicked back assignments




