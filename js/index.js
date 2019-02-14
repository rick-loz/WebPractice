let listMenu = document.getElementById('menu');

let logoutLi = document.createElement("li");

logoutLi.textContent = "Logout";
logoutLi.setAttribute("class", "hidden class2");
listMenu.appendChild(logoutLi);

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("I clicked the input");

	var validated = true;

	var name = document.getElementById("name").value;

	var email = document.getElementById("email").value;

	var pswd = document.getElementById("password").value;
	var pswdConf = document.getElementById("password-conf").value;

	if(pswd !== pswdConf) {
		alert("The passwords are not the same");
		validated = false;
	}

	let numberRegex = new RegExp("[0-9]+");
	let letterRegExp = new RegExp("[a-zA-Z]+")

	if(numberRegex.exec(pswd) === null || letterRegExp.exec(pswd) === null)	{
		alert("The password does not contain at least 1 letter and 1 number");
		validated = false;
	}


	var country = document.getElementById("country");

	var selectedCountry = country.options[country.selectedIndex].value;

	if(selectedCountry === "Default") {
		alert("Select a country");
		validated = false;
	}


	var selectedGender = "";

	var genders = document.getElementsByName("gender");

	for(i = 0; i < genders.length; i++) {
		if(genders[i].checked) {
			selectedGender = genders[i].value;
		}
	}

	if(selectedGender === "") {
		alert("Select a gender");
		validated = false;
	}

	if(validated) {
		let userObject = {
			"name" : name,
			"email" : email,
			"password" : pswd,
			"country" : selectedCountry,
			"gender" : selectedGender
		};

		console.log(userObject);
	} else {
		alert("You were not validated");
	}

})


let cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", (event) => {
	event.preventDefault();

	document.getElementById("name").value = "";
	document.getElementById("email").value = ""; 
	document.getElementById("password").value = "";
	document.getElementById("password-conf").value = "";
	document.getElementById("country").selectedIndex = 0;


})
