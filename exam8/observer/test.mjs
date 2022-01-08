import {Observer} from "./Observer.mjs";
import {Subject} from "./Subject.mjs";

const myEvent = new Subject()

const observer1 = new Observer("Dorcia")
const observer2 = new Observer("Zuzanna")

myEvent.addObserver(observer1)
myEvent.addObserver(observer2)

myEvent.notify("Hello")