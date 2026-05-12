//classes & objects in Js

//objects    // prototype

let student = {
    name: "Ruturaj",
    age: 23,
    printage: function () {
        console.log("age :", this.age);
    },
};


//classes

class MyClass {
    constructor() {

    }

    newMethod() {
        console.log("this class");
    }
}

let obj = new MyClass();
obj.newMethod();


//inheritance

class parent {

}

class child extends parent {

}

//super keyword

super();


//qu1

class college {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Name is :", name);
        console.log("Email is :", email);
    }
}

let obj = new college("Ruturaj", "Rutu@gmail.com");

obj.viewData();

// TRY CATCH

let a = 5;
let b = 10;
try {
    console.log("a+b", a + c);
} catch (err) {

    console.log(err);
}