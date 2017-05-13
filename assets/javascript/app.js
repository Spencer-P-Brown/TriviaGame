$(document).ready(function() {
	var startBtn = $(".startBtn");
	var resetBtn = $(".resetBtn");
	var time = 3
	
	function showQuiz() {
		var quizzes = [
			{
				question: "Al Capone",
				choices: ["Telephone", "Trombone", "Funny Bone", "Bank Loan"],
				answer: "Telephone"
			},
			{
				question: "Kettle and Hob",
				choices: ["Boorish Snob", "Uncle Bob", "Fob (Pocket Watch)", "Squab (Young Domestic Pigeon"],
				answer: "Fob (Pocket Watch)"
			},
			{
				question: "Adam and Eve",
				choices: ["Retrieve", "Grieve", "Believe", "Leave"],
				answer: "Believe"
			},
			{
				question: "Buther's Hook",
				choices: ["Book", "Look", "Rook", "Inglenook"],
				answer: "Look"
			},
			{
				question: "Barnet Fair",
				choices: ["Hair", "Grizzly Bear", "Rocking Chair", "Mare"],
				answer: "Hair"
			},
			{
				question: "Trouble and Strife",
				choices: ["Fife", "Wife", "Life", "Knife"],
				answer: "Wife"
			},
			{
				question: "A la Mode",
				choices: ["Load", "Toad", "Goad", "Code"],
				answer: "Code"
			},
			{
				question: "Ruby Murray",
				choices: ["Curry", "In a Hurry", "Worry", "Scurry"],
				answer: "Curry"
			},
			{
				question: "Jack Jones",
				choices: ["Stones", "Drone", "Moans", "Alone"],
				answer: "Alone"
			},
			{
				question: "Barney Rubble",
				choices: ["Trouble", "Bubble", "Stubble", "Double"],
				answer: "Trouble"
			},


		]
		for(var i = 0; i < quizzes.length; i++){
			var quiz = quizzes[i];
			console.log('here')
			console.log(quiz)
			// <div class="question">
			// 				<h3>{Barnet Fair}</h3>
			// 				<input type="radio" name="q5" value={'a'}>Hair
			// 				<input type="radio" name="q5" value="b">Grizzly Bear
			// 				<input type="radio" name="q5" value="c">Rocking Chair
			// 				<input type="radio" name="q5" value="d">Mare
			// 				<br>
			// </div>
			var quizDiv = $("<div class='question'></div>")
			var question = $("<h3>" + quiz.question + "</h3>")
			$(quizDiv).append(question);

			for(var k = 0; k < quiz.choices.length; k++){
				var choice = quiz.choices[k];
				console.log(choice);
				var choiceInput = $("<input type='radio' name=" + i + " value=" + choice + " ><span>" + choice + "</span><br>");
				$(quizDiv).append(choiceInput);
			}

			$(quizDiv).append($("<br>"));
			$(".mainGame").append(quizDiv);
		}

	}

	function endScreen() {
		$(".start").hide();
		$(".middle").hide();
		$(".end").show();
	};
//
	startBtn.click(function() {
		showQuiz(); 
		$(".start").hide();
		$(".middle").show();
		setInterval(function(){
			time--;
			$(".timer").text(time);
			if(time === 0){
				endScreen();
			}
		}, 1000);



	});

	$("form").submit(function(){
			endScreen();
			event.preventDefault();
	});

	resetBtn.click(function(){
		window.location.reload();
	});


});