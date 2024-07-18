let names = ["Oğuzhan", "Icardi", "Mertens", "Barış Alper Yılmaz"]

console.log(names)
console.log(names[2])

let numbers = [12, 24, 36, 48, 60]

console.log(numbers.length)

console.log(typeof names)
console.log(typeof numbers)
console.log(typeof numbers[1])

console.log(names.join("/"))
console.log(names.join(""))
console.log(typeof names.join("/"))

console.log(names.indexOf("Icardi"))
console.log(names.indexOf("Muslera"))

names.push("Kerem Aktürkoğlu")
console.log(names)

numbers.pop()
console.log(numbers)


numbers.shift()
console.log(numbers)
