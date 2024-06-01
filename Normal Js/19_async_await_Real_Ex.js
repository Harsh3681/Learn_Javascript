
"use strict"

/*
Suppose that you need to perform three asynchronous operations in the following sequence:

Select a user from the database.
Get services of the user from an API.
Calculate the service cost based on the services from the server. 

*/ 

//  1st without async funct() , await && promises()

function getUser(userId, callback) {
    console.log('Get user from the database.');
    setTimeout(() => {
        callback({
            userId: userId,
            username: 'john'
        });
    }, 500);
}

function getServices(user, callback) {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
        callback(['Email', 'VPN', 'CDN']);
    }, 1 * 1000);
}

function getServiceCost(services, callback) {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
        callback(services.length * 100);
    }, 2 * 1000);
}

// Call now

getUser(400, (user) => {
    getServices(user, (services) => {
        getServiceCost(services, (cost) => {
            console.log(`The service cost is ${cost}`);
        });
    });
});

// -------------------------------------------------------------------

console.log('');
//  2nd with async await funct() && promises()

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'Ramesh'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['WIFI', 'Hotspot', 'Bluetooth']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

// below is one way to call
getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);

// OR ----------------------- can call as below

console.log('');
async function showServiceCost() {
    let user = await getUser(800);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showServiceCost();




