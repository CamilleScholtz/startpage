$(document).ready(function(){

	$('.rice').on('click', function () {
		$('.rice').attr('style', 'font-weight: 600 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').animate({
			width: '550px',
			height: '350px',
			opacity: '1'
		});
		$('.feedsyria').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedkorea').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedukraine').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});

	});

	$('.syria').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 600 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '550px',
			height: '350px',
			opacity: '1'
		});
		$('.feedkorea').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedukraine').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
	});

	$('.korea').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 600 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');


		$('.feedrice').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedkorea').animate({
			width: '550px',
			height: '350px',
			opacity: '1'
		});
		$('.feedukraine').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
	});

	$('.ukraine').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 600 !important');


		$('.feedrice').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedsyria').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedkorea').animate({
			width: '30px',
			height: '0px',
			opacity: '0'
		});
		$('.feedukraine').animate({
			width: '550px',
			height: '350px',
			opacity: '1'
		});
	});

});
