//-------------------------------------------------importing-----------------------------------------------------------
const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
//-------------------------------------------------connection-----------------------------------------------------------
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "login_system" // connnected on login_system database
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
//-----------------------------------------------------------------------------------------------------------------------


// -----------------------------------------------configuration-------------------------------------------------------------
app.set("view engine", "hbs");
app.set("views", "./view");
//======================================================================================================================

//--------------------------------------------------- routing------------------------------------------------------------
app.get('/', (req, resp) => {
    // resp.send('<h1>the this is first response</h1>')// can send html file but we will use tamplet engines here
    resp.render('index')
})
app.get("/add", (req, resp) => {
    resp.render("add")
})
app.get("/search", (req, resp) => {
    resp.render("search")
})
app.get("/update", (req, resp) => {
    resp.render("update")
})
app.get("/delete", (req, resp) => {
    resp.render("delete")
})
app.get("/view", (req, resp) => {
    resp.render("view")
})
app.get("/login_register", (req, resp) => {
    resp.render("login_register")
})
app.get("/logout", (req, resp) => {
    resp.render("login_register")
})














//--login---------------------------------------------------------------------------------------------------------------------

app.get("/login", (req, resp) => {
    const { username, password } = req.query
    // let lquiry = "select password from test where user_name = ?";
    let lquiry = "SELECT password FROM test WHERE user_name = ? OR email = ?";


    con.query(lquiry, [username,username], (err, result, fields) => {
        if (err) {
            throw err;
        } else {
            if (result[0] == null) {
                // user not found
                resp.render("login_register",{ mesg: true})
            }
            else{
                const saved_password = result[0].password
                // console.log(saved_password==password)
                
                if(password==saved_password){
                    resp.render("homepage")
                }
                else{
                    // password is wrong
                    resp.render("login_register",{mesg1:true})
                }
            }
        }
    });
})









//-----register----------------------------------------------------------------------------------------------------------

app.get("/register", (req, resp) => {
    const { fullname, email, username, password } = req.query // getting all the data from form
    let vaidationquery = "select user_name from test where user_name = ?;"
    con.query(vaidationquery,[username],(err,result,fields)=>{
        if(result[0]==null){
            
            // now running a query to pass data from form
            // let rquiry = "insert into test values{?,?,?,?}"-----------------------------------------
            let query = "INSERT INTO test (full_name, email, user_name, password) VALUES (?, ?, ?, ?)";
            con.query(query, [fullname, email, username, password], (err, result, fields) => {
                if (err) {
                    throw err;
                } else {
                    resp.send(`<h1>Welcome ${username} you are registered successfully go back to login</h1>`);
                }
            });
        }
        else{
            //Username already exist
            resp.render("login_register",{mesg2:true})
        }


    })
    
    
    
    
    
    

})









//------------------------------------------------------------------------------------------------------------------------




















// creating server-----------------------------------------------------------------------------------------------------
app.listen(port, (err) => {
    if (err) { throw err }
    else {
        console.log(`connection on =>localhost:3000 `)
    }
})