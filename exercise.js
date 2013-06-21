people = [
	{
		firstname	: 'Natalia',
		lastname	: 'Fiero',
		height		: 63,
		interests 	: [
			'golf',
			'dressage'
		]
	},
	{
		firstname 	: 'Andy',
		lastname	: 'Andydy',
		height 		: 71,
		interests	: [
			'kites',
			'basketball'
		]
	}

];


//--

firstnames = [];
lastnames = [];
interests = [];
averageHeight = 0;
totalHeight = 0; 

for (i = 0; i < people.length; i++) {
	firstnames[i] = people[i].firstname;
	lastnames[i] = people[i].lastname;
	interests[i] = people[i].interests;
	totalHeight += people[i].height;
}
averageHeight = totalHeight / people.length;

//--

people.firstname[i];
people.lastname[i];
people.interests[i];

totalHeight = 0;  // start with setting the totalHeight as a number, 0

for (i = 0; i < people.length; i++) { // set i = 0, increments by 1 until i is people.length - 1. 
	totalHeight += people[i].height; // add the people.height value at index = 0, 1, 2... people.length to get totalHeight 
} // end loop
averageHeight = totalHeight / people.length





