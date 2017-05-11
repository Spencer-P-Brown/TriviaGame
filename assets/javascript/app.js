$(document).ready(function() {
	var startBtn = $(".startBtn");
	var submitForm = $(".submitForm")
	var resetBtn = $(".resettBtn");
	var time = 10
	
	function endScreen() {
		$(".start").hide();
		$(".middle").hide();
		$(".end").show();
	}
//
	startBtn.click(function() {
		$(this).hide();
		$(".middle").show();
		setInterval(function(){
			time--;
			$(".timer").text(time);
			if(time === 0){
				endScreen();
			}
		}, 1000);


	});


});