const findDuplicates = (input) => {
	let arr = [];
	let result = [];

	for (let i = 0; i < input.length; i++) {
		if (arr.includes(input[i])) {
			if (result.indexOf(input[i]) === -1) {
				result.push(input[i]);
			}
		} else {
			arr.push(input[i]);
		}
	}

	return result;
};

const findDuplicatesSet = (input) => {
	let seen = new Set();
	let duplicate = new Set();

	for (let i = 0; i < input.length; i++) {
		if (seen.has(input[i])) {
			duplicate.add(input[i]);
		} else {
			seen.add(input[i]);
		}
	}

	return Array.from(duplicate);
};

// console.log(findDuplicates([1, 2, 2, 3, 4, 4, 4, 5])); // Should return [2, 4]
// console.log(findDuplicatesSet([1, 2, 2, 3, 4, 4, 4, 5])); // Should return [2, 4]

const findCommonElements = (arr1, arr2) => {
	let result = [];

	for (let i = 0; i < arr2.length; i++) {
		if (arr1.includes(arr2[i])) {
			if (result.indexOf(arr2[i]) === -1) {
				result.push(arr2[i]);
			}
		} else {
			arr1.push(arr2[i]);
		}
	}

	return result;
};

// console.log(findCommonElements([3, 4, 5, 6], [1, 2, 3, 4])); // Should return [3, 4]

const removeDuplicates = (input) => {
	const inputSet = new Set(input);
	let result = new Set();

	for (const iterator of input) {
		if (inputSet.has(iterator)) {
			result.add(iterator);
		}
	}

	return Array.from(result);
};

const removeDuplicates2 = (input) => {
	let result = [];

	for (let i = 0; i < input.length; i++) {
		if (result.indexOf(input[i]) === -1) {
			result.push(input[i]);
		}
	}

	return result;
};

function removeDuplicates3(arr) {
	let result = [];
	let seen = {};

	for (let i = 0; i < arr.length; i++) {
		if (!seen[arr[i]]) {
			result.push(arr[i]);
			seen[arr[i]] = true;
		}
	}

	return result;
}

console.log(removeDuplicates3([1, 9, 1, 2, 2, 3, 4, 4, 4, 5])); // Should return [1, 2, 3, 4, 5]
