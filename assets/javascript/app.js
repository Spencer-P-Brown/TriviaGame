$(document).ready(function() {
	var startBtn = $(".startBtn");
	var resetBtn = $(".resetBtn");
	var time = 5
	
	function endScreen() {
		$(".start").hide();
		$(".middle").hide();
		$(".end").show();
	};
//
	startBtn.click(function() {
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