const localStrategy=require('passport-local').Strategy;
const bcrypt=require('bcrypt');

function initialize(passport,conn){
    const authenticateUser=(username,password,done)=>{
        conn.query("select * from users where username=?",
        [username],
        (error,rows)=>{
            if(error) {
                return done(error);
            }
            if(rows.length==0){
                return done(null,false,{message:"Nincs ilyen felhasználó!"});
            }
            const passCheck=passwordCheck(password,rows[0].password);
            const user={
                id:rows[0].id,
                email:rows[0].email,
                username:rows[0].username,
                password:rows[0].password
            }
            if(passCheck){
                return done(null,user);
            } else {
                return done(null,false,{message:"A jelszó nem megfelelő!"})
            }
        }
        );

    }
    passport.use(new localStrategy({usernameField:'username'},authenticateUser));
    passport.serializeUser((user,done)=>done(null,user.id));
    passport.deserializeUser((id,done)=>{
        conn.query("select * from users where id=?",
        [id]
        ,(error,rows)=>{
            if(error){
                return done(error);
            } else {
                return done(null,rows[0]);
            }
        });
    });




}

const passwordCheck=async(password,userPassword)=>{
    try {
       if(await bcrypt.compare(password,userPassword)) {
           return true;
       } else {
           return false;
       }
        
    } catch (error) {
        return done(error);
    }
}

module.exports=initialize;