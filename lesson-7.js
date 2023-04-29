// OBJECTS
console.log(typeof []);

const grades = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(typeof grades);

grades.push('invalid')

console.log(grades)

const cup = {
	color: 'white',
	type: 'tea cup',
	owner: 'dad',
}

// accessing array properties
console.log(grades[2])

// accessing object properties
console.log(cup.owner)
console.log(cup.color)
console.log(cup.type)

console.log(cup);

function printHobbies(hobbies) {
	for (let index = 0; index < hobbies.length; index++) {
		console.log(hobbies[index])
	}
}

const person = {
	name: 'Buhari',
	age: 500,
	gender: 'male',
	skinTone: 'dark',
	hobbies: ['hiking', 'swimming'],
	location: {
		city: 'lagos',
		country: 'Nigeria',
	},
	isAGraduate: false,
	introducePerson: function() {
		return `${person.name} is a ${person.age}-year old ${
			person.gender}, and he lives in ${
				person.location.city}, ${person.location.country}, he has a ${
					person.skinTone} skin tone and his hobbies are ${
						person.hobbies[0]} and ${person.hobbies[1]}`
	}
}

console.log(person.introducePerson())
// console.log(introducePerson())

const students = {
	names: ['john', 'james', 'mark'],
	push: function(name) {
		students.names[students.names.length] = name
	},
}

students.push('ishaya')
students.push('kendra')
students.push('samuel')
students.push('jane')


console.log(students.names)

// function introducePerson(person) {
// 	return `${person.name} is a ${person.age}-year old ${
// 		person.gender}, and he lives in ${
// 			person.location.city}, ${person.location.country}, he has a ${
// 				person.skinTone} skin tone and his hobbies are ${
// 					person.hobbies[0]} and ${person.hobbies[1]}`
// }

// console.log(introducePerson(person));

person.height = 12

console.log(person)
console.log(person.height)