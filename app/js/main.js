(function () {
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
})();