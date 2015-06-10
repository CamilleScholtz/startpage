$(document).ready(function(){

	$('.feedrice').hide();
	$('.feedsyria').hide();
	$('.feedkorea').hide();
	$('.feedukraine').hide();

	$('.rice').on('click', function () {
		$('.rice').attr('style', 'font-weight: 600 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedsyria').hide({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});

		$('.feedrice').delay('650').show({effect: 'clip'});
	});

	$('.syria').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 600 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});

		$('.feedsyria').delay('650').show({effect: 'clip'});
	});

	$('.korea').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 600 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedsyria').hide({effect: 'clip'});
		$('.feedukraine').hide({effect: 'clip'});

		$('.feedkorea').delay('650').show({effect: 'clip'});
	});

	$('.ukraine').on('click', function () {
		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 600 !important');

		$('.feedrice').hide({effect: 'clip'});
		$('.feedsyria').hide({effect: 'clip'});
		$('.feedkorea').hide({effect: 'clip'});

		$('.feedukraine').delay('650').show({effect: 'clip'});
	});

});
