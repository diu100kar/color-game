var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click',function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display='none';
		}
	}
})

hardBtn.addEventListener('click',function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	hardBtn.background=pickedColor;
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
		squares[i].style.display='block';
	}
})

resetButton.addEventListener('click', function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent=pickedColor;
	//change the color of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	resetButton.textContent = 'New Colors';
	h1.style.background = '#232323';
	messageDisplay.textContent='';
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	}) 
}

function changeColors(color){
	//loop through all squares
	for (var i=0; i<colors.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that arra
	return arr;
}

function randomColor(){
	var r = Math.floor(256*Math.random());
	var g = Math.floor(256*Math.random());
	var b = Math.floor(256*Math.random());
	return ("rgb("+r+", "+g+", "+b+")");
}