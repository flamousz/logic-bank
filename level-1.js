const combineName = (firstName, Lastname) => {
	if (
		firstName === "" ||
		Lastname === "" ||
		firstName === undefined ||
		Lastname === undefined
	) {
		return "Invalid Input";
	}

	return `${Lastname}, ${firstName}`;
};

// console.log(combineName('john', 'doe'));
// console.log(combineName());
// console.log(combineName(''));

const split = (str) => {
	let result = "";
	for (const iterator of str) {
		if (iterator !== ",") {
			result += iterator;
		}
	}

	return result;
};

// console.log(split('1,2,3,4,5'));

const findOdd = (str) => {
	let oddNumber = 0;

	for (const iterator of str) {
		let result = iterator % 2;
		if (result !== 0) {
			oddNumber += 1;
		}
	}

	if (oddNumber === 0) {
		return "There are no odd numbers";
	}

	return `There are ${oddNumber} odd numbers`;
};

// console.log(findOdd('2'))

const isItTrue = (param1, param2) => {
	if (typeof param1 === typeof param2) {
		return true;
	} else {
		return false;
	}
};

// console.log(isItTrue('ab', 'cd')) // true
// console.log(isItTrue(1, 32)) // true
// console.log(isItTrue(true, false)) // true
// console.log(isItTrue("0", 0)) // false

const sortirString = (str) => {
	const charArray = [];

	// Convert the string to an array of characters
	for (const char of str) {
		charArray.push(char);
	}
    

	// Sort the array of characters
	for (let i = 0; i < charArray.length; i++) {
		for (let j = i + 1; j < charArray.length; j++) {
			if (charArray[j] < charArray[i]) {
				const temp = charArray[i];
				charArray[i] = charArray[j];
				charArray[j] = temp;
			}
		}
	}

	// Join the sorted characters back into a string
	const sortedStr = charArray.join("");

	return sortedStr;
};

console.log(sortirString("aksjbfiwe")); // abefijksw
console.log(sortirString("127346918")); // 112346789


function findSameOne(inputString) {
    let result = '';
    const charList = [];
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      
      if (char !== ' ' && charList.includes(char)) {
        if (result.indexOf(char) === -1) {
          result += char;
        }
      } else {
        charList.push(char);
      }
    }
  
    return result;
  }
