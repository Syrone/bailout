const dropdowns = document.querySelectorAll('.dropdown')

dropdowns?.forEach((element) => {
	const btn = element.querySelector('.dropdown__btn');

	btn.addEventListener('click', (event) => {
		dropdowns.forEach((dropdown) => {
			if (dropdown !== element) {
				dropdown.classList.remove('is-show');
			}
		});

		element.classList.toggle('is-show');

		event.stopPropagation();
	});
});

document.addEventListener('click', (event) => {
	dropdowns.forEach((element) => {
		if (!element.contains(event.target)) {
			element.classList.remove('is-show');
		}
	});
});