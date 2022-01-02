/*
 Factory function
 */
function Sequence(x) {
    const originalX = x

    function next() {
        x++
        return x
    }

    function reset() {
        x = originalX
    }

    return {
        next,
        reset
    }
}

const sequence1 = Sequence(12)
console.log(sequence1.next()) // 13
console.log(sequence1.next()) // 14
console.log(sequence1.next()) // 15
sequence1.reset()
console.log(sequence1.next()) // 13

const sequence2 = Sequence(0)
console.log(sequence2.next()) // 1
console.log(sequence2.next()) // 2
sequence2.reset()
console.log(sequence2.next()) // 1

/*
Constructor
 */
function Person(name, age) {
    this.name = name
    this.age = age
}

const someone = new Person("Someone", 22)
console.log(someone.name)
console.log(someone.age)

/*
Class
 */
class Car {
    constructor(name, type, range) {
        this.name = name
        this.type = type
        this.range = range
    }
}

const myCar = new Car("Tesla S", "electric", "600km")
console.log(myCar.name)
console.log(myCar.type)
console.log(myCar.range)
