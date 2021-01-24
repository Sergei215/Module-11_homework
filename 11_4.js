function Numbers(First, Last) {
    let a = First;

    let Timer = setInterval(function() {
        console.log(a);
        if (a == Last) {
            clearInterval(Timer);
        }
        a++;
    }, 1000);
}

// использование:
Numbers(5, 10);