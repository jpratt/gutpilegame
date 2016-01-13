;(function(){

			// Smooth Scrolling w/o any other plugins
			$(function() {
			  $(".nav li a[href^='#']").on('click', function(e) {
			  	console.log("nav click")
			   // prevent default anchor click behavior
			   e.preventDefault();
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = this.hash;
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			      	console.log(target)
			      	$('.centerStage').animate({
					    scrollTop: $(target).offset().top
					}, 500);
			      }
			    }
			  });
			});

			// Toggles FAQ answers
			$( "#toggleAnswer" ).click(function(e) {
				e.preventDefault();
  			$( 'p' ).toggleClass( "toggleThis" );
			});

			// Video Toggle
			

				var video = document.getElementById("videoElem");

				$( '#videoButton' ).click(function() {
				console.log('video button clicked');
				    video.play();	            
				});

				$('#myModal').on('hidden.bs.modal', function () { 
					console.log('Hide Video Activated');
	 				video.pause();
	 				video.currentTime = 0;
	 			});

	 			console.log("test")

})(jQuery)