$(document).ready(function(){

	$('.feedrice').hide({effect: 'clip'});
	$('.feedsyria').hide({effect: 'clip'});
	$('.feedkorea').hide({effect: 'clip'});
	$('.feedukraine').hide({effect: 'clip'});

	$('.rice').on('click', function () {
		$('.rice').attr('style', 'font-weight: 600 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').show({effect: 'clip'});
		$('.feedsyria').hide({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});
	});

	$('.syria').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 600 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedsyria').show({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});
	});

	$('.korea').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 600 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedsyria').hide({effect: 'clip'});
		$('.feedkorea').show({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});
	});

	$('.ukraine').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 600 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedsyria').hide({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});
		$('.feedukraine').show({effect: 'clip'});
	});

});
