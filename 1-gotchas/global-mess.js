//Broken Code
const outer = function() {
    for(let i = 1; i <= 3; i++) {
        inner();
    }
};

const inner = function() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }
};

outer();