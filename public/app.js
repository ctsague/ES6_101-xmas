'use strict';

document.addEventListener('DOMContentLoaded', function () {

	var tab = [];
	document.getElementById('validerSaisie').addEventListener('click', function () {

		var recupNom = document.getElementById('nom').value;
		if (recupNom === "") {
			document.getElementById('afficher').innerHTML = "Bonjour Père Noel";
		} else {
			document.getElementById('afficher').innerHTML = 'Bonjour ' + recupNom + '!';
			var li = document.createElement('li');
			var afficheNom = document.getElementById('maListe');
			afficheNom.appendChild(li);
			li.innerHTML = recupNom;
		}

		tab.push(recupNom);
		console.log(tab);
		document.getElementById('nom').value = "";
	});
});
