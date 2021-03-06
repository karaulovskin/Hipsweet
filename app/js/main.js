(function () {

	// SLIDER 
	$(document).ready(function(){

  		$('.slider__list').bxSlider({
  			speed : 1500
  		});
	});


	// SCROLL
	$("[href='#order-form']").click(function () {
		$("body, html").animate({
			scrollTop: $('.order').offset().top - 110
		}, 800);

		return false;
	});


	// TABS
	$('.team__nav-item').on('click', function(e){

		var
			$this = $(this);
			member = $('.member');
			ndx = $this.index();

		console.log(ndx);

		$this
			.addClass('team__nav-item--active')
			.siblings()
			.removeClass('team__nav-item--active');

		member.eq(ndx)
			.addClass('member--active')
			.siblings()
			.removeClass('member--active');

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

