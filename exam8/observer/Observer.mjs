export function Observer(name) {
    return {
        print: function (message) {
            console.log("[" + name +"] " + message)
        }
    }
}