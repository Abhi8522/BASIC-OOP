// this jis object mein hot hai usi ko  refer krta hai
const Person = {
       name : "Abhi",
       age : 22,
       greet : function(){
                console.log(`hi👋 ${this.name}`)
       }
}
Person.greet()






// this se ek bank systum banya hai
// ek object ho or uski sari prop or method ko access krna ho tab this use kre
const Bank = {
        name : "Abhi",
        balance : 10,

        showBalance : function(){
                console.log(`${this.name} Your Balance is ${this.balance}`)
        },

        deposite : function(amount){
                this.balance = this.balance + amount
                console.log(`${amount} is deposited , Your total balance is ${this.balance}`)
        },

        withdraw : function(withdrawamount){
                if(withdrawamount >  this.balance) {
                        console.log(`Insufficient funds! Current balance: ₹${this.balance}`);
                        return ;
                }
                this.balance = this.balance - withdrawamount
                console.log(`${withdrawamount} is withdrawn : Your Remaining Balance is ${this.balance}`)
        }
}

Bank.showBalance()
Bank.deposite(10)
Bank.withdraw(20)







// ek function se jb multiple object create krne ho properties same rhegi or methods bhi tab this or new keyword ka use kre
function Pencil(company,color){
        this.company = company
        this.color = color

        // this.write = function(write,col){
        //         let h1 = document.createElement("h1")
        //         h1.textContent = write
        //         h1.style.color = col
        //         document.body.append(h1)
        // }
}

Pencil.prototype.write = function(write,col){
                let h1 = document.createElement("h1")
                h1.textContent = write
                h1.style.color = col
                document.body.append(h1)
} 

const pencil1 = new Pencil("Natraj","black") // new object created
const pencil2 = new Pencil("doms","red") // new object created 

pencil1.write("kaise ho", "red")
pencil1.write("badiya h", "green")

pencil1.write("kya kr rhe ho", "red")
pencil1.write("kuch ni", "green")

console.log(pencil1)












//  class oops
// 📌 Fayda classes ka:
// Code clean aur readable hota hai.
// Old prototype system ka sara kaam background me ho jata hai.
// Methods automatically shared hote hain.

// class create krna
class Car{
        constructor(name,color){
                // yeh properties har naye object me hongi
                this.carName = name
                this.color = color
        }

        // shared method (prototype me store hota hai)
        showDetails(){
                console.log(`Car is : ${this.carName} and Color is : ${this.color}`)
        }

        // example DOM method
        displayCar(car,color){
                let h1 = document.createElement("h1")
                h1.textContent = `This is ${car} 🚘`
                h1.style.color = color
                document.body.append(h1)
        }

}
// Objects create karna
const car1 = new Car("Dezire", "black");
const car2 = new Car("Fortuner", "red");

car1.displayCar("Dezire");
car2.displayCar("Fortuner");

console.log(car1, car2);







// class with extend example / inheritance
class ElectricCar extends Car{
        constructor(name,color,battery){
                super(name,color) // this.carName, this.color
                this.battery = battery
        }

        showBattery(){
                console.log(`Car Name is : ${this.carName} and Color is : ${this.color} and Battery is ${this.battery}`)
        }
}

const ElectricCar1 = new ElectricCar("tesla","black",90)
console.log(ElectricCar1.showBattery() )



//
//