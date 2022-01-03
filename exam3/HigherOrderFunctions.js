const people = [
    {
        age: 12,
        name: "Person 1"
    },
    {
        age: 18,
        name: "Person 2"
    },
    {
        age: 24,
        name: "Person 3"
    },
    {
        age: 31,
        name: "Person 4"
    },
    {
        age: 33,
        name: "Person 5"
    }
]

const adultFilter = (person) => person.age >= 18

const customFilter = (person) => person.age > 30

console.log(people.filter(adultFilter))
console.log(people.filter(customFilter))