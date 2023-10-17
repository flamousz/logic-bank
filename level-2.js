const findSameOne = (str) => {
	let char = "";
	let charList = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== " " && charList.includes(str[i])) {
			if (char.indexOf(str[i]) === -1) {
				char += str[i];
			}
		} else {
			charList.push(str[i]);
		}
	}

	return charList;
};

console.log(findSameOne("aabbcc")); // abc
console.log(findSameOne("javascript")); // a
console.log(findSameOne("i love you")); // o
console.log(findSameOne("there are more")); // er

const findMyPet = (arr, pet) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === pet) {
				return `i can find my ${pet} on location ${i}, ${j}`;
			}
		}
	}
};

// let input1 = [
//     ['dog', 'cat', 'fish']
// ]
// console.log(findMyPet(input1, 'dog'))

// let input2 = [
//     ['dog', 'cat', 'fish'],
//     ['butterfly', 'tarantula'],
//     ['cow', "pig"]
// ]
// console.log(findMyPet(input2, 'tarantula'))

// let input3 = [
//     [' ', ' ', 'fish'],
//     [' ', 'cat', 'bird'],
//     ['dog', ' ', 'mongoose'],
//     [' ', 'fox', ' ']
// ]
// console.log(findMyPet(input3, 'fox'))

const stackMe = (str, limit) => {
	let arr = [];
	let result = [];
	for (let i = 0; i < str.length; i++) {
		arr.push(str[i]);
		if (arr.length === limit || i === str.length - 1) {
			result.push(arr);
			arr = [];
		}
	}

	return result;
};

// console.log(stackMe('abcdef', 3))
// console.log(stackMe('abcde', 2))
// console.log(stackMe('abcdefg', 3))

const addProperty = (arr) => {
	let result = {};

	for (let i = 0; i < arr.length; i++) {
		const animal = arr[i][1];
		const bodypart = arr[i][0];

		if (!result[animal]) {
			result[animal] = [];
		}

		result[animal].push(bodypart);
	}
	return result;
};

const addPropertyOf = (arr) => {
	let result = {};

	for (const [bodypart, animal] of arr) {
		!result[animal]
			? (result[animal] = [bodypart])
			: result[animal].push(bodypart);
	}

	return result;
};

let arr1 = [
	["tangan", "manusia"],
	["belalai", "gajah"],
	["gading", "gajah"],
	["kaki", "manusia"],
	["taring", "macan"],
	["paruh", "burung"],
	["cakar", "macan"],
	["sayap", "burung"],
];

// console.log(addPropertyOf(arr1));

const checkAnswer = (student, key) => {
	let arr = [];
	let arrKey = [];
	let finalAnswer = 0;
	for (let i = 0; i < student.length; i++) {
		let emptyChecker = 0;
		for (const answer of student[i]) {
			// console.log(answer);
			answer !== "" ? arr.push(answer) : (emptyChecker += 1);
		}
		if (emptyChecker === 4) {
			arr.push("e");
		}
	}
	for (let i = 0; i < key.length; i++) {
		for (const answer of key[i]) {
			// console.log(answer);
			answer !== "" ? arrKey.push(answer) : null;
		}
	}

	for (let i = 0; i < 20; i++) {
		// console.log(arr[i]);
		if (arr[i] === "e") {
			finalAnswer += 0;
		} else if (arrKey[i] === arr[i]) {
			finalAnswer += 10;
		} else if (arrKey[i] !== arr[i]) {
			finalAnswer -= 5;
		}
	}

	const persentage = (finalAnswer / 200) * 100;

	return `Siswa ini mendapatkan nilai ${persentage}%`;
};

let user1 = [
	["", "b", "", ""],
	["", "", "c", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["", "b", "", ""],
	["", "b", "", ""],
	["", "", "", "d"],
	["", "", "", "d"],
	["", "", "c", ""],
	["", "b", "", ""],
	["", "b", "", ""],
	["", "", "", ""],
	["", "", "", ""],
	["", "", "", ""],
	["", "", "c", ""],
	["a", "", "", ""],
	["", "", "", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["a", "", "", ""],
];

let key1 = [
	["", "b", "", ""],
	["", "", "c", ""],
	["", "", "", "d"],
	["a", "", "", ""],
	["", "b", "", ""],
	["", "", "c", ""],
	["", "", "", "d"],
	["", "", "c", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["a", "", "", ""],
	["", "", "", "d"],
	["", "", "c", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["", "b", "", ""],
	["a", "", "", ""],
	["", "", "c", ""],
];

// console.log(checkAnswer(user1, key1));
