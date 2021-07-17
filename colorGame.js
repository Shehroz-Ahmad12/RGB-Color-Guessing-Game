
var numSquares=6;
var colors=[];
var pickedColor;
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1Color=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtn= document.querySelectorAll(".mode");
init();

function init(){
    
    setUpModeButtons();
    setUpSquares();
    reset();

}

function setUpModeButtons(){
    // Difficulty Level Modes
    for(var i=0;i<modeBtn.length;i++){
        modeBtn[i].addEventListener("click", function(){
            // Removing Selected From both buttons
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numSquares=3;
            }
            else{
                numSquares=6;
            }
            reset();
        });
    }

}


function setUpSquares(){
    for(var i=0;i<squares.length;i++){
        //Assigning Squares Color once page loads up
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click", function(){
            // Storing color of square which has been clicked
            var clickedColor=this.style.backgroundColor;
            // Checking clicked and picked color
            if(clickedColor===pickedColor){
                message.textContent="Correct";
                resetButton.textContent="Play Again?";
                changeColors(clickedColor);
                h1Color.style.backgroundColor=clickedColor;
            }
            // If not correct fade out clicked square
            else{
                this.style.backgroundColor="#232323";
                message.textContent="Try Again";
            }
        });
    }

}


function reset(){
    // Generating Random Colors of number
    colors=generateRandomColors(numSquares);
    // Picking random colors from array
    pickedColor=pickColor();
    // Showing text of picked color
    colorDisplay.textContent=pickedColor;
    // Changing Display Message to Null
    message.textContent="";
    // Changing Reset Button Text 
    resetButton.textContent="New Colors";
    // Reseting header Color
    h1Color.style.backgroundColor="teal";
    // Assigning Colors to Squares from colors array
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            // Displaying blocks after changing mode
            squares[i].style.display="block";
            // Assigning colors to blocks
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            // Hiding blocks if less color are generated i.e. Easy Mode
            squares[i].style.display="none";
        }
}
}

resetButton.addEventListener("click",function(){
    reset();
});



// Change Colors of all square with correct one
function changeColors(color){
     for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=color;
     }
 }

// Pick random color from colors list
function pickColor(){
    var randomColor=Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

// Generate array of random colors depending upon size num
function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomRGB());
    }
    return arr;

}

// Generate R G B from Range 0 255
function randomRGB(){
   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);

   return "rgb("+r+", "+g+", "+b+")";
}