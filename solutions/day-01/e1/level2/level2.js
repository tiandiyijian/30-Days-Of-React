// Q1
import countries from './countries.js'
import webTechs from './web_tech.js'

// Q2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(',', '').replace('.', '')
words = words.split(' ')
console.log(words)
console.log(words.length)

// Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Meat')
}
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

// Q4
if (countries.includes('Ethiopia')) {
  console.log('Ethiopia'.toUpperCase())
} else {
  countries.push('Ethiopia')
  console.log(countries)
}

// Q5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}

// Q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
