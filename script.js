const mySwiper = new Swiper('.swiper-container', {
	effect: "slide",
	loop: true,
	pagination: {
		el: '.swiper-pagination'
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
})