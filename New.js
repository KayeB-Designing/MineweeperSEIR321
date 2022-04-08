globalScope: {

    console.clear()


    console.group(`Code Scope`)

        const gameBoard = document.querySelector('.gameboardGrid')
        let width = 5
        let size = width * width
        let tiles = []

        let minesTotal = 2
        
        

        function startGame() {

            const activeMines = Array(minesTotal).fill(`💣`)
            const emptyTiles = Array(size - minesTotal).fill(`safe`)
            let debugMsg 
            const activeGame = emptyTiles.concat(activeMines)
            const activeGameShuffled = activeGame.sort(() => Math.random()-0.5)
            

            for(let i = 0; i < size; i++){
                const tile = document.createElement('div')
                tile.setAttribute('id', i)

                

                gameBoard.appendChild(tile)
                tiles.push(tile)
                debugMsg = `Mines Total: ${minesTotal} 
                Mines Array: ${activeMines} 
                Safe Tiles Array: ${emptyTiles} 
                Active Game Array: ${activeGame}
                Active Game Shuffled Array ${activeGameShuffled}`
            }
            console.log(debugMsg)
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
                    // use the .fill method to pass through a string value for the mines
                    // create a const variable named emptyTiles =
                    // use the Array() to pass through the total tiles - tiles with mines
                    // use the .fill method to pass through a string value for not a mine
                    

                    console.log(`Debugging verification inside fn`)

                    // combine the two new arrays and mix them up randomly
                    // set a const variable named activeGame = 
                    // use the .concat() on the safe tiles array and pass through the active mines array
                    // set a const variable named activeGameShuffled =
                    // using the .sort() on the active game array
                    // pass through another fn to get a random number using math.rando
                    // then subtract 0.5 so is goes somewhere in the middle of the array
                        // -1 = the begging of the array
                        // -0 = the end of the array

                    console.log(`Debugging verification inside fn`)

                    // go back into the for loop and give each tile a class relative to it's fill value (active mine vs safe tile)
                    console.log()
                    console.log()


                console.groupEnd(``)
            }

            debuggingScope1: {
                console.groupCollapsed(`Debugging Scope`)
                console.groupEnd(``)
            }

            debuggingScope1: {
                console.groupCollapsed(`Debugging Scope`)
                console.groupEnd(``)
            }

            debuggingScope1: {
                console.groupCollapsed(`Debugging Scope`)
                console.groupEnd(``)
            }
    console.groupEnd(`Code Scope`)
}



