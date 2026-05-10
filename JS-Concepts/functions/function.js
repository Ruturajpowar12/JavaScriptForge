// function in Js

function num(a, b) {        //funtion definition
    console.log(a + b);
}

num(28, 47);  // calling function  //75



//Arrow function in js



let data = () => {

    console.log("hi,everyone");
}

data();



// ForEAch Loop

let arr = [1, 2, 3, 4, 5];

arr.forEach((val, i, arr) => {   //higher order function
    console.log(val, i, arr);
});


//map() method

let newarr = arr.map((val) => {   //store in new arr
    console.log(val);
})


//filter method

let newA = arr.filter((val) => {
    return val % 2 == 0;
});

console.log(newA);


//reduce method

let op = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(op);

