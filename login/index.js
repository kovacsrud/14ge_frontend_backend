const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const bcrypt=require('bcrypt');
const {reg}=require('./dbrepo.js');
const passport=require('passport');
const flash=require('express-flash');
const session=require('express-session');
const initializePassport=require('./passport-config');

const conn=mysql.createConnection (
   {
    host:"localhost",
    user:"root",
    password:"",
    database:"userdb"
   }
);





const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view-engine','ejs');
initializePassport(passport,conn);
app.use(session({
    secret:"titok",
    resave:false,
    saveUninitialized:false
})
);
app.use(passport.initialize());
app.use(passport.session());

function checkAuth(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

function checkNotAuth(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    next();
}



app.listen(8000,()=>{console.log("Fut a szerver")});

app.get('/',checkAuth,(req,res)=>{
    res.render('index.ejs',{user:"Rudolf"});
});

app.get('/login',checkNotAuth,(req,res)=>{
    res.render('login.ejs');
});

app.get('/reg',checkNotAuth,(req,res)=>{
    res.render('reg.ejs');
});

app.post('/login',checkNotAuth,passport.authenticate('local',
{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}
));

app.post('/reg',checkNotAuth,async (req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        const newUser={
            email:req.body.email,
            username:req.body.username,
            password:hashedPassword
        }
       
        reg(conn,newUser)
        .then(valasz=>valasz.json())
        .then(valasz=>console.log(valasz.message))
        .catch(err=>console.log(err));

        res.redirect('/login');


    } catch(error) {
        res.redirect('/reg');
    }

});




