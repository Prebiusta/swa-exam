class Event {
    constructor(time, place) {
        this.time = time
        this.place = place
    }
}

class DataType extends Event {
    constructor(time, place, type, unit) {
        super(time, place);
        this.type = type
        this.unit = unit
    }
}

const data = new DataType(1,2,3,4);
console.log(data)


