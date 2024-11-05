// const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const port = 8000
const app = express();
app.use(express.json());
app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) =>{ // our own middleware 👉 only if "adminAuthenticate" the "go next" else error.
    const {username, password} = req.headers;
    const admin = ADMINS.find((i)=> i.username === username && i.password === password)
    if(admin){
        next();
    }else{
        res.status.send(403).json({message : "Admin Authencation fail !!"})
    }
}

const userAuthentication = (req, res, next) =>{ // our own middleware 👉 only if "userAuthenticate" the "go next" else error.
    const {username, password} = req.headers;
    const user = USERS.find((i)=> i.username === username && i.password === password)
    if(user){
        req.user = user; // add user obj to req
        next();
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
        res.json({message : "Admin create successfully"});
    }
});

// 👉👉 why this "adminAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

app.post('/admin/login', adminAuthentication ,(req, res) => { // "adminAuthentication" is middleware funt which execute 1st then req,res generated 👉 we can put "1000s" of such funct and put there in raw there is no limit
    res.json({message : "Admin login successfully"});
});

app.post('/admin/courses', adminAuthentication ,(req, res) => {

    const courseData = req.body;  // in body all this below data user will put from user side
    //   const myCourseObj = {
    //     title : req.body.title,
    //     description : req.body.description,
    //     price : req.body.price,
    //     imageLink : req.body.Imglink,
    //     publish : true
    //   }
    const requiredFields = ['title', 'description', 'price', 'imageLink', 'published'];
    const missingField = requiredFields.find(field => !courseData[field] || courseData[field] === '');

    if(missingField){
        return res.status(411).json({"msg": "Some data missing"})
    }else{
        courseData.id = Date.now();
        COURSES.push(courseData);
        res.json({message : "Course create successfully", courseId : courseData.id});
    }
});
 
app.put('/admin/courses/:courseId',adminAuthentication,(req, res) => {
    const CourseIndex = Number(req.params.courseId);
    const findCourse = COURSES.find((i) => i.id === CourseIndex);

    if (findCourse) {
        Object.assign(findCourse, req.body);
        res.json({message : "Course updated successfully"})
    } 
    else {
        res.status(404).json({message : "Course not found"})
    }
});

app.get('/admin/courses',adminAuthentication,(req, res) => {
  res.json({course : COURSES});
});


// 👉👉 why this "userAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

// User routes
app.post('/users/signup', (req, res) => {
    // const user = {...req.body, purchasedCourses: []};
// OR
    const user = {
        username: req.body.username,
        password: req.body.password,
        purchasedCourses: []
    }
    const checkExistingUser = USERS.find((i) => i.username === user.username);

    if(checkExistingUser){
        res.status(404).json({message : "User already exists Go and login"});
    }else{
        USERS.push(user);
        res.json({message : "User create successfully"});
    }
});

app.post('/users/login',userAuthentication,(req, res) => {
    res.json({message : "User login successfully"});
});

app.get('/users/courses',userAuthentication,(req, res) => {
   
    // let filteredCourses = [];
    // for (let i = 0; i<COURSES.length; i++) {
    //     if (COURSES[i].published) {
    //     filteredCourses.push(COURSES[i]);
    //     }
    // }
    
// OR 👇
    const getAllPublishCourses = COURSES.filter(c => c.published); // filter will directly return updated value in "same array" so if publish is "true" then update array by filter means add in it.
    res.json({ getAllPublishCourses });
});

app.post('/users/courses/:courseId',userAuthentication,(req, res) => { // here user will purchase course
    const courseId = Number(req.params.courseId);
    const course = COURSES.find(c => c.id === courseId && c.published);
    if (course) {
        req.user.purchasedCourses.push(courseId); // here pass only "courseId" to "user" array not whole obj and it also reflect changes in "USERS" array

        res.json({ message: 'Course purchased successfully' });
    } else {
        res.status(404).json({ message: 'Course not found or not available' });
    }
});


app.get('/users/purchasedCourses',userAuthentication,(req, res) => {

// We need to extract the complete course object from COURSES
// which have ids which are present in req.user.purchasedCourses

    // var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
    // var purchasedCourses = [];
    // for (let i = 0; i<COURSES.length; i++) {
    //     if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
    //         purchasedCourses.push(COURSES[i]);
    //     }
    // }

// OR 👇
    const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id)); // here "c" is "obj" in "COURSES" and we compare it with obj in "purchasedCourses" array
    res.json({ purchasedCourses });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});










