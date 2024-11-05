// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const fs = require("fs");
const path = require('path');       // path also need for file to locate directory
var jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());            // it replace body parser and we can access "req.body"

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

const port = 1200

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Read data from file, or initialize to empty array if file does not exist
try {
    ADMINS = JSON.parse(fs.readFileSync('_Admins_data.json', 'utf8')); // Store data in ADMINS like this--> [{}]
    USERS = JSON.parse(fs.readFileSync('_Users_data.json', 'utf8'));
    COURSES = JSON.parse(fs.readFileSync('_Courses_data.json', 'utf8'));
} catch {
    ADMINS = [];
    USERS = [];
    COURSES = [];
}
console.log(ADMINS); 

const secreateKey = "mexyz1x2y3z" // 👈<---

const jwtAuthentication = (req, res, next) =>{ // our own middleware 👉 only if "userAuthenticate" the "go next" else error.
    const authHeader = req.headers.authorization;
   if(authHeader){
       const token = authHeader.split(" ")[1]; // here we eliminate name "Bearer" and select only "token" see in "Postman" in Headers section.

       jwt.verify(token , secreateKey, (err, user) =>{ // (err, user) <--- call back fun
            if(err){
                return res.sendStatus(403);
            }
            req.user = user; // Set the user to req.user
            next();
       })
    }else{
        res.status.send(403).json({message : "User Authencation fail !!"})
    }
}



// Admin routes
app.post('/admin/signup', (req, res) => {

    const {username, password} = req.body;

    const checkExistingAdmin = ADMINS.find((i) => i.username === username);
    console.log("admin signup");

    if(checkExistingAdmin){
        console.log('inside if');
        
        res.status(404).json({message : "admin Already exists"});
    }else{
        console.log('inside else');
        const newAdminData = {username, password};
        ADMINS.push(newAdminData);
        fs.writeFileSync("_Admins_data.json" , JSON.stringify(ADMINS)) // Sync --> writeFileSync not req (err) callback
        const user = {username, role: "admin"};
        const token = jwt.sign(user, secreateKey, {expiresIn : '1h'}); // <--👈👈👈
        res.json({message : "Admin create successfully", token});
    }
});

// 👉👉 why this "adminAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

app.post('/admin/login' ,(req, res) => { // "adminAuthentication" is middleware funt which execute 1st then req,res generated 👉 we can put "1000s" of such funct and put there in raw there is no limit
   
    const {username, password} = req.headers;
    
    const adminExists = ADMINS.find((a)=> a.username === username && a.password === password)
    
    if(adminExists){
        const user = {username, role: "admin"};
        const token = jwt.sign(user, secreateKey, {expiresIn : '1h'}); // <--👈👈👈 // <--👈👈👈
        res.json({message : "Admin Login successfully", token});
    }else{
        res.status(403).json({message : "Authentication Fail !!"})
    }
});

app.post('/admin/courses', jwtAuthentication ,(req, res) => {
    console.log('user ', req.user.username);
    
    const courseData = req.body;  // in body all this below data user will put from user side
    console.log('courseData ', req.body);  // "courseData" is "Obj" type

    const requiredFields = ['title', 'description', 'price', 'imageLink', 'published'];
    const missingField = requiredFields.find(field => !courseData[field] || courseData[field] === '');

    if(missingField){
        return res.status(411).json({"msg": "Some data missing"})
    }else{
        courseData.id = COURSES.length + 1;  // we add ID extra
        COURSES.push(courseData);

        fs.writeFileSync("_Courses_data.json" , JSON.stringify(COURSES)) // Sync --> writeFileSync not req (err) callback
    
        res.json({message : "Course create successfully", courseId : courseData.id});
    }
});
 
app.put('/admin/courses/:courseId',jwtAuthentication,(req, res) => {

    const CourseIndex = parseInt(req.params.courseId);
    const findCourse= COURSES.find((i) => i.id === CourseIndex); // here return Index of that course from "COURSES" array that's it.

    console.log('ind ',findCourse);

    if (findCourse) {
// 👇👇 here we directly update👉"findCourse" which found by "user given" 👉"CourseIndex"
        Object.assign(findCourse, req.body);   // "findCourse" <-- is existing data will merge with "req.body"
        fs.writeFileSync('_Courses_data.json', JSON.stringify(COURSES));  // it will directly update "COURSES" array
        res.json({message : "Course updated successfully"})
    } 
    else {
        res.status(404).json({message : "Course not found"})
    }
});

app.get('/admin/courses',jwtAuthentication,(req, res) => {
  res.json({course : COURSES});
});


app.delete('/admin/courses/:courseId',jwtAuthentication,(req, res) => {
    const courseData = req.body;
    const CourseIndex = parseInt(req.params.courseId);
    const findCourseIndex = COURSES.findIndex((i) => i.id === CourseIndex);

    if (findCourseIndex > -1) {
        COURSES.pop(findCourseIndex);
        fs.writeFileSync('_Courses_data.json', JSON.stringify(COURSES));
        res.json({message : "Course deleted successfully",courseId : courseData.id})
    }else{
        res.status(404).json({message : "Course not found"})
    }

})


// 👉👉 why this "userAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

// User routes
app.post('/users/signup', (req, res) => {

    const {username, password} = req.body;

    const checkExistingUser = USERS.find((i) => i.username === username);

    if(checkExistingUser){
        res.status(404).json({message : "User already exists Go and login"});
    }else{
        const newUserData = {username, password};
        USERS.push(newUserData);
        fs.writeFileSync("_Users_data.json" , JSON.stringify(USERS)) // Sync --> writeFileSync not req (err) callback
        const user = {username, role: "admin"};
        const token = jwt.sign(user, secreateKey, {expiresIn : '1h'}); // <--👈👈👈
        res.json({message : "Admin create successfully", token});
    }
});

app.post('/users/login',(req, res) => {
    const {username, password} = req.headers;
    const userExists = USERS.find((a)=> a.username === username && a.password === password)
    
    if(userExists){
        const user = {username, role: "admin"};
        const token = jwt.sign(user, secreateKey, { expiresIn: '1h' }); // <--👈👈👈
        res.json({message : "User login successfully", token});
    }else{
        res.status(403).json({message : "Invalid username or password" })
    }
});

app.get('/users/courses',jwtAuthentication,(req, res) => {
    res.json({ courses: COURSES });
});

app.post('/users/courses/:courseId',jwtAuthentication,(req, res) => { // here user will purchase course
    const courseId = parseInt(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId );
    if (course) {
        const user = USERS.find(u => u.username === req.user.username); // "user" <-- is nothing but the "user" obj we pass while creating "Token" as Payload
        if (user) {
            if (!user.purchasedCourses) {
                user.purchasedCourses = [];
            }
            user.purchasedCourses.push(course) 
            res.json({ message: 'Course purchased successfully' });
        }else{
            res.status(404).json({ message: 'User not found'});
        }
    } else {
        res.status(404).json({ message: 'Course not found or not available' });
    }
});


app.get('/users/purchasedCourses',jwtAuthentication,(req, res) => {

    const user = USERS.find(u => u.username === req.user.username);
    if (user && user.purchasedCourses) {
        res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
        res.status(404).json({ message: 'No courses purchased' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});










