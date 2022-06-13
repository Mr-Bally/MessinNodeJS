// Regular function
const X = function() {
    // "this" here is the caller of X
};

// Arrow function
const Y = () => {
    // "this" here is NOT the caller of Y
    // It's the same "this" found in Y's scope
};

// Can have some very consise syntax
const square = a => a * a;