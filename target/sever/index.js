require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

const db = require("./models");

const PORT = 8081;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/api/bmi', function(req,res){
 db.bmi.find()
  .then(function(qa){
    res.json(qa);
  })
  .catch(function(err){
    res.send(err);
  })
})

app.get('/api/bmi/:bmi', function(req,res){
 db.bmi.findOne({bmi: req.params.bmi})
  .then(function(geners){
    res.json(geners);
  })
  .catch(function(err){
    res.send(err);
  })
});
app.post('/send',(req,res)=>{
  const output =`
   <p>you have a new message</p>
      <h3>
       <ul>
        <li>Name:${req.body.name}</li>
        <li>Company:${req.body.company}</li>
        <li>Email:${req.body.emailaddress}</li>
       </ul>
      </h3>
  `;



var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: 'ashutoshsenger09@gmail.com',
    pass: '09091998ashu'
  }
}));

var mailOptions = {
  from: 'ashutoshsenger09@gmail.com',
  to: 'ashutoshsenger09@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That is a the email which is being sent by using nodemailer',

};

transporter.sendMail(mailOptions, function(error, info){
  if (error){
    console.log(error);
  } else {
     res.render('contact',{msg:'Email has been sent!!'});
  }
});



});

app.post('/api/bmi', function(req,res){

  db.bmi.create(req.body)
  .then(function(newTodo){
    res.json(newTodo);
  })
  .catch(function(err){
    res.send(err);
  })
});
app.use("/api/auth", authRoutes);




app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
})
