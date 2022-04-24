console.log("script works");

let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm-password');
let requirement = document.querySelector('.requirements');

function hideUnhide() {
	password.value === confirm_password.value
		? requirement.style.display = "none"
		: requirement.style.display = "block";
}

password.addEventListener('input', hideUnhide);
confirm_password.addEventListener('input', hideUnhide);

