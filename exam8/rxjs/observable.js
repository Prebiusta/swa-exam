const {Observable} = require("rxjs")

const subDorcia = {
    next: function(value) {
        console.log("Eat it " + value)
    },
    error: function (value) {

    },
    completed: function() {

    }
}

const subZuzanna = {
    next: function (value) {
        console.log("Jump over it " + value)
    },
    error: function (value) {
        console.log(value)
    }
}

const myEvent = Observable.create(function (observer) {
    observer.next("Carrot")
    observer.next("Apple")
    observer.error("Something broke")
    observer.next("Mountain")
})

myEvent.subscribe(subDorcia)
myEvent.subscribe(subZuzanna)