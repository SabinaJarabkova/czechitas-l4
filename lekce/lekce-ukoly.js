//1

const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

let dispozice = document.querySelector('.dispozice');
let cistyNajem = document.querySelector('.cistyNajem')
let vymera = document.querySelector('.vymera')
let mesto = document.querySelector('.mesto')
let stav = document.querySelector('.stav')

dispozice.innerHTML = apartment.disposition;

let najem = apartment.price.rent - apartment.price.fees.water - apartment.price.fees.energy - apartment.price.fees.services

cistyNajem.innerHTML = najem + ' ' + apartment.price.currency;

vymera.innerHTML = 'Celková výmera bytu je: ' + apartment.area.floorage + ' ' + apartment.area.units + ' and ' + apartment.area.balcony + ' ' + apartment.area.units

const {city, district} = apartment;

mesto.innerHTML = city + ', ' + district;

let newState = 'taken';
stav.innerHTML = newState;

const kniha1 = {
	title: 'Harry Potter and Prince from Azkaban',
	author: 'K. Rowling',
	numberOfPages: 720,
	publishedBy: 'Pendant Publishing s.r.o',
	yearOfPublication: 2005,
	publishersAddress: {
		city: 'Prague',
		district: 'Old Town',
		streetName: 'Václavské náměstí',
		buildingNumber: 53,
		postCode: '562 23'
	}

}

const kniha2 = {
	title: 'Dívka v ledu',
	author: 'Rober Bryndza',
	numberOfPages: 448,
	publishedBy: 'Bratislava Publishing s.r.o',
	yearOfPublication: 2005,
	publishersAddress: {
		city: 'Bratislava',
		district: 'Old Town',
		streetName: 'Mojmírovo nábrežie',
		buildingNumber: 53,
		postCode: '096 35'
	}

}

let kniha = document.querySelector('.kniha')

kniha.innerHTML = kniha1.title

//3

let ockovani = document.querySelector('.ockovani');

let personName = String(prompt('Zadejte své celé jméno: '));
let personAge = Number(prompt('Zadejte svuj věk: '));

const person = {
	name: personName,
	age: personAge
}

ockovani.textContent = 'Zaockovana osoba je: ' + person.name + ' a má ' + person.age + ' let'
