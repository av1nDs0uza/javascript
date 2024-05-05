const user = {
    username:"Avin",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

const addTwo =(num1, num2) => {
    return num1 + num2;
}


console.log(addTwo(3,4));