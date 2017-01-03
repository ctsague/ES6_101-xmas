document.addEventListener('DOMContentLoaded', ()=> {

	
	let tab = [];
	document.getElementById('validerSaisie').addEventListener('click', () => {

		let recupNom = document.getElementById('nom').value;
		if (recupNom === "") {
			document.getElementById('afficher').innerHTML = "Bonjour Père Noel";
		}else {	
			document.getElementById('afficher').innerHTML = `Bonjour ${recupNom}!`
			let li = document.createElement('li');
			let afficheNom =document.getElementById('maListe');
			afficheNom.appendChild(li);
			li.innerHTML = recupNom;
		}

			tab.push(recupNom);
			console.log(tab);
			document.getElementById('nom').value = "";
	});
 
});