const sortirString = (input) => {
	const arr = [];

	for (const iterator of input) {
		arr.push(iterator);
	}

	let cont1 = 1;
	for (let i = 0; i < arr.length; i++) {
        console.log(cont1++, "< iterator i");
        let cont2 = 1;
		for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
        console.log(arr, "< ARR");
	}

	return arr.join("");
};

// console.log(sortirString("aksjbfiwe")); // abefijksw
console.log(sortirString("1273469181")); // 112346789
