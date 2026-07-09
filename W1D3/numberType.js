function type(value) {
    if (value > 0) {
        console.log("It is a positive number value is greater than zero");
    } else if (value < 0) {
        console.log("It is a negative number value is less than zero");
    } else {
        console.log("It is neutral, it is equal to zero");
    }
}

type(10);
type(-1);
type(0);