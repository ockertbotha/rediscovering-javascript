function first() {
    for( i = 0; i < 5; i++) {
        second();
    }
}

function second() {
    for(i = 0; i < 3; i++) {
        console.log(i);
    }
}

// This is going to "hang"
first();