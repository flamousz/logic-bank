const findDuplicates = (input) => {
    let arr = []
    let result = []

    for (let i = 0; i < input.length; i++) {
        if (arr.includes(input[i])) {
            if (result.indexOf(input[i]) === -1) {
                result.push(input[i])
            }
        } else {
            arr.push(input[i])
        }
    }

    return result
}

const findDuplicatesSet = (input) => {
    let seen = new Set()
    let duplicate = new Set()

    for (let i = 0; i < input.length; i++) {
        if (seen.has(input[i])) {
            duplicate.add(input[i])
        } else {
            seen.add(input[i])
        }
    }

    return Array.from(duplicate)
}


// console.log(findDuplicates([1, 2, 2, 3, 4, 4, 4, 5])); // Should return [2, 4]
console.log(findDuplicatesSet([1, 2, 2, 3, 4, 4, 4, 5])); // Should return [2, 4]