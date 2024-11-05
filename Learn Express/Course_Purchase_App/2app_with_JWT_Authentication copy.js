// const fs = require("fs");
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// const path = require('path');

var jwt = require('jsonwebtoken');
const express = require('express');
app.use(express.json());            // it replace body parser and we can access "req.body"


const port = 1100
const app = express();



let ADMINS = [];
let USERS = [];
let COURSES = [];


const secreateKey = "mexyz1x2y3z" // 👈<---

const generateJWT = (user) =>{
    const payload = {username : user.username};  // payload we must need to pass as "Obj" always
    return jwt.sign(payload, secreateKey, {expiresIn : '1h'});
};

const jwtAuthentication = (req, res, next) =>{ // our own middleware 👉 only if "userAuthenticate" the "go next" else error.
    const authHeader = req.headers.authorization;
   if(authHeader){
       const token = authHeader.split(" ")[1]; // if there is space in "authHeader" select data at index 1.

       jwt.verify(token , secreateKey, (err, user) =>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
       })
    }else{
        res.status.send(403).json({message : "User Authencation fail !!"})
    }
}

// Admin routes
app.post('/admin/signup', (req, res) => {

    const adminData = req.body;
    const checkExistingAdmin = ADMINS.find((i) => i.username === adminData.username);

    if(checkExistingAdmin){
        res.status(404).json({message : "admin Already exists"});
    }else{
        ADMINS.push(adminData);
        const token = generateJWT(adminData) // <--👈👈👈
        res.json({message : "Admin create successfully", token});
    }
});

// 👉👉 why this "adminAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

app.post('/admin/login' ,(req, res) => { // "adminAuthentication" is middleware funt which execute 1st then req,res generated 👉 we can put "1000s" of such funct and put there in raw there is no limit
    const {username, password} = req.headers;
    const adminExists = ADMINS.find((a)=> a.username === username && a.password === password)
    
    if(adminExists){
        const token = generateJWT(adminExists) // <--👈👈👈
        res.json({message : "Admin create successfully", token});
    }else{
        res.status(403).json({message : "Authentication Fail !!"})
    }
});

app.post('/admin/courses', jwtAuthentication ,(req, res) => {
    console.log('user ', req.user.username);
    
    const courseData = req.body;  // in body all this below data user will put from user side

    const requiredFields = ['title', 'description', 'price', 'imageLink', 'published'];
    const missingField = requiredFields.find(field => !courseData[field] || courseData[field] === '');

    if(missingField){
        return res.status(411).json({"msg": "Some data missing"})
    }else{
        courseData.id = COURSES.length + 1;  // we add ID extra
        COURSES.push(courseData);
        
        res.json({message : "Course create successfully", courseId : courseData.id});
    }
});
 
app.put('/admin/courses/:courseId',jwtAuthentication,(req, res) => {
    const CourseIndex = parseInt(req.params.courseId);
    const findCourseIndex = COURSES.findIndex((i) => i.id === CourseIndex); // here return Index of that course from "COURSES" array that's it.

    console.log('ind ',findCourseIndex);

    if (findCourseIndex > -1) {

        // Merge existing course properties with new properties from the request body
// 👇👇 what happen in below line "obj" at "findCourseIndex" index in "COURSES" array
//  i.e 👉 COURSES[findCourseIndex] will updated by new "obj" created via👉 "Object.assign()"
//  in this {} empty obj they put existing course data of index👉 "findCourseIndex" via👉 "COURSES[findCourseIndex]"
//  along with "data" receive from user via👉 "req.body"  
//  COURSES[findCourseIndex], req.body 👈👈👈 this 2 data merge together and store in👉 {} empty Obj

// EX.👇👇 of Object.assign({}, COURSES[findCourseIndex], req.body);

// COURSES[0] = { id: 1, title: "JavaScript Basics", description: "Learn JS" }
// req.body = { title: "Advanced JavaScript" }
// updatedCourse = { id: 1, title: "Advanced JavaScript", description: "Learn JS" }

        COURSES[findCourseIndex] = Object.assign({}, COURSES[findCourseIndex], req.body);
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
        res.json({message : "Course deleted successfully",courseId : courseData.id})
    }else{
        res.status(404).json({message : "Course not found"})
    }

})


// 👉👉 why this "userAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

// User routes
app.post('/users/signup', (req, res) => {
    const user = req.body;

    const checkExistingUser = USERS.find((i) => i.username === user.username);

    if(checkExistingUser){
        res.status(404).json({message : "User already exists Go and login"});
    }else{
        USERS.push(user);
        const token = generateJWT(user) // <--👈👈👈
        res.json({message : "User create successfully", token});
    }
});

app.post('/users/login',(req, res) => {
    const {username, password} = req.headers;
    const userExists = USERS.find((a)=> a.username === username && a.password === password)
    
    if(userExists){
        const token = generateJWT(userExists) // <--👈👈👈
        res.json({message : "User login successfully", token});
    }else{
        res.status(403).json({message : "User authentication Fail !!"})
    }
});

app.get('/users/courses',jwtAuthentication,(req, res) => {
    res.json({ courses: COURSES });
});

app.post('/users/courses/:courseId',jwtAuthentication,(req, res) => { // here user will purchase course
    const courseId = parseInt(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId );
    if (course) {
        const user = USERS.find(u => u.username === req.user.username);
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
        res.json({ purchasedCourses: user.purchasedCourses });
    } else {
        res.status(404).json({ message: 'No courses purchased' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});










