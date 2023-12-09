// Declare an empty array;
let a = Array()
console.log(a)

// Declare an array with more than 5 number of elements
let b = [1, 2, 3, 4, 5, 6]
console.log(b)

// Find the length of your array
console.log(b.length)

// Get the first item, the middle item and the last item of the array
console.log(b[0], b[b.length >> 1], b[b.length - 1])
// console.log(b.length >> 1);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, 2, 3, 'xxx', 'tyu', 8]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[itCompanies.length >> 1],
  itCompanies[itCompanies.length - 1]
)

// Print out each company
console.log(itCompanies.join(' '))

// Change each company name to uppercase one by one and print them out
for (let index = 0; index < itCompanies.length; index++) {
  itCompanies[index] = itCompanies[index].toUpperCase()
}
console.log(itCompanies)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies.slice(0, 6).join(', ') +
    ' and ' +
    itCompanies[6] +
    ' are big IT companies'
)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes('APPLE') ? 'APPLE' : 'APPLE is not found')

// Filter out companies which have more than one 'o' without the filter method
console.log(
  itCompanies.filter((e) => {
    cnt = 0
    for (const c of e) {
      if (c == 'o' || c == 'O') {
        cnt++
        if (cnt > 1) {
          return true
        }
      }
    }
    return false
  })
)

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// Slice out the middle IT company or companies from the array
let l = itCompanies.length

if (l % 2 == 0) {
  console.log(itCompanies.slice(l / 2 - 1, l / 2 + 1))
} else {
  console.log(itCompanies[l >> 1])
}

// Remove the first IT company from the array
console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
console.log(itCompanies)

l = itCompanies.length
if (l % 2 == 0) {
  console.log(itCompanies.splice(l / 2 - 1, 2))
} else {
  console.log(itCompanies.splice(l / 2, 1))
}

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)
