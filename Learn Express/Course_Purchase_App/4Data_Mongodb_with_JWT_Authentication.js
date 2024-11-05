// https://github.com/100xDevs-hkirat/all-assignments/blob/main/week-3/solutions/04-course-app-hard.js

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());            // it replace body parser and we can access "req.body"

const port = 1300

const secreateKey = "mexyz1x2y3z" // 👈<---

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: {type: String},  // both are same "{type: String}" --> String
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // <--- array of type "ObjectId" which referce to "Course" collection in mongodb 👉 this will insure u to user only add(select) course whose "ObjID" <-- inbuild define by mongodb, is present in "Course" collection. 
//                     ☝️☝️☝️ it just like.. foreign key table like structure to connect on table with other.
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
  
  // Define mongoose models
const User = mongoose.model('User', userSchema); // Here👉"mode" use to connect spec. Schema to mentioned Collection. "model" means "User" collection need to "adhere" define Schema for it i.e "userSchema"
const Admin = mongoose.model('Malik', adminSchema); //  Here👉 "mode" use to connect spec. Schema to mentioned Collection. "model" means "Malik" collection need to "adhere" define Schema for it i.e "adminSchema"
const Course = mongoose.model('Course', courseSchema); // Here👉"mode" use to connect spec. Schema to mentioned Collection. "model" means "Course" collection need to "adhere" define Schema for it i.e "courseSchema"

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

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb+srv://admin:admin@cluster0.5rzjxal.mongodb.net/Course_Selling_App', {
mongoose.connect('mongodb+srv://admin:admin@cluster0.5rzjxal.mongodb.net/CourseApp?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


// Admin routes
app.post('/admin/signup', async (req, res) => {

    const { username, password } = req.body;
    const admin = await Admin.findOne({username});

    if(admin){
        res.status(403).json({ message: 'Admin already exists' });
    }
    else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        // const newAdmin = new Admin({ username, password }); // both above and this r same.
        newAdmin.save();
        const token = jwt.sign({ username, role: 'admin' }, secreateKey, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
    }
});

// 👉👉 why this "adminAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

app.post('/admin/login' , async (req, res) => { // "adminAuthentication" is middleware funt which execute 1st then req,res generated 👉 we can put "1000s" of such funct and put there in raw there is no limit
   
    const {username, password} = req.headers;
    
    const adminExists = await Admin.findOne({ username, password });
    
    if(adminExists){
        const token = jwt.sign({username, role: "admin"}, secreateKey, {expiresIn : '1h'}); // <--👈👈👈 // <--👈👈👈
        res.json({message : "Admin Login successfully", token});
    }else{
        res.status(403).json({message : 'Invalid username or password'})
    }
});

app.post('/admin/courses', jwtAuthentication ,async (req, res) => {
    console.log('user ', req.user);
    
    const courseData = req.body;
    
    const requiredFields = ['title', 'description', 'price', 'imageLink', 'published'];
    const missingField = requiredFields.find(field => !courseData[field] || courseData[field] === '');

    if(missingField){
        return res.status(411).json({"msg": "Some data missing"})
    }else{
        const course = new Course(req.body);
        await course.save();
        res.json({ message: 'Course created successfully', courseId: course.id }); 
    }
});
 
app.put('/admin/courses/:courseId',jwtAuthentication, async (req, res) => {

    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });

    if (course) {
        res.json({ message: 'Course updated successfully' });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

app.get('/admin/courses',jwtAuthentication,async (req, res) => {
    const courses = await Course.find(); 
    res.json({ courses });
});


app.delete('/admin/courses/:courseId',jwtAuthentication, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if(course){
        await Course.findByIdAndDelete(req.params.courseId);
        res.json({message : "Course deleted successfully",courseId : req.params.courseId})
    }else{
        res.status(404).json({message : "Course not found"})
    }
})


// 👉👉 why this "userAuthentication" req becz All this below are "Admin" protected "routes" only admin site can access them

// User routes
app.post('/users/signup', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new User({ username, password });
        await newUser.save();
        const token = jwt.sign({ username, role: 'user' }, secreateKey, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
    }
});

app.post('/users/login', async (req, res) => {
    const {username, password} = req.headers;

    const user = await User.findOne({ username, password });

    if (user) {
        const token = jwt.sign({ username, role: 'user' }, secreateKey, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});

app.get('/users/courses',jwtAuthentication, async (req, res) => {
    const courses = await Course.find({published : true}); // only find the courses which have been fublished for user
    res.json({ courses });
});

app.post('/users/courses/:courseId',jwtAuthentication, async (req, res) => { // here user will purchase course
    const course = await Course.findById(req.params.courseId);
    
    console.log(course);

    if (course) {
        const user = await User.findOne({ username: req.user.username });
        if (user) {
            user.purchasedCourses.push(course); // even if we push overall "course" in db mongobd is smart enought will save👉 "ObjId" only with res to Purchase course by user. Because we create our👉 "user schema" in such way. 
            await user.save();
            res.json({ message: 'Course purchased successfully' });
        } 
        else {
            res.status(403).json({ message: 'User not found' });
        }
    }
    else {
        res.status(404).json({ message: 'Course not found' });
    }
});


app.get('/users/purchasedCourses',jwtAuthentication, async (req, res) => {

    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses'); //here "populate" will help us to get ourall course "obj" on user side instead of only getting an "Purchase courseId's" run without "populate"
    
    if (user) {
        res.json({ purchasedCourses: user.purchasedCourses || [] });
    } else {
        res.status(403).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});










