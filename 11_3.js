function getFirstNum(a){

    return function getSecondNum(b) {
        console.log(a+b)
    }
}

const getSumNum=getFirstNum(2)
getSumNum(1)