import countries from './level2/countries.js'

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

let len = ages.length
let mid, avg, max, min
max = -Infinity
min = Infinity
if (len % 2 == 1) {
  mid = ages[len >> 1] + ages[(len >> 1) - 1]
  mid /= 2
} else {
  mid = ages[len >> 1]
}
console.log(mid)

let sum = 0
ages.forEach((e) => {
  sum += e
  if (e > max) {
    max = e
  }
  if (e < min) {
    min = e
  }
})
avg = sum / len
console.log(avg, min, max, max - min, Math.abs(min - avg), max - avg)

countries.slice(0, 10)
len = countries.length
if (len & 1) {
  console.log(countries[len >> 1])
} else {
  console.log(countries.slice((len >> 1) - 1, (len >> 1) + 1))
}

countries.pop()
let front = countries.slice(0, (len + 1) >> 1)
let end = countries.slice((len + 1) >> 1, len)
console.log(front, end)
