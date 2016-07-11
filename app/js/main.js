(function () {


	// SCROLL
	$("[href='#order-form']").click(function () {
		$("body, html").animate({
			scrollTop: $('.order').offset().top - 110
		}, 800);

		return false;
	});



	// ACCORDION
	$('.accordeon__trigger').on('click', function(e){
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.accordeon__list'),
			item = $this.closest('.accordeon__item'),
			currentContent = item.find('.accordeon__text'),
			duration = 500;

		if(!item.hasClass('active')) {

			item
				.addClass('active')
				.siblings()
				.removeClass('active')
				.find('.accordeon__text')
				.stop(true, true)
				.slideUp();

			currentContent.stop(true, true).slideDown(duration);
		} else {

			item.removeClass('active');
			currentContent.stop(true, true).slideUp();
		}
	})


	// API 2GIS
		var map;

	DG.then(function () {
	    map = DG.map('map', {
	        center: [54.98, 82.89],
	        zoom: 13,
            scrollWheelZoom: false,
            fullscreenControl: false
	    });


	    myIcon = DG.icon({
	        iconUrl: 'img/map/map-marker.png',
	        iconSize: [42, 59]
	    });

	    DG.marker([54.98, 82.89], {
	        icon: myIcon
	    }).addTo(map).bindPopup('Hipsweet');
	});



})();

