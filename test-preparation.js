const compressString = (input) => {
	let result = "";
	let counter = 1;

	for (let i = 0; i < input.length; i++) {
		if (i === input.length - 1 || input[i] != input[i + 1]) {
			result += (counter > 1 ? counter : "") + input[i];

			counter = 1;
		} else {
			counter++;
		}
	}

	return result;
};

// console.log(compressString("aaaabccc")); // Output: "4ab3c"
// console.log(compressString("aabbbcccccddd")); // Output: "2a3b5c3d"
// console.log(compressString("abcdef")); // Output: "abcdef"
// console.log(compressString("aaaaaaaaaabbekfffjjjj"));

const squarePattern = (n) => {
	let result = "";

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			result += "*";
		}
		result += "\n";
	}

	return result;
};

// console.log(squarePattern(5));

const halfSquarePaterrn = (n) => {
	let result = "";

	for (let i = 0; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			result += "*";
		}
		result += "\n";
	}

	return result;
};

// console.log(halfSquarePaterrn(5));

const reverseHalfSqurePattern = (n) => {
	let result = "";
	let subs = n;

	for (let i = 0; i <= n; i++) {
		for (let j = 0; j < subs; j++) {
			result += "*";
		}

		result += "\n";
		subs -= 1;
	}

	return result;
};

const hollowSquare = (n) => {
	let string = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === n - 1) {
				string += "*";
			} else if (j === 0 || j === n - 1) {
				string += "*";
			} else {
				string += " ";
			}
		}

		string += "\n";
	}
	return string;
};
// console.log(hollowSquare(5));

const rightTriangle = (n) => {
	let string = "";

	for (let i = 0; i <= n; i++) {
		for (let k = 0; k < n - i; k++) {
			string += " ";
		}

		for (let j = 0; j < i; j++) {
			string += "*";
		}

		string += "\n";
	}

	return string;
};

const hollowTriangle = (n) => {
	let str = "";

	for (let i = 0; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			if (i === n) {
				str += "*";
			} else if (j === 0 || j === i - 1) {
				str += "*";
			} else {
				str += " ";
			}
		}
		str += "\n";
	}

	return str;
};

const pyramid = (n) => {
	let str = "";

	for (let i = 0; i < n; i++) {
		for (let j = 0; j <= n - i; j++) {
			str += " ";
		}

		for (let k = 0; k <= 2 * i; k++) {
			str += "*";
		}
		str += "\n";
	}

	return str;
};

// console.log(pyramid(5));

const reversePyramid = (n) => {
	let str = "";

	for (let i = 0; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			str += " ";
		}
		for (let k = 1; k <= 2 * (n - i) - 1; k++) {
			str += "*";
		}
		str += "\n";
	}

	return str;
};

// console.log(reversePyramid(5));

const fizzBuzz = () => {
	let output = [];

	for (let i = 1; i < 101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			output.push("fizzBUZZ");
		} else if (i % 3 === 0) {
			output.push("fizz");
		} else if (i % 5 === 0) {
			output.push("Buzz");
		} else {
			output.push(i);
		}
	}

	return output;
};

const bouncingBall = (height, bounce, window) => {
	if (
		height <= 0 ||
		bounce <= 0 ||
		bounce >= 1 ||
		window >= height ||
		height === undefined ||
		bounce === undefined ||
		window === undefined
	) {
		return -1;
	} else {
		let seen = 0;

		while (height > window) {
			seen++;
			height *= bounce;

			if (height > window) {
				seen++;
			}
		}
		return seen;
	}
};

const lowestTwoInteger = (numbers) => {
	let firstMin = Number.MAX_SAFE_INTEGER;
	let secondMin = Number.MAX_SAFE_INTEGER;

	if (numbers.length < 4) {
		return "array element minimum is 4";
	} else {
		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i] < firstMin) {
				secondMin = firstMin;
				firstMin = numbers[i];
			} else if (numbers[i] < secondMin) {
				secondMin = numbers[i];
			}
		}
		return firstMin + secondMin;
	}
};

const sumOfOddNumbers = (n) => {
	let result = 1;
	let realResult = 0;
	for (let i = 1; i <= n; i++) {
		realResult = result;
		for (let j = 1; j <= i; j++) {
			result += 2;
			if (j < n) {
				realResult += result;
			}
		}
	}
	return realResult;
};

const onesAndZero = (arr) => {
	let result = 0;
	let count = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		count++;
		if (arr[i] === 1) {
			result += Math.pow(2, count - 1);
		}
	}
	return result;
};

const identicalElement = (first, second) => {
	const joinArray = first.concat(second);
	let temp = [];
	let result = [];

	for (let i = 0; i < joinArray.length; i++) {
		if (temp.includes(joinArray[i])) {
			if (result.indexOf(joinArray[i]) == -1) {
				result.push(joinArray[i]);
			}
		} else {
			temp.push(joinArray[i])
		}
	}

	return result;
};

const identicalElement2 = (first, second) => {
	const firstSet = new Set(first);
	const secondSet = new Set(second);
	const intersection = [...firstSet].filter((element) =>
		secondSet.has(element)
	);
	return intersection;
};

const identicalElement3 = (first, second) => {
	const set1 = new Set(first)
	const result = new Set()

	for (const iterator of second) {
		if (set1.has(iterator)) {
			result.add(iterator)
		}
	}

	return Array.from(result)
}

const array_1 = [1, 2, 3, 4, 10, 4];
const array_2 = [3, 15, 5, 6, 8, 9, 1, 1, 11, 12, 13, 4, 4, 1];
// expected output = [ 3, 4]
console.log(identicalElement3(array_1, array_2));
// console.log(lowestTwoInteger([10, 343445353, 3453445, 3453545353453]));
