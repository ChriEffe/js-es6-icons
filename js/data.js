/*Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/


const categories = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const container = document.querySelector('.container');
createCategories(categories, container);

let animalIcon = [];
let userIcon = [];
let vegIcon = [];

categories.forEach(element => {
	switch (element.type) {
		case 'animal':
			animalIcon.push(element);
			break;
		case 'vegetable':
			vegIcon.push(element);
			break;
		case 'user':
			userIcon.push(element);
			break;
	}
});

const select = document.getElementById('categories');

select.addEventListener('click', function () {
	switch (select.value) {
		case 'all':
			container.innerHTML = '';
			categories.forEach((element) => {
				let icon = `
		    	<div class="icon">
					<i class="${element.family} ${element.prefix}${element.name} fs-2 ${element.color}"></i>
					<p>${element.name}</p>
				</div>`;
				container.innerHTML += icon;
			})
			break;
		case 'animal':
			container.innerHTML = '';
			animalIcon.forEach((element) => {
				let icon = `
		    	<div class="icon">
					<i class="${element.family} ${element.prefix}${element.name} fs-2 ${element.color}"></i>
					<p>${element.name}</p>
				</div>`;
				container.innerHTML += icon;
			})
			break;
		case 'vegetable':
			container.innerHTML = '';
			vegIcon.forEach((element) => {
				let icon = `
		    	<div class="icon">
					<i class="${element.family} ${element.prefix}${element.name} fs-2 ${element.color}"></i>
					<p>${element.name}</p>
				</div>`;
				container.innerHTML += icon;
			})
			break;
		case 'user':
			container.innerHTML = '';
			userIcon.forEach((element) => {
				let icon = `
		    	<div class="icon">
					<i class="${element.family} ${element.prefix}${element.name} fs-2 ${element.color}"></i>
					<p>${element.name}</p>
				</div>`;
				container.innerHTML += icon;
			})
			break;
	}
})

function createCategories(array, container) {
	container.innerHTML = '';

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
		const div = `
		<div class="icon">
			<i class="${element.family} ${element.prefix}${element.name} fs-2 ${element.color}"></i>
			<p>${element.name}</p>
			</div>`;
			

			container.innerHTML += div;
	}
	
}
