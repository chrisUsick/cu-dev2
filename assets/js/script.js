$(function (){
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

	if (isMobile) {
		$('.helper').show();
	} else {
		$('.helper').hide();
	}

	function tap (ev){
		console.log(ev.target);
		if (isMobile || ev.type != "tap") {
			$(ev.target).toggleClass('tapped');
		}

		$('.helper').hide();
		
		console.log(ev.target);
	}
	$("img.hoverScale").hammer().on('tap', tap)

	$("img.hoverScale").on('mouseenter', tap)
	$("img.hoverScale").on('mouseleave', function (ev){
		$(ev.target).removeClass('tapped');
	})

	$(".skill").hammer().on('tap', tap)
	$(".skill").on('mouseenter', tap)
	$(".skill").on('mouseleave', function (ev){
		$(ev.target).parents().removeClass('tapped');
		$(ev.target).removeClass('tapped');
	})
	// $(".skill").children().on('mouseleave', function (ev){
	// 	$(ev.target).parents().removeClass('tapped');
	// })
})