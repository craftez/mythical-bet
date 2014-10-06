$(function(){
	if($('.deposit').length) {
		$('.deposit').popover({html : true});
		$('.withdraw').popover({html : true});
		$('.mysettings').popover({html : true});
	}
	var listDropdowns = ["#country_a","#team_a","#league_a","#country_b","#team_b","#league_b"];

	if($("#country_a").length) {
		for(var dropdown in listDropdowns) {
			$(listDropdowns[dropdown]).select2();
		}
	}

	$('.teamsbet div').on('click',function(){
	    $('.teamsbet div').removeClass('active');
	    $(this).addClass('active');
	});


	
	$('.newsticker').newsTicker({
	    row_height: 55,
	    max_rows: 3,
	    speed: 600,
	    direction: 'up',
	    duration: 4000,
	    autostart: 1,
	    pauseOnHover: 0,
	    prevButton:  $('#prev-button'),
	    nextButton:  $('#next-button')
	});

}());
