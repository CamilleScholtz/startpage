$(document).ready(function(){

	$('.feedrice').hide();
	$('.feedsyria').hide();
	$('.feedkorea').hide();
	$('.feedukraine').hide();

	$('.rice').on('click', function () {
		$('.rice').animate({color: '#F35F55'});
		$('.syria').animate({color: '#2A3F49'});
		$('.korea').animate({color: '#2A3F49'});
		$('.ukraine').animate({oolor: '#2A3F49'});

		$('.rice').attr('style', 'font-weight: 600 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedsyria').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedkorea').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedukraine').hide({effect: 'drop', direction: 'right'}, 50);

		$('.feedrice').delay('500').show({effect: 'drop', direction: 'left'}, 50);
	});

	$('.syria').on('click', function () {
		$('.rice').animate({color: '#2A3F49'});
		$('.syria').animate({color: '#F35F55'});
		$('.korea').animate({color: '#2A3F49'});
		$('.ukraine').animate({oolor: '#2A3F49'});

		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 600 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedkorea').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedukraine').hide({effect: 'drop', direction: 'right'}, 50);

		$('.feedsyria').delay('500').show({effect: 'drop', direction: 'left'}, 50);
	});

	$('.korea').on('click', function () {
		$('.rice').animate({color: '#2A3F49'});
		$('.syria').animate({color: '#2A3F49'});
		$('.korea').animate({color: '#F35F55'});
		$('.ukraine').animate({oolor: '#2A3F49'});

		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 600 !important');
		$('.ukraine').attr('style', 'font-weight: 500 !important');

		$('.feedrice').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedsyria').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedukraine').hide({effect: 'drop', direction: 'right'}, 50);

		$('.feedkorea').delay('500').show({effect: 'drop', direction: 'left'}, 50);
	});

	$('.ukraine').on('click', function () {
		$('.rice').animate({color: '#2A3F49'});
		$('.syria').animate({color: '#2A3F49'});
		$('.korea').animate({color: '#2A3F49'});
		$('.ukraine').animate({oolor: '#F35F55'});

		$('.rice').attr('style', 'font-weight: 500 !important');
		$('.syria').attr('style', 'font-weight: 500 !important');
		$('.korea').attr('style', 'font-weight: 500 !important');
		$('.ukraine').attr('style', 'font-weight: 600 !important');

		$('.feedrice').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedkorea').hide({effect: 'drop', direction: 'right'}, 50);
		$('.feedsyria').hide({effect: 'drop', direction: 'right'}, 50);

		$('.feedukraine').delay('500').show({effect: 'drop', direction: 'left'}, 50);
	});

});
