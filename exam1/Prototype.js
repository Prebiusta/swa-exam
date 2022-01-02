function Event(time, place) {
    this.time = time
    this.place = place
}

function DataType(time, place, type, unit) {
    Event.call(this, time, place)
    this.type = type
    this.unit = unit
}
DataType.prototype = Object.create(Event.prototype);
DataType.prototype.constructor = DataType;

const data = new DataType(1,2,3,4);
console.log(data)