document.addEventListener('DOMContentLoaded', ()=> {



	// [].forEach.call(document.querySelectorAll('button'), (el) => {
 //  el.addEventListener('click', ()=> {
let tab = [];
	document.getElementById('valider').addEventListener('click', () => {

		let recupNom = document.getElementById('nom').value;
		console.log(recupNom);
		
		let afficheNom =document.getElementById('afficher');	
		let li = document.createElement('li');
		afficheNom.appendChild(li);
		if (afficheNom === "") {
			afficheNom.innerHTML = "Bonjour you";
			}else {
				li.innerHTML = `Bonjour ${recupNom}!`;
			}

			tab.push(recupNom);
			console.log(tab);

	})

});