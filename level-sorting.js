const sortirString = (input) => {
	let arr = Array.from(input);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let temp;

			if (arr[j] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	const set1 = new Set(arr);
	let result = new Set();

	for (const iterator of arr) {
		if (set1.has(iterator)) {
			result.add(iterator);
		}
	}
	// return arr = [... new Set(arr)].toString()

	return Array.from(result).toString();
};
// console.log(sortirString("aksjbfiwe")); // abefijksw
// console.log(sortirString("127238947329473984393469181")); // 112346789

const sortStringsAlphabetically = (input) => {
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			let temp;
			if (input[j][0] > input[i][0]) {
				temp = input[i];
				input[i] = input[j];
				input[j] = temp;
			}
		}
	}

	return input;
};

// console.log(sortStringsAlphabetically(["apple", "banana", "cherry", "date"]));; // Should return ["apple", "banana", "cherry", "date"]

const sortByProperty = (input, sortedType) => {

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			let temp;
			if (input[j][sortedType] > input[i][sortedType]) {
				temp = input[i];
				input[i] = input[j];
				input[j] = temp;
			}
		}
	}

	return input;
};

const people = [
	{ name: "Alice", age: 30 },
	{ name: "Daniel", age: 16 },
	{ name: "Bob", age: 25 },
	{ name: "Charlie", age: 35 },
];

const reverseArray = (input) => {
	let result = []

	for (let i = input.length-1; i >= 0; i--) {
		result.push(input[i])
	}

	return result
}

const reverse = [1, 2, 3, 4, 5]


const sortByLength = (input) => {

	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input.length; j++) {
			let temp

			if (input[j].length > input[i].length) {
				temp = input[i]
				input[i] = input[j]
				input[j] = temp
			}
		}
	}

	return input
}

const sortInput = ["apple", "banana", "cherry", "date"]


console.log(sortByLength(sortInput));  // Should return ["date", "apple", "cherry", "banana"]
