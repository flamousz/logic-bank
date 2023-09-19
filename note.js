function binary(a, b) {
	let reverseResult = [];

	let decimalResult = a + b;

	for (let i = decimalResult; i > 0; i--) {
		let remainder = 0;
		remainder = decimalResult;
		remainder %= 2;
		remainder >= 1 ? reverseResult.unshift(1) : reverseResult.unshift(0);
		decimalResult /= 2;

		if (decimalResult < 1) {
			break;
		}
	}

	return `"${reverseResult.join("")}" (${a} + ${b} = ${
		a + b
	} in decimal or ${reverseResult.join("")} in binary)`;
}

/**
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 * 
 *  a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"
 */

function longest(s1, s2) {
	// your code
    const totalLetter = s1.concat(s2)
    let arr = []

    for(let i = 0; i<totalLetter.length; i++){
        if (arr.indexOf(totalLetter[i]) === -1) {
            arr.push(totalLetter[i])
        }
    }

	return arr.sort().join('');
}

console.log(longest("abcdefghijklmnopqrstuvwxyz", 'abcdefghijklmnopqrstuvwxyz'));

let str = ''

	for(let i=0; i<n; i++){
		for(let j=0; j <= n-i; j++) {
			str+= ' '
		}

		for(let k=0; k <= 2*i; k++) {
			str+= '*'
		}

		str+= '\n'
	}

	return str