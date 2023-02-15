// tady je místo pro náš program

//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'

const address = {
	streetName: 'Pod Kaštany',
	number: 31,
	city: 'Horní Dlouhonosy',
	postalCode: '123 11',
}
 let myCity = address.city;
 //let cisloDomuUzivatele = Number(prompt('Zadej svoje číslo domu: '));

 //address.number = cisloDomuUzivatele;

 const user1 = {
	fullName: 'Lubomír Větvička',
	login: 'lubos',
	address: {
		streetName: 'Pod Kaštany',
		number: 31,
		city: 'Horní Dlouhonosy',
		postalCode: '123 11',
	},
	cartItems: 1,
};

const products = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč',
}

const {name, price, currency} = product;

//VLASTNOSTI A METODY S RETEZCI

let text = 'ahoj, kámo '

let text1 = text.toUpperCase()
let text2 = text.toLowerCase()
let text3 = text.length
let text4 = text.trim()
let text5 = text.slice(1, 5)
let text6 = text.indexOf('hoj')
let text7 = text.indexOf('nazdar')


let priklad = Number('12'.padStart(4, '0'))

const order = {
	id: 37214,
	product: 'pěnová matrace',
	delivery: '21.8.2021',
  };
  
  const { id, product, delivery } = order;
  
  document.body.innerHTML = (
	'<h2>Objednávka: ' + id + '</h2>' +
	'<p>Zboží ' + product + ' bude doručeno ' + delivery + '.</p>'
  );

  document.body.innerHTML =
	`<h2>Objednávka: ${id}</h2>` +
	`<p>Zboží ${product} bude doručeno ${delivery}.</p>`

	document.body.innerHTML =
	`<h2>Objednávka: ${String(id).padStart(8, '0')}</h2>` +
	`<p>Zboží ${product} bude doručeno ${delivery}.</p>`




