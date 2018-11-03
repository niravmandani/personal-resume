 
 
  /*---------------------- 
	   Preloader
	 ----------------------------*/
	$(window).on('load', function () {
		$(".loading").animate({
			"top": "-100%"
		}, 700, function () {
			$(this).remove();
		});
		
	});
	
 
