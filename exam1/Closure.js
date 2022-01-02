function Event(time, place) {
    function getTime() {
        return time + " hour(s)"
    }

    function getPlace() {
        return place
    }

    return {
        getTime,
        getPlace
    }
}

function DataType(time, place, type, unit) {
    function getType() {
        return type
    }

    function getUnit() {
        return unit
    }

    return {
        ...Event(time, place),
        getType,
        getUnit
    }
}

const data = DataType(1, 2, 3, 4)

console.log(data.getUnit())
console.log(data.getPlace())
console.log(data.getType())
console.log(data.getTime())