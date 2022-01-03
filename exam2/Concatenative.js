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

function DataType(type, unit) {
    function getType() {
        return type
    }

    function getUnit() {
        return unit
    }

    return {
        getType,
        getUnit
    }
}

function WeatherData(value, time, place, type, unit) {
    function getValue() {
        return value
    }

    return {
        ...Event(time, place),
        ...DataType(type, unit),
        getValue
    }

    // return Object.assign({getValue}, DataType(type, unit), Event(time, place))
}

const data = DataType(1, 2, 3, 4)

console.log(data.getUnit())
console.log(data.getPlace())
console.log(data.getType())
console.log(data.getTime())