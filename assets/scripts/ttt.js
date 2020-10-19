// alert("connected")

var checks = document.querySelectorAll(".textInBox")
var boxes = document.querySelectorAll(".boxes")
var reset = document.querySelector("#Reset")
var checked = 0
var totalChecked = 9
var signs = new Array();
signs.push("X");
signs.push("O");
var message = document.querySelector(".informationArea h3")
var alternator = 0;
var winningRow = undefined

// message box gives the instructions
message.textContent = "First goes " + signs[alternator]

// alternates the game symbol
function alternate(){
	if(alternator == 0){
		alternator = 1;
	}
	else{
		alternator = 0;
	}
	}

//checks if all boxes are filled
function checkFull(){
	if(checked == totalChecked){
		return false;
		message.textContent = "FINISHED"
	}
	else{{
		return true;
	}}
	}

//hides the checks
hider();

// hides the symbols, resets the styling and restarts the game
function hider(){
	for (var i = 0; i < checks.length; i++) {
	//hide the checks at the starting of the game
	checks[i].hidden = true;
	boxes[i].classList.remove("bgColor");
			}
	}

// calls to unhide  the reset button
unhide();

// shows the reset button
function unhide(){

    		reset.hidden = false;	
	}

// to decorate once won. 
// to be set laters
function showWin(rowOrCol){

	if (rowOrCol == "row") {
		//boxes[winningRow].classList.remove("bgColor")
		//boxes[winningRow].classList.add("win");

		//boxes[winningRow+1].classList.remove("bgColor")
		//boxes[winningRow+1].classList.add("win");

		//boxes[winningRow+2].classList.remove("bgColor")
		//boxes[winningRow+2].classList.add("win");



	}

	}

// most cruicial function
// logic of the click response
// logic to completion of the game
// mapped to every button seperately
// check = symbol and box = corresponding frame

function toggle(check, box){
	
	// if a diagonal is complete or a player has won, then do nothing
	if (checkDiagonal()){
		// is a row is made then end the game
		console.log("a diagonal is made");
		}

	// if a row is complete or a player has won, then do nothing
	else if (checkRows()){
		// is a row is made then end the game
		console.log("a row is made");
		}

	// if a row is complete or a player has won, then do nothing
	else if (checkCols()) {
		// is a col is made then end the game
		console.log("a COL is made");
	}
	

	else{

	// if clicked on a hidden space then show the symbol
	if(check.hidden == true){

		check.textContent = signs[alternator]
		alternate()

		// show
		check.hidden = false;

		checked++;

		// styling effects
		box.classList.add("bgColor")

		
		// this is for end detection   and messages

    	if(checkFull()){
    	message.textContent = "now "+ signs[alternator];
		}

		else{ 
		message.textContent = "finished";
		// these two ifs are for the condition if its the last check and makes a results
		if (checkRows()) {
			console.log("won just now");

			showWin("row");
		}

		if (checkCols()) {
			console.log("won --col-- just now");

			showWin("col");
		}
		}

	
	}

	// stand alone if s
	// this is for the immidiate response to a row being completed
		if (checkRows()) {
			console.log("won just now");

			showWin("row");
		}

		if (checkCols()) {
			console.log("won --col-- just now");

			showWin("col");
		}

		if (checkDiagonal()) {

		}
	}
	}
                      


// to avoid win detection if earlier row is filled first
startingRow = 0

// ---CRUCIAL---
//checks completion of rows
function checkRows(){         

	//iters only 3 times 
	//each iteration is for one row
	for(var i = startingRow ; i < 9 ; i=i+3){

		//if any thing is hidden in a row then return false(at the end)
		//all false if row is complete                            
		if(checks[i].hidden || checks[i+1].hidden || checks[i+2].hidden){

			console.log("something is hidden")
		}


		// if all are showed
		else{
			// troubleshooting
			console.log("im here and i is " + i)

			//if everything is shown and their symbols are same too
			// winning by row
			if((checks[i].textContent == checks[i+1].textContent) &&(checks[i+1].textContent == checks[i+2].textContent)){
			
				console.log("really a row is made im here too");
			
				//for decoration purposes
				winningRow = i;

				//show message
				message.textContent = checks[i].textContent + " won the game ";
				message.classList.add("win")
				return true
			}

			// if a row is complete but signs arent same
			// while-game logic
			else{
				// solves the non winning of laters rows if earlier rows are filled
				startingRow=startingRow+3;
				
				return false;
			}
		}
	}
		return false;
}


// to avoid win detection if earlier column is filled first
startingColumn = 0
// ---CRUCIAL---
//checks completion of cols
function checkCols(){


	//iters only 3 times 
	//each iteration is for one column
	for(var i = startingColumn ; i < 3 ; i++){

		//if any thing is hidden in a column then return false(at the end)
		//all false if column is complete                            
		if(checks[i].hidden || checks[i+3].hidden || checks[i+6].hidden){

			console.log("something is hidden")
		}


		// if all are showed
		else{
			// troubleshooting
			console.log("im here and i(col) is " + i)

			//if everything is shown and their symbols are same too
			// winning by column
			if((checks[i].textContent == checks[i+3].textContent) &&(checks[i+3].textContent == checks[i+6].textContent)){
			
				console.log("really a column is made im here too");
			
				//for decoration purposes
				winningCol = i;

				//show message
				message.textContent = checks[i].textContent + " won the game ";
				message.classList.add("win")
				return true
			}

			// if a column is complete but signs arent same
			// while-game logic
			else{
				// solves the non winning of laters rows if earlier rows are filled
				startingColumn=startingColumn+1;
				
				return false;
			}
		}
	}
		return false;
}


function checkDiagonal(){

	var top1 = checks[0];
	var top2 = checks[2];
	var centre = checks[4];
	var bottom1 = checks[6];
	var bottom2 = checks[8];

	//check diagonal 1
	if (top1.hidden == false) {
		if (centre.hidden == false) {
			if (bottom2.hidden == false) {
				if (top1.textContent == centre.textContent) {
					if (centre.textContent == bottom2.textContent) {
						message.textContent = centre.textContent + " won the game ";
						message.classList.add("win")
						return true
					}
				}
			}
		}
	}

	// check diagonal 2
	if (top2.hidden == false) {
		if (centre.hidden == false) {
			if (bottom1.hidden == false) {
				if (top2.textContent == centre.textContent) {
					if (centre.textContent == bottom1.textContent) {
						message.textContent = centre.textContent + " won the game ";
						message.classList.add("win")
						return true
					}
				}
			}
		}
	}

	return false;
}



boxes[0].addEventListener("click", function(){
	toggle(checks[0], boxes[0])
})
boxes[1].addEventListener("click", function(){
	toggle(checks[1], boxes[1])
})
boxes[2].addEventListener("click", function(){
	toggle(checks[2], boxes[2])
})
boxes[3].addEventListener("click", function(){
	toggle(checks[3], boxes[3])
})
boxes[4].addEventListener("click", function(){
	toggle(checks[4], boxes[4])
})
boxes[5].addEventListener("click", function(){
	toggle(checks[5], boxes[5])
})
boxes[6].addEventListener("click", function(){
	toggle(checks[6], boxes[6])
})
boxes[7].addEventListener("click", function(){
	toggle(checks[7], boxes[7])
})
boxes[8].addEventListener("click", function(){
	toggle(checks[8], boxes[8])
})

reset.addEventListener("click" , function(){
	checked = 0;
	message.textContent = "First goes " + signs[alternator];
	message.classList.remove("win");
	startingRow = 0;
	startingColumn = 0;

	//resets the column
	hider()
})

