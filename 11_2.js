function isPrime(num) {

    if (num > 1000) {
        return console.log("Данные не верны");
    } else if (num === 2) {
        return console.log("Число простое");
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {

            if (num % i !== 0) {
                return console.log("Число простое");
            } else if (num === i * i) {
                return console.log("Число не простое");
            } else {
                return console.log("Число не простое");
            }
        }
    } else {
        return console.log("Число не простое");
    }

}

isPrime(7);