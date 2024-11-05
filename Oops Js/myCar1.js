class Car {
    constructor(carId, brand, model, basePricePerDay) {
        this.carId = carId;
        this.brand = brand;
        this.model = model;
        this.basePricePerDay = basePricePerDay;
        this.available = true;
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
    constructor(customerId, name, aadharNo) {
        this.customerId = customerId;
        this.name = name;
        this.aadharNo = aadharNo;
    }

    getCustomerId() {
        return this.customerId;
    }

    getName() {
        return this.name;
    }

    getAadharNo() {
        return this.aadharNo;
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

class Admin {
    constructor(adminId, aadharNo, contactNo) {
        this.adminId = adminId;
        this.aadharNo = aadharNo;
        this.contactNo = contactNo;
    }

    getAdminId() {
        return this.adminId;
    }

    getAadharNo() {
        return this.aadharNo;
    }

    getContactNo() {
        return this.contactNo;
    }

    // Function to manage customers, cars, and rentals (shows details)
    manageData(rentalSystem) {
        console.log("\n== Admin Management System ==");
        console.log("\n-- Customers --");
        rentalSystem.customers.forEach(customer => {
            console.log(`Customer ID: ${customer.getCustomerId()}, Name: ${customer.getName()}, Aadhar: ${customer.getAadharNo()}`);
        });

        console.log("\n-- Cars --");
        rentalSystem.cars.forEach(car => {
            console.log(`Car ID: ${car.getCarId()}, Brand: ${car.getBrand()}, Model: ${car.getModel()}, Available: ${car.isAvailable()}`);
        });

        console.log("\n-- Rentals --");
        rentalSystem.rentals.forEach(rental => {
            console.log(`Customer ID: ${rental.getCustomer().getCustomerId()} rented Car ID: ${rental.getCar().getCarId()} for ${rental.getDays()} days`);
        });
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

    addAdmin(admin) {
        this.admins.push(admin);
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

        if (ToRemoveRental) {
            this.rentals.splice(this.rentals.indexOf(ToRemoveRental), 1);
        } else {
            console.log("Car was not rented.");
        }
    }

    // Simulate OTP generation and validation
    generateOTP() {
        return Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
    }

    validateOTP(enteredOTP, actualOTP) {
        return enteredOTP === actualOTP;
    }

    menu() {
        const prompt = require('prompt-sync')();
        let otp;

        while (true) {
            console.log("===== Car Rental System =====");
            console.log("1. Admin Login");
            console.log("2. Customer Login");
            console.log("3. Exit");
            const choice = prompt("Enter your choice: ");

            if (choice == 1) {
                const adminAadhar = prompt("Enter your Aadhar No for Admin login: ");
                otp = this.generateOTP();
                console.log(`OTP sent to admin: ${otp}`);
                const enteredOTP = prompt("Enter the OTP: ");

                if (this.validateOTP(parseInt(enteredOTP), otp)) {
                    console.log("\nAdmin logged in successfully.");
                    const admin = this.admins.find(admin => admin.getAadharNo() === adminAadhar);
                    if (admin) {
                        admin.manageData(this);
                    } else {
                        console.log("Invalid Admin Aadhar No.");
                    }
                } else {
                    console.log("Invalid OTP.");
                }
            } else if (choice == 2) {
                const customerName = prompt("Enter your name: ");
                const customerAadhar = prompt("Enter your Aadhar No: ");
                otp = this.generateOTP();
                console.log(`OTP sent to customer: ${otp}`);
                const enteredOTP = prompt("Enter the OTP: ");

                if (this.validateOTP(parseInt(enteredOTP), otp)) {
                    console.log("\nCustomer logged in successfully.");
                    this.customerMenu(customerName, customerAadhar);
                } else {
                    console.log("Invalid OTP.");
                }
            } else if (choice == 3) {
                break;
            } else {
                console.log("Invalid choice. Please enter a valid option.");
            }
        }
        console.log("\nThank you for using the Car Rental System!");
    }

    customerMenu(customerName, customerAadhar) {
        const prompt = require('prompt-sync')();

        while (true) {
            console.log("\n===== Customer Menu =====");
            console.log("1. Rent a Car");
            console.log("2. Return a Car");
            console.log("3. Exit");
            const choice = prompt("Enter your choice: ");

            if (choice == 1) {
                console.log("\nAvailable Cars:");
                for (let car of this.cars) {
                    if (car.isAvailable()) {
                        console.log(`${car.getCarId()} - ${car.getBrand()} ${car.getModel()}`);
                    }
                }

                const carId = prompt("Enter the car ID you want to rent: ");
                const rentalDays = parseInt(prompt("Enter the number of days for rental: "));

                const newCustomer = new Customer(`CUS${this.customers.length + 1}`, customerName, customerAadhar);
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
                    console.log("\n== Rental Information ==");
                    console.log(`Customer ID: ${newCustomer.getCustomerId()}`);
                    console.log(`Car ID: ${selectedCar.getCarId()}`);
                    console.log(`Rental Days: ${rentalDays}`);
                    console.log(`Total Price: $${totalPrice.toFixed(2)}`);

                    const confirm = prompt("Confirm rental (Y/N): ");
                    if (confirm.toLowerCase() === 'y') {
                        this.rentCar(selectedCar, newCustomer, rentalDays);
                        console.log("Car rented successfully.");
                    } else {
                        console.log("Rental canceled.");
                    }
                } else {
                    console.log("Invalid car selection or car not available for rent.");
                }
            } else if (choice == 2) {
                console.log("\n== Return a Car ==");
                const carId = prompt("Enter the car ID you want to return: ");

                let carToReturn = null;
                for (let car of this.cars) {
                    if (car.getCarId() === carId && !car.isAvailable()) {
                        carToReturn = car;
                        break;
                    }
                }

                if (carToReturn) {
                    this.returnCar(carToReturn);
                    console.log("Car returned successfully.");
                } else {
                    console.log("Invalid car ID or car is not rented.");
                }
            } else if (choice == 3) {
                break;
            } else {
                console.log("Invalid choice. Please enter a valid option.");
            }
        }
    }
}

const rentalSystem = new CarRentalSystem();

rentalSystem.addCar(new Car('CAR1', 'Toyota', 'Corolla', 50));
rentalSystem.addCar(new Car('CAR2', 'Honda', 'Civic', 60));
rentalSystem.addCar(new Car('CAR3', 'Ford', 'Focus', 55));

rentalSystem.addAdmin(new Admin('ADMIN1', '123456789012', '7588432798'));

rentalSystem.menu();
