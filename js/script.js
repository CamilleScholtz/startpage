$(document).ready(function(){

	$('.rice').on('click', function () {
		$('.rice').attr('style', 'font-weight: 600 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');


		$( "#feedrice" ).toggle({ effect: "scale", direction: "horizontal" });
	});

	$('.syria').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 600 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '100%',
			opacity: '1'
		});
		$('.feedkorea').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedukraine').animate({
			width: '0%',
			opacity: '0'
		});
	});

	$('.korea').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 600 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');


		$('.feedrice').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedkorea').animate({
			width: '100%',
			opacity: '1'
		});
		$('.feedukraine').animate({
			width: '0%',
			opacity: '0'
		});
	});

	$('.ukraine').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 600 !important');


		$('.feedrice').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedkorea').animate({
			width: '0%',
			opacity: '0'
		});
		$('.feedukraine').animate({
			width: '100%',
			opacity: '1'
		});
	});

});
