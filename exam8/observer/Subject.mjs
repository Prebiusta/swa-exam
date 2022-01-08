export function Subject() {
    return {
        observers: [],

        addObserver: function (observer) {
            this.observers.push(observer)
        },

        notify: function (message) {
            this.observers.forEach(observer => observer.print(message))
        }
    }
}