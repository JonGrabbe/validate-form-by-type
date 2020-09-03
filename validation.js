function checkForm() {
	let formElm = document.forms[0];

	let textField = false;
	let gender = false;
	let hobbies = false;
	let favoriteShow = false;
	let comments = false;

	for(let i=0; i<formElm.length; i++) {
		let element = formElm[i];
		console.log(element.type)

		if(element.type === 'text' && element.value !== '') {
			textField = true;
		}

		if(element.type === 'radio' && element.checked === true) {
			gender = true;
		}

		if(element.type === 'checkbox' && element.checked === true) {
			hobbies = true;
		}

		if(element.type === 'textarea' && element.value !== '') {
			comments = true;
		}

		if(element.type === 'select-one' && element.value !== '') {
			favoriteShow = true;
		}
	}

	if(textField && gender && hobbies && comments && favoriteShow) {
		return true;
	} else {
		if(!textField) {
			alert('You must fill out your name')
			return false;
		}

		if(!gender) {
			alert('you must select a gender')
			return false;
		}

		if(!hobbies) {
			alert('you must select a hobby')
			return false;
		}

		if(!favoriteShow) {
			alert('you must choose a favorite show')
			return false;
		}

		if(!comments) {
			alert('you must add a comment')
			return false;	
		}


		return false;
	}
}