


//scroll//
(function($) {
	$(window).on("load", function() {
		$(".scroll").mCustomScrollbar();
	});
})(jQuery);
$(".scroll").mCustomScrollbar({
	theme: "dark-thin",
	setHeight: false,
	scrollInertia: 500,
	scrollEasing: "linear",
	moveDragger: true
});




$('.quantity p').click(function(event) {

	$(this).siblings('.scroll').slideToggle('open');
	return false;
});

$('.items_container ').on('click', '.item .scroll ul li', function(e) {
	var txt = $(this).text();
	$(this).closest('.scroll').siblings('p').children('span').text(txt);
	$(this).closest('.scroll').slideToggle('open');

	let pineapple = $(this).closest('.scroll').parent().parent().parent().children('h6').text() === 'pineapple';
	let barries = $(this).closest('.scroll').parent().parent().parent().children('h6').text() === 'berries';
	let grapefruit = $(this).closest('.scroll').parent().parent().parent().children('h6').text() === 'grapefruit';
	let apple = $(this).closest('.scroll').parent().parent().parent().children('h6').text() === 'apple';

	if(barries) {
		let c = $('.berries p.qta span').text(txt)
	} else if(grapefruit) {
		$('.grapefruit p.qta span').text(txt)

	} else if (apple) {
		$('.apple p.qta span').text(txt)
	}

});


$('.basket').click(function(event) {
	$('.popup').addClass('open');
	$('.overlay').addClass('open');
});
$('.popup .head').click(function(event) {

	$('.popup').removeClass('open');
	setTimeout(function() {
		$('.overlay').removeClass('open');
	}, 800)
	
	
});


$('.overlay').click(function(event) {
	$('.popup').removeClass('open');
	$('.overlay').removeClass('open');
});