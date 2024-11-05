
//  1) Rent a Car
//  2) Get Confirmation Slip

// Show all the rental car first on screen

// recept( slip ) containing "1) Car Name 2) for how many day u have book the car 3) for how much Price 4) Aadhar No 5) "

//  Class 👇 1) Car 2) Customer 3) Rental 4) FinalCarRentalClass <-- it use all the class and rent an car.

/* Talk about "car"
1) id    ---> 001
2) ModelName ---> Mahendra
3) carBrand ----> Thar
4) Base Price by which car get on rent  --> 2500
5) boolean available for rent or not ---> true

Make all the above variable "Private" #
Means we implement "Incapsulation" here
And to assess this variable outside the class we use getter and setter method in "js"

// ------------------------------------------------------------
improvement 👇👇👇👇

1) On 👉"Admin" side all the CustId, Car and CarId need to be shown by one another "fuct"
3) Or we can do so that when the customer come to return car "user" recieve 1 OTP once OTP confirm the car can return.

*/



class Car {
    constructor(carId, brand, model, basePricePerDay) {
        this.carId = carId;
        this.brand = brand;
        this.model = model;
        this.basePricePerDay = basePricePerDay;
        this.available = true; // Use a simple property, since JS does not need encapsulation here.
    }

    getCarId() {
        return this.carId;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    calculatePrice(rentalDays) {
        return this.basePricePerDay * rentalDays;
    }

    isAvailable() {
        return this.available;
    }
 
    rent() {
        this.available = false;
    }

    returnCar() {
        this.available = true;
    }
}

class Customer {
    constructor(customerId, name) {
        this.customerId = customerId;
        this.name = name;
    }

    getCustomerId() {
        return this.customerId;
    }

    getName() {
        return this.name;
    }
}

class Rental {
    constructor(car, customer, days) {
        this.car = car;
        this.customer = customer;
        this.days = days;
    }

    getCar() {
        return this.car;
    }

    getCustomer() {
        return this.customer;
    }

    getDays() {
        return this.days;
    }
}

class Admin{

    constructor(adminId, aadharNo, contactNo){
        this.adminId = adminId;
        this.aadharNo = aadharNo;
        this.contactNo = contactNo;
    }

    getAdminId(){
        return this.adminId;
    }
    getAadharNo(){
        return this.aadharNo;
    }
    getContactNo(){
        return this.contactNo;
    }

}

class CarRentalSystem {
    constructor() {
        this.cars = [];
        this.customers = [];
        this.rentals = [];
        this.admins = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    rentCar(car, customer, days) {
        if (car.isAvailable()) {
            car.rent();
            this.rentals.push(new Rental(car, customer, days));
        } else {
            console.log("Car is not available for rent.");
        }
    }

    returnCar(car) {
        car.returnCar();
        let ToRemoveRental = null;

        for (let rental of this.rentals) {
            if (rental.getCar() === car) {
                ToRemoveRental = rental;
                break;
            }
        }
        console.log('Array ',this.rentals);
        
        if (ToRemoveRental) {
            this.rentals.splice(this.rentals.indexOf(ToRemoveRental), 1);
        } else {
            console.log("Car was not rented.");
        }
    }

    menu() {
        const prompt = require('prompt-sync')();

        console.log("===== Car Rental System =====");
        console.log("1. Admin");
        console.log("2. Customer");
        console.log("3. Exit");
        const choice = prompt("Enter your choice: ");
        if (choice == 1) {
            const adminAadhar = prompt("Enter your Aadhar No: "); // aadahr no needed becz here we try to send an OTP to register mobile no for Admin Login

        }



        while (true) {
            console.log("===== Car Rental System =====");
            console.log("1. Rent a Car");
            console.log("2. Return a Car");
            console.log("3. Exit");
            const choice = prompt("Enter your choice: ");

            if (choice == 1) {
                console.log("\n== Rent a Car ==\n");
                const customerName = prompt("Enter your name: ");

                console.log("\nAvailable Cars:");
                for (let car of this.cars) {
                    if (car.isAvailable()) {
                        console.log(`${car.getCarId()} - ${car.getBrand()} ${car.getModel()}`);
                    }
                }

                const carId = prompt("Enter the car ID you want to rent: ");
                const rentalDays = parseInt(prompt("Enter the number of days for rental: "));

                const newCustomer = new Customer(`CUS${this.customers.length + 1}`, customerName);
                this.addCustomer(newCustomer);

                let selectedCar = null;
                for (let car of this.cars) {
                    if (car.getCarId() === carId && car.isAvailable()) {
                        selectedCar = car;
                        break;
                    }
                }

                if (selectedCar) {
                    
                    const totalPrice = selectedCar.calculatePrice(rentalDays);
                    console.log("\n== Rental Information ==\n");
                    console.log(`Customer ID: ${newCustomer.getCustomerId()}`);
                    console.log(`Your Car ID: ${selectedCar.getCarId()}`);
                    console.log(`Customer Name: ${newCustomer.getName()}`);
                    console.log(`Car: ${selectedCar.getBrand()} ${selectedCar.getModel()}`);
                    console.log(`Rental Days: ${rentalDays}`);
                    console.log(`Total Price: $${totalPrice.toFixed(2)}`);

                    const confirm = prompt("Confirm rental (Y/N): ");
                    if (confirm.toLowerCase() === 'y') {
                        this.rentCar(selectedCar, newCustomer, rentalDays);
                        console.log("\nCar rented successfully.");
                    } else {
                        console.log("\nRental canceled.");
                    }
                } else {
                    console.log("\nInvalid car selection or car not available for rent.");
                }
            } else if (choice == 2) {
                console.log("\n== Return a Car ==\n");
                const carId = prompt("Enter the car ID you want to return: ");

                let carToReturn = null;
                for (let car of this.cars) {
                    if (car.getCarId() === carId && !car.isAvailable()) {
                        carToReturn = car;
                        break;
                    }
                }

                if (carToReturn) {
                    let customer = null;
                    for (let rental of this.rentals) {
                        if (rental.getCar() === carToReturn) {
                            customer = rental.getCustomer();
                            break;
                        }
                    }

                    if (customer) {
                        this.returnCar(carToReturn);
                        console.log(`Car returned successfully by ${customer.getName()}`);
                    } else {
                        console.log("Car was not rented or rental information is missing.");
                    }
                } else {
                    console.log("Invalid car ID or car is not rented.");
                }
            } else if (choice == 3) {
                break;
            } else {
                console.log("Invalid choice. Please enter a valid option.");
            }
        }

        console.log("\nThank you for using the Car Rental System!");
    }
}





const main = () => {
    const rentalSystem = new CarRentalSystem();

    const car1 = new Car("C001", "Toyota", "Camry", 60.0);
    const car2 = new Car("C002", "Honda", "Accord", 70.0);
    const car3 = new Car("C003", "Mahindra", "Thar", 150.0);
    rentalSystem.addCar(car1);
    rentalSystem.addCar(car2);
    rentalSystem.addCar(car3);

    rentalSystem.menu();
};

main(); // 👈👈👈👈




