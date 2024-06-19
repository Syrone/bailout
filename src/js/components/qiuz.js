const quizzes = document.querySelectorAll('.quiz');

quizzes.forEach((block) => {
	const fakeStep = document.createElement('div');
	fakeStep.classList.add('quiz-step', 'quiz-step--hidden');
	block.appendChild(fakeStep);

	const steps = block.querySelectorAll('.quiz-step');
	const progress = block.querySelector('.quiz-progress');
	const value = block.querySelector('.quiz-progress-value');
	const nextBtns = block.querySelectorAll('.quiz-next-btn');
	const prevBtns = block.querySelectorAll('.quiz-prev-btn');
	const stepCount = steps.length;

	let currentStep = 0;

	function updateStep(step) {
		steps.forEach((el, index) => {
			el.classList.toggle('is-active', index === step);
		});
		const progressWidth = (step / (stepCount - 1)) * 100;
		progress.style.width = `${progressWidth}%`;
		value.textContent = `${Math.round(progressWidth)}%`;

		if (step === 0) {
			value.style.width = `${100 / stepCount}%`;
			value.classList.remove('quiz-progress-value--active');
		} else {
			value.style.width = `${progressWidth}%`;
			value.classList.add('quiz-progress-value--active');
		}
	}

	function validateStep(step) {
		const currentStepElement = steps[step];
		const inputs = currentStepElement.querySelectorAll('[data-quiz-required]');
		let isValid = true;

		inputs.forEach(input => {
			if (input.type === 'checkbox' || input.type === 'radio') {
				const checkboxes = currentStepElement.querySelectorAll(`input[name="${input.name}"]`);
				const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
				if (!isChecked) {
					isValid = false;
					checkboxes.forEach(checkbox => checkbox.setCustomValidity('Пожалуйста, выберите один из вариантов'));
				} else {
					checkboxes.forEach(checkbox => checkbox.setCustomValidity(''));
				}
			}

			if (!input.checkValidity()) {
				isValid = false;
				input.reportValidity();
			}
		});

		return isValid;
	}

	updateStep(currentStep);

	nextBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			if (currentStep < stepCount - 2 && validateStep(currentStep)) {
				currentStep++;
				updateStep(currentStep);
			}
		});
	});

	prevBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			if (currentStep > 0) {
				currentStep--;
				updateStep(currentStep);
			}
		});
	});
});