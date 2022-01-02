/*
 https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
 */

const myButton = {
    content: 'OK',
    click() {
        console.log(this.content + ' clicked');
    }
};

myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton