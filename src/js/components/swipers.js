import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const resizableSwiper = (breakpoint, swiperClass, swiperConfig, callback) => {
	let swiper

	breakpoint = window.matchMedia(breakpoint)

	const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings)
		
		if (callback) callback(swiper)
	}

	const checker = function() {
		if (breakpoint.matches) {
			return enableSwiper(swiperClass, swiperConfig)
		} else {
			if (swiper !== undefined) swiper.destroy(true, true)
			return
		}
	}

	breakpoint.addEventListener('change', checker)
	checker()
}

const heroSwipers = document.querySelectorAll('.hero-swiper'),
			resizableSwipers = document.querySelectorAll('.resizable-swiper'),
			resizableTripleSwipers = document.querySelectorAll('.resizable-swiper--triple'),
			lawSwipers = document.querySelectorAll('.law-swiper')

heroSwipers?.forEach((el) => {
	const pagination = el.querySelector('.swiper-pagination')

	new Swiper(el, {
		watchSlidesProgress: true,
		pagination: {
			el: pagination,
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

resizableSwipers?.forEach((el) => {
	const pagination = el.querySelector('.swiper-pagination')
	resizableSwiper(
		'(max-width: 75rem)',
		el,
		{
			watchSlidesProgress: true,
			slidesPerView: 'auto',
			spaceBetween: 40,
			pagination: {
				el: pagination,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto',
					spaceBetween: 10
				},
				576: {
					slidesPerView: 'auto',
					spaceBetween: 10
				},
				768: {
					slidesPerView: 'auto',
					spaceBetween: 10
				},
				992: {
					slidesPerView: 'auto',
					spaceBetween: 24
				},
				1200: {
					slidesPerView: 'auto',
					spaceBetween: 32
				},
			}
		}
	)
})

lawSwipers?.forEach((el) => {
	const pagination = el.querySelector('.swiper-pagination')
	resizableSwiper(
		'(max-width: 75rem)',
		el,
		{
			watchSlidesProgress: true,
			slidesPerView: 1,
			spaceBetween: 40,
			pagination: {
				el: pagination,
				clickable: true,
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				992: {
					spaceBetween: 24,
					slidesPerView: 1,
				},
				1200: {
					spaceBetween: 32,
					slidesPerView: 1,
				},
			}
		}
	)
})