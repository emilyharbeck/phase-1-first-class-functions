function receivesAFunction(callback) {
    callback();
}
function sayHello() {
    console.log("Hello");
}

receivesAFunction(sayHello);

function returnsANamedFunction() {
    return function namedFunction() {

    };
}

function returnsAnAnonymousFunction() {
    return function () {

    };
}
