const express = require("express")
const app = express()
const path = require("path");

var cookieParser = require ('cookie-parser');
var session =require ('express-session');
 
app.use(cookieParser());
app.use(session({secret: "iambest"}));


const userroutes =require("./routes/users");

const ru =require("./routes/frontendrouter");


app.use(function (req, res, next) {
    // res.locals.username = "Ram";
    res.locals.loginStatus = 0
    if(req.session.userId) {
        res.locals.loginStatus=1
    }
    next();
});



app.use(express.static('public'));
app.set("view engine", "ejs")
// app.set("page", path.join(__dirname, "./public/uploads"));
app.set("views", ["./pages/page", "./pages/admin"]); 


app.use("/" ,userroutes)

app.use("/",ru) 

app.get('/success', (req, res) => {
    const booking = {
        roomName: 'Deluxe Room',
        totalPrice: '1000',
        id: 'ABC123456789',
        checkIn: '2021-12-12',
        checkOut: '2021-12-15', 
    };
  
    res.render('success', { booking });
  });


app.listen(1010, console.log("server running fine"))