// GlobalScope: {

//     console.group(`Global Scope`);

//     CodeScope: {

//         console.group(`Code Scope`);

//             let startBtn = document.getElementById(`startBtn`);
//             let softResetBtn = document.getElementById(`softResetBtn`);
//             let perimetersBtn = document.getElementById(`perimetersBtn`);
//             let hardResetBtn = document.getElementById(`hardResetBtn`);
//             let helpBtn = document.getElementById(`helpBtn`);

//             let btnName = ``;
//             let btnCounter = ``;
            
//             let startBtnCounter = 0;
//             let softResetBtncounter = 0;
//             let perimetersBtncounter = 0;
//             let hardResetBtncounter = 0;
//             let helpBtncounter = 0;
            
           

//             let ctrlBtnMsg = `You have pressed the ${btnName} ${btnCounter} times`

//             // console.log(`You have pressed the help buttcounter} times!`);ton${helpBu


//             let totalTileCounter = 0;
//             let markingCounter = 0;
//             let popCounter = 0;

//             startBtn.addEventListener("click", function(){
//                 btnName = `Start`;
//                 btnCounter = startBtnCounter;
//                 startBtnCounter++;
//                 console.log(ctrlBtnMsg);
//             });
            
//             softResetBtn.addEventListener("click", function(){
//                 btnName = `Reset Board`;
//                 btnCounter = softResetBtncounter;
//                 softResetBtncounter++;
//                 console.log(ctrlBtnMsg);
//             });
            
//             perimetersBtn.addEventListener("click", function(){
//                 btnName = `Perimeters`;
//                 btnCounter = perimetersBtncounter;
//                 perimetersBtncounter++;
//                 console.log(ctrlBtnMsg);
//             });
            
//             hardResetBtn.addEventListener("click", function(){
//                 btnName = `Reset Scores`;
//                 btnCounter = hardResetBtncounter;
//                 hardResetBtncounter++;
//                 console.log(ctrlBtnMsg);
//             });
            
//             helpBtn.addEventListener("click", function(){
//                 btnName = `Help`;
//                 btnCounter = helpBtncounter;
//                 helpBtncounter++;
//                 console.log(ctrlBtnMsg);
//             });

            DebuggingScope: {
                
                console.groupCollapsed(`Debugging Scope`);
                let checkPerimeter = function(tile, newTile) {
          
                        for(let i = 0; i < tiles.length - 1; i++) {
                            let newTile = tiles[i-width-1]
                            console.log('')
                            for(let j = i + 1; j < tiles.length; j++) {
                               console.log(`i is ${i} and j is ${j}`)
                                if(tiles[j].classList.contains('cleared')) {
                                    // console.log(`emptyPoppedChain`)
                                    clickTile(tiles[j])
                                }
                            }
                        }
                    };

                    twoSum([1,2,3], 5)
                console.groupEnd(`Debugging Scope`);
            };

//             DebuggingScope: {
                
//                 console.groupCollapsed(`Debugging Scope`);
        
//                 console.groupEnd(`Debugging Scope`);
//             };

//             DebuggingScope: {
                
//                 console.groupCollapsed(`Debugging Scope`);
        
//                 console.groupEnd(`Debugging Scope`);
//             };

//         console.groupEnd(`Code Scope`);
//     };
//     console.groupEnd(`Global Scope`);
// };



