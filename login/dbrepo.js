module.exports.reg=function(conn,user){
 
    return new Promise((reject,resolve)=>{
        conn.query(
        "insert into users (email,username,password) values(?,?,?)",
        [user.email,user.username,user.password],
        error=>{
            if(error){
                reject(error);
            } else {
                resolve({status:201,message:"Adatok beszúrva!"});
            }
        }
        );
    });
};