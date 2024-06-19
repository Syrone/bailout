import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const heroSwipers = document.querySelectorAll('.hero-swiper')

heroSwipers?.forEach((el) => {
	const pagination = el.querySelector('.swiper-pagination')

	new Swiper(el, {
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 24
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 40
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 50
			}
		}
	});
})