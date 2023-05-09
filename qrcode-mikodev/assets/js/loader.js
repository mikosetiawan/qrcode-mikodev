$(document).ready(function(){   
	window.setTimeout('fadeout();', 3000);
	
});

function fadeout(){
	$('#loader').delay(2000).fadeOut('slow', function() {
	   $('.notLoaded').removeClass('notLoaded');
	});
}
