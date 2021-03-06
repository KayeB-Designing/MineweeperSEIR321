globalScope: {

    console.clear()

    console.group(`Code Scope`)

        // grab gameboard
        const gameBoard = document.querySelector('.gameboardGrid')
        // set gameboard width to 5 tiles
        let width = 5
        // set size and through that the height
        let size = (width * width) 
        // create empty tiles array
        let tiles = []
        // set number of mines on board
        let minesTotal = 1
        // create a dynamic variable to ctrack the number of bombs in a cells perimeter
        let perimeterTotal
        // set mine reveals
        const mineExplosionDisplay = '💥'
        const mineDisplay = '💣'
        // create a new array with an item for each mine set in mines total
        const activeMines = Array(minesTotal).fill(`mine`)
        // create new array with an item for each empty tile 
        const emptyTiles = Array(size - minesTotal).fill(`safe`)
        // developement variable (remove upon finalization)
        let debugMsg 
        // create a new array for a gameboard full of tiles that combines the mines array and the empty tiles array
        const activeGame = emptyTiles.concat(activeMines)
        // create a new array with the active game tiles being shuffled
        const activeGameShuffled = activeGame.sort(() => Math.random()-0.5)



        function startGame() {


            for(let i = 0; i < size; i++){
                
                const tile = document.createElement('div')
                tile.setAttribute('index', i)
                tile.setAttribute('cleared', false)
                tile.classList.add(activeGameShuffled[i])
                tile.classList.add('tile')
                tile.setAttribute('clicked', false)
                tile.setAttribute('currentClicked', false)
                gameBoard.appendChild(tile)
                tiles.push(tile)
                

                

                tile.addEventListener('click', function(e){
                    clickTile(tile)
                })
                debugMsg = `Mines Total: ${minesTotal} 
                Mines Array: ${activeMines} 
                Safe Tiles Array: ${emptyTiles} 
                Active Game Array: ${activeGame}
                Active Game Shuffled Array ${activeGameShuffled}`
            }
            console.log(debugMsg)

            for(let i = 0; i < tiles.length; i++) {
                perimeterTotal = 0
                const leftEdgeTile = (i % width === 0)
                const rightEdgeTile = (i % width === (width - 1))
            
                

                if(tiles[i].classList.contains('safe')) {

                    // check tile above
                    if(i > width && i < size && tiles[i-width].classList.contains('mine'))
                        perimeterTotal++

                    // check tile below
                    if(i >= width && tiles[i - width].classList.contains('mine'))
                        perimeterTotal++

                    // check to left
                    if(i > 0 && !rightEdgeTile && tiles[i+1].classList.contains('mine'))
                        perimeterTotal++

                    // check to right
                    if(i > 0 && !leftEdgeTile && tiles[i-1].classList.contains('mine'))
                        perimeterTotal++

                    // top right corner tile
                    // if(i >= width && i < tiles.length && tiles[(i+width)-1] !== leftEdgeTile && tiles[(i+width)-1].classList.contains('mine'))
                    //     perimeterTotal++
                    
                    // top left corner tile
                    // if(i >= 0 && i < size && !rightEdgeTile && tiles[(i+width)+1] !== rightEdgeTile && tiles[i+width+1].classList.contains('mine'))
                    //     perimeterTotal++

                    // bottom right corner tile
                    // if(i < size-width && (tiles[(i -width +1)]) < tiles.length && !rightEdgeTile && tiles[(i -width +1)].classList.contains('mine'))
                    //     perimeterTotal++

                    // bottom left corner
                    // if(i < size-width && (tiles[(i -width -1)]) < tiles.length && !rightEdgeTile && tiles[(i -width -1)].classList.contains('mine'))
                    //     perimeterTotal++
                
                     
                    

                    
                    tiles[i].setAttribute('id', perimeterTotal)

                    

                    if(perimeterTotal > 0) {
                        tiles[i].setAttribute('perimeterMine', true)
                        // tiles[i].setAttribute('cleared', true)
                    }

                    
                        

                    if(perimeterTotal === 0)
                        tiles[i].setAttribute('cleared', true)
                    
                }

            }
            console.log()
        }

        startGame()

        

        function checkPerimeter(tile, tileIndex){

            console.log(tileIndex + 'Tile is now entering the checkPerim fn')
            // console.log(tileIndex)
            
            // if(tile.classList.contains('checked')) {
            //     clickTile(topLeftPerim)
            // }
            // if(tile.classList.contains('cleared')) {
            //     clickTile()
            // }

            if(tile.id > 0) {
                console.log(`tile ${tileIndex} checked as cleared, but not zero`)
                // console.log(gameTile)
                
            
            }
            // if(tile.id === 0 && tile.classList.contains('poppedEmpty')) {
                
            //     clickTile(topLeftPerim)
            //     // topLeftPerim.clickTile()

           
            // }

            else{

                
                console.log(`tile ${tileIndex} cleared, ready to check perimeter`)
                
                let topLeftPerim = parseInt(tileIndex) - parseInt(width) - parseInt(1)

                let topLeftPerimIndex = (tileIndex-width-1)


                // checkPerimeter(rightPerim)
                console.log('checking top left perim')
                console.log(`Top Left Perimeter Index ${topLeftPerim}`)
                console.log("before adding checked class")
                console.log(topLeftPerimIndex + ' is the tile to the top and left')
                console.log(tileIndex + ' is the index of this tile target')
                console.log(tile)
                console.log('how to now click this tile')
                // topLeftPerimIndex.classList.add('checked')
                // console.log("after adding checked class")
                // console.log(tile)
                // tile.setAttribute('clicked', true)
                // tile.setAttribute('currentClicked', true)
                // clickTile(topLeftPerimIndex)
                console.log('does this work?')
                // clickTile(topLeftPerim)

                // topLeftPerim.clickTile()
                clickTile(tile)

                checkPerimeter(topLeftPerim, topLeftPerimIndex)
                
            }

                
        }



        function clickTile(tile) {


            // console.log(tiles[i])

            console.log('initial click to start recursion')

            tile.clicked = true
            tile.currentClicked = true
            // tile.classList.add('clickedTile')
            
            console.log('current click tile info')
            console.log(tile)


            // if(tile.hasAttribute('index')) {
            let tileIndex = tile.getAttribute('index')
            console.log(`Tile clicked index ${tileIndex}`)
            // }


            if(tile.classList.contains('safe') && tile.hasAttribute('clicked') && tile.hasAttribute('currentClicked')) {
                
                console.log('checking safes')

                // console.log(tile.getAttribute('index'))

                // if(tile.classList.contains('cleared') && tile.id > -1) {
                //     clickTile()
                // }

                if(tile.id > 0) {
                    console.log('checking safes greater than 0')
                    tile.setAttribute('cleared', true)
                    tile.innerText = tile.id
                    console.log('popped safe with perimeter value')
                    tile.removeAttribute('currentClicked')
                    checkPerimeter(tile, tileIndex)
                } else if (tile.id === 0 && tile.hasAttribute('cleared')){
                    console.log('checking clear cleared safes')
                    tile.classList.add('emptyPopped')
                    tile.classList.add('emptyPoppedChain')
                    console.log('popped safe')
                    tile.removeAttribute('currentClicked')
                    checkPerimeter(tile, tileIndex)
                    
                    // checkPerimeter(newTile)
                } else {
                    console.log('checking clear safes')
                    tile.classList.add('emptyPopped')
                    tile.classList.add('emptyPoppedChain')
                    console.log(tile)
                    console.log('popped safe')
                    tile.removeAttribute('currentClicked')
                    checkPerimeter(tile, tileIndex)
                    
                    // checkPerimeter(newTile)
                }


             
            
            }

                if(tile.classList.contains('mine') && tile.hasAttribute('clicked') && tile.hasAttribute('currentClicked')){

                    // console.log(tile.getAttribute('index'))

                    tile.innerText = mineExplosionDisplay
                    console.log('Game Over')

                    tiles.forEach(tile => {
                        if(tile.classList.contains('mine') && (tile.hasAttribute('clicked')) === false){
                            tile.innerText = mineDisplay
                            // console.log('Game Over')
                        }
                    })
                }

                
            console.log('recurssive click end')
            // tile.removeAttribute('currentClicked')
        }


        



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

                                    console.log(`elements show correct perimeter values`)

                    // check for numbers above and below on grid
                        // make sure we ignore the tile sides that are on the top and bottom of the board
                            // create const variable for top edge tiles = i >= 0 && i < width
                                //if i >= 0 && i < width
                            // create const variable for bottom edge tiles = i >= (width*width-width) && i < width*width

                    console.log(`refreshed multiple times to verify T+B+L+R have correct perimeter value totals being logged`)

                    // check for forward diagonal corners (BL+TR)
                        // BL = index + (width - 1)
                        // TR = index - (width + 1)
                    // check for backwards diagonal corners (TL+BR)
                        // TL = index - (width + 1)
                        // BR = index + (width + 1)


                console.groupEnd(`Debugging Scope`)
            }

    console.groupEnd(`Code Scope`)
}



