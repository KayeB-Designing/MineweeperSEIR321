globalScope: {

    console.clear()


    console.group(`Code Scope`)

        const gameBoard = document.querySelector('.gameboardGrid')
        let width = 5
        let size = width * width
        let tiles = []

        let minesTotal = 2
        
        

        function startGame() {

            const activeMines = Array(minesTotal).fill(`mine`)
            const emptyTiles = Array(size - minesTotal).fill(`safe`)
            let debugMsg 
            const activeGame = emptyTiles.concat(activeMines)
            const activeGameShuffled = activeGame.sort(() => Math.random()-0.5)
            

            for(let i = 0; i < size; i++){
                const tile = document.createElement('div')
                tile.setAttribute('id', i)
                tile.classList.add(activeGameShuffled[i])
                gameBoard.appendChild(tile)
                tiles.push(tile)
                debugMsg = `Mines Total: ${minesTotal} 
                Mines Array: ${activeMines} 
                Safe Tiles Array: ${emptyTiles} 
                Active Game Array: ${activeGame}
                Active Game Shuffled Array ${activeGameShuffled}`
            }
            console.log(debugMsg)

            for(let i = 0; i < tiles.length; i++) {
                let perimeterTotal = 0
                const leftEdgeTile = (i % width === 0)
                const rightEdgeTile = (i % width === width-1)

                if(tiles[i].classList.contains('safe')) {
                    if(i > 0 && !leftEdgeTile && tiles[i-1].classList.contains('mine'))
                        perimeterTotal++
                    if(i > 9 && !rightEdgeTile && tiles[i+1 -width].classList.contains('mine'))
                        perimeterTotal++
                    tiles[i].setAttribute('perimeterValue', perimeterTotal)
                    
                }

            }
            console.log()
        }

        startGame()

            debuggingScope1: {

                console.group(`Debugging Scope`)

                    // grab gameboardGrid div
                    // set width to 5 
                    // set size of grid (width/length)

                    console.log(`The game board grid element is`)
                    console.log(gameBoard)
                    console.log(`The game board grid element is a typeof`)
                    console.table(typeof gameBoard)
                    console.log(`Width is equal to`)
                    console.log(width)
                    console.log(`size is equal to ${size} tiles`)


                    // create board tiles with startgame()
                    // let i = 0 so it resets for each loop
                    // to verify place vvv after start game fn after for loop
                    // console.log(`created tiles`)

                    console.log(``)
                    console.log(`created game board tiles`)
                    console.log(startGame)

                    // globally set a mines per game amount
                    // insisde the start game fn create an array to hold placed bombs 
                    // set a const variable named activeMines = 
                    // use the Array() method to pass through the mines total
                        // The Array() constructor is used to create Array objects
                            // A JavaScript array is initialized with the given elements
                    // use the .fill method to pass through a string value for the mines
                        // .fill() fills all the elements with the value passed as the arguement
                            // .fill("HTMLattribute", valueAsAVariable || "value as a string")
                    // create a const variable named emptyTiles =
                    // use the Array() to pass through the total tiles - tiles with mines
                    // use the .fill method to pass through a string value for not a mine
                    

                    console.log(`Debugging verification inside fn: debugMsg `)

                    // combine the two new arrays and mix them up randomly
                    // set a const variable named activeGame = 
                    // use the .concat() on the safe tiles array and pass through the active mines array
                        // .concat() is applied to one array and passed another array as an arguentment and joins them together
                            // adds the array passed as an argument onto the end of the array the method was applied to
                    // set a const variable named activeGameShuffled =
                    // using the .sort() on the active game array
                        // sort() method sorts an array alphabetically
                    // pass through another fn to get a random number using math.rando
                    // then subtract 0.5 so is goes somewhere in the middle of the array
                        // -1 = the begging of the array
                        // -0 = the end of the array (same as math.rando with nothing following it)

                    console.log(`Displays above in Code Scope`)

                    // go back into the for loop and give each tile a class relative to it's fill value 
                        // (active mine vs safe tile)
                        // use element.classList
                            // Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
                                // The DOMTokenList interface represents a set of space-separated tokens.
                                    // A DOMTokenList is indexed beginning with 0 as with JavaScript Array objects.
                                        // so essentially we're getting a list of classes set to tile elements
                            // Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
                                // Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
                                    // so essentially this is a DRY way to add a class to each tile div created
                        // element.classList(arrayName[i]) <- because we are doing this for each item in the array

                    console.log(`CSS div.bomb bg-color changed to verify
                    As well as refreshed numerous times to verify randomness of bomb placement`)

                    // the next step is to get numbers around my mines
                    // need another for foop 
                        // for (let i = 0; i < the length of the tile array; i++)
                            // so for each tile in the tiles list do this
                                // check the id's around it to define it's perimeter
                                    // check for numbers left and right on grid
                                        // make sure we ignore the tile side that are on the edges of the board
                                            // is the tile index = 0 if divided by the width
                                                // tile 0 = 0 if 0 % 5 
                                                    // index 0 and all index numbers that are a multiple of five are on the left edge (0,5,10,15,20)
                                                // tile 4 = width -1 (4) if 0 % 5 
                                                    // index 4 and all index numbers that are in in the places behind the multiples of the width
                                                        // width -1 = 4, width*2 -1 = 9 etc.
                                        // create a const variable to check for left 
                                        // create a const variable check for right edges
                                    //if the tile index number is greater than 0 and isnt a left edge and also the index number to the left (index - 1) contains a bomb then increase the numerical value for the safe squares by 1 
                                        // set a new tile attribute and console log to see if our perimeter numbers are working
                                    // check for numbers above and below on grid
                                        // make sure we ignore the tile sides that are on the top and bottom of the board


                    console.log()


                console.groupEnd(`Debugging Scope`)
            }

    console.groupEnd(`Code Scope`)
}



