// const express=require('express')
// const userRoute=express.Router()
// const mongoose = require('mongoose');
// const users = require("../pages/models/users")
// const users = require("../pages/models/rooms")
// const newusers = require("../pages/models/newusers")
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const path = require("path");

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com', // Replace with your provider's SMTP server
//     port: 587, // Port may vary depending on your provider
//     secure: false, // Use true for TLS, false for non-TLS (consult your provider)
//     auth: {
//       user: 'ritu71298r@gmail.com', // Replace with your email address
//       pass: 'duug qnxf udac exbu' // Replace with your email password
//     }
//   });

  
//   const multer = require("multer");
//   userRoute.post("/registerMail", (req, res) => {
  
 

//     let { name, email, phone, city } = req.body; 

//     const contactMail = {
//         from: req.body.email, 
//         to: 'ritu71298r@gmail.com', 
//         subject: 'Sending Email using Node.js',
//         html: `<p>Hi there ${name},</p>
//                <p>This is your Contact Email:</p>
//                <p>Email: ${email}</p>
//                <p>Phone: ${phone}</p>
//                <p>City: ${city}</p>
             
//                <p>Thanks for registering!</p>`,
//     };

//     transporter.sendMail(contactMail, function (err, info) {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Email sending failed.");
//         } else {
//             console.log("Email sent: ", info.response);
//             res.redirect("/myaccount");
//         }
//     });
   
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             // Uploads is the Upload_folder_name
//             cb(null, "public/uploads");
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//         }
//     }); 
    
//     // Define the maximum size for uploading
//     // picture i.e. 1 MB. it is optional
//     const maxSize = 1 * 1000 * 1000;
    
    
    
//     const register = multer({
//         storage: storage,
//         limits: { fileSize: maxSize },
//         fileFilter: function (req, file, cb) {
//             // Set the filetypes, it is optional
//             const filetypes = /jpeg|jpg|png/;
//             const mimetype = filetypes.test(file.mimetype);
    
//             const extname = filetypes.test(
//                 path.extname(file.originalname).toLowerCase()
//             );
    
//             if (mimetype && extname) {
//                 return cb(null, true);
//             }
    
//             cb(
//                 "Error: File upload only supports the " +
//                     "following filetypes - " +
//                     filetypes
//             );
//         }
    
//         // mypic is the name of file attribute
//     }).single("mypic");

//     register(req, res, function (err) {
//         if (err) {
//             // ERROR occurred (here it can be occurred due
//             // to uploading image of size greater than
//             // 1MB or uploading different file type)
//             res.send(err);
//         } else {
//             // SUCCESS, image successfully uploaded
//             let final ={...req.body , mypic:req.file.filename}
            
            
//             let u = new newusers(final);

//             // u={file:req.file}

//             u.save(); 
//             res.send("Success, Image uploaded!");
            
//         }
//     });
// });
// //  userRoute.post("/registerMail", (req, res) => {
// //     let u = new newusers(req.body);
// //     u.save(); 

// //     let { name, email, phone, city, mypic } = req.body; 

// //     const contactMail = {
// //         from: req.body.email, 
// //         to: 'ritu71298r@gmail.com', 
// //         subject: 'Sending Email using Node.js',
// //         html: `<p>Hi there ${name},</p>
// //                <p>This is your Contact Email:</p>
// //                <p>Email: ${email}</p>
// //                <p>Phone: ${phone}</p>
// //                <p>City: ${city}</p>
// //                 <p>File: ${mypic}</p>
// //                <p>Thanks for registering!</p>`,
// //     };

// //     transporter.sendMail(contactMail, function (err, info) {
// //         if (err) {
// //             console.error(err);
// //             return res.status(500).send("Email sending failed.");
// //         } else {
// //             console.log("Email sent: ", info.response);
// //             res.redirect("/myaccount"); // Redirect to the desired page
// //         }
// //     });
// //     const storage = multer.diskStorage({
// //         destination: function (req, file, cb) {
// //             cb(null, "public/uploads");
// //         },
// //         filename: function (req, file, cb) {
// //             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
// //         }
// //       });
// //       // Define maximum upload file size (1 MB)
// //       const maxSize = 1 * 1000 * 1000;
      
// //       // Configure Multer
// //       const register = multer({
// //           storage: storage,
// //           limits: { fileSize: maxSize },
// //           fileFilter: function (req, file, cb) {
// //               const filetypes = /jpeg|jpg|png/;
// //               const mimetype = filetypes.test(file.mimetype);
// //               const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      
// //               if (mimetype && extname) {
// //                   return cb(null, true); 
// //               }
      
// //               cb("Error: File upload only supports the following filetypes - " + filetypes);
// //           }
// //       }).single("mypic");
// //       register(req, res, function (err) {
// //         if (err) {
// //             // Handle errors during file upload
// //             res.send(err);
// //         } else {
// //             // Success message after a successful upload
// //             res.send("Success, Image uploaded!");
// //         }
// //     });
// // });
  



// // support parsing of userRoutelication/json type post data
// userRoute.use(bodyParser.json());

// //support parsing of userRoutelication/x-www-form-urlencoded post data
// userRoute.use(bodyParser.urlencoded({ extended: true }));

// var cookieParser = require ('cookie-parser');
// var session =require ('express-session');
// const { register } = require('module');

// userRoute.use(cookieParser());
// userRoute.use(session({secret: "iambest"}));


// mongoose
//     .connect('mongodb://localhost:27017/Blog',
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

// // Handle connection events
// const db = mongoose.connection;
// db
//     .on('error', console.error.bind(console, 'MongoDB connection error:'));
//     db.once('open', () => {
//     console.log('Connected to MongoDB');
// });


// // let auth = function (req, res, next) {
// //     if(req.session.users) {
// //         return next()};
// //     else{
// //     return res.redirect("/")
// // }}

// // userRoute.get("/loginCheck", (req, res, next) => {
// //     if (req.session.user) { res.redirect("/adminHome")  
// //     } else {
// //     next(); } },
// //      (req, res) => {
// //    res.render("login")
// //  })


// // function requireAuth(req, res, next) {
// //     if(!req.session.users) {
// //         return res.redirect('/myaccount')
// //     } 
// // }

// userRoute.get("/",(req,res)=>{
//     if (!req.session.users){
//         res.redirect("/myaccount")
//     }
//     res.render("home")
// })

// userRoute.get("/about", (req,res)=>{
//  res.render("about")
    
//     // res.render("about")
// })


// userRoute.get("/booking",(req,res)=>{
//     res.render("booking")
// })

// userRoute.get("/contact",(req,res)=>{
//     res.render("contact")
// })

// userRoute.get("/team",(req,res)=>{
//     res.render("team")
// })

// userRoute.get("/services",(req,res)=>{
//     res.render("services")
// })

// userRoute.get("/testimonials",(req,res)=>{
//     res.render("testimonials")
// })


// // userRoute.get("/rooms",(req,res)=>{
// //     res.render("rooms")
// // })
// userRoute.get("/rooms", (req, res) => {
//     // Fetch all rooms from the database
//     rooms.find({})
//         .then((allRooms) => {
//             // Render the rooms.ejs template with fetched data
//             res.render("rooms", { rooms: allRooms });
//         })
//         .catch((error) => {
//             console.error("Error fetching rooms:", error.message);
//             res.status(500).send("An error occurred while retrieving the rooms.");
//         });
// });



// userRoute.get("/register", (req, res) => {
//     res.render("register"); 
// });

// // userRoute.post("/register", (req, res) => {
// //      let postData = new newusers({ ...req.body, status: 0 });
// //      postData.save() .then(() => {
// //      res.redirect("/register"); 
// //      })
// //      .catch((err) => {
// //         res.status(500).send("Error registering user");
// //         });
// //         });


//         userRoute.get("/shoppingusers", (req, res) => {
//             newusers.find().then((users)=>{
//                 res.render("shoppingusers", {d:users})
//             })
            
//         });

//          userRoute.get('/myaccount', (req, res) => {
//             res.render('myaccount');
//           });
          
//           // Handle the form submission
//           userRoute.post('/myaccount', (req, res) => {
//             newusers.findOne({name:req.body.name, password:req.body.password}).then((d)=> {
//                 if (d === null) {
//                     res.send("wrong credential! please check and correct them")
//                 } 
//                 else {
//                     console.log(d);
                    
//                     req.session.userId = d._id;
//                     res.redirect("/userdashboard")
//                 } 
//             })
     
//           });

       
//           userRoute.get("/userdashboard", (req, res) => {

//             newusers.findOne({_id:req.session.userId}).then((d)=>{
//                 console.log(d);
                
//                 res.render("userdashboard",{user:d});   
//             })
            
        
//         });

//         let auth = function(req, res, next) {
//             if(req.session.users)
//                 return next();
//             else
//             return res.redirect("/myaccount");
//         };

      
        
//         userRoute.get("/myaccount", (req, res, next) => {
//             if (req.session.users) { res.redirect("/userdashboard")  
//             } else {
//             next(); } },
//              (req, res) => {
//            res.render("myaccount")
//          })
        
//          userRoute.get("/newuserLogout",(req, res)=>{
//             req.session.destroy();
//             res.redirect("/")
        
//          })



        


// module.exports=userRoute




const express=require('express')
const userRoute=express.Router()
const mongoose = require('mongoose');
const users = require("../pages/models/users")
const rooms = require("../pages/models/rooms")
const booking =require("../pages/models/booking")
const newusers = require("../pages/models/newusers")
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require("multer");
const path = require("path");

// support parsing of userRoutelication/json type post data
userRoute.use(bodyParser.json());

//support parsing of userRoutelication/x-www-form-urlencoded post data
userRoute.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require ('cookie-parser');
var session =require ('express-session');

userRoute.use(cookieParser());
userRoute.use(session({secret: "iambest"}));


mongoose
    .connect('mongodb://localhost:27017/Blog',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

// Handle connection events
const db = mongoose.connection;
db
    .on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
    console.log('Connected to MongoDB');
});


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your provider's SMTP server
    port: 587, // Port may vary depending on your provider
    secure: false, // Use true for TLS, false for non-TLS (consult your provider)
    auth: {
      user: 'ritu71298r@gmail.com', // Replace with your email address
      pass: 'xjmb uozt zrxc zvog' // Replace with your email password
    }
  });
  
 userRoute.post("/registerMail", (req, res) => {
    
   
  
     
      const storage = multer.diskStorage({
          destination: function (req, file, cb) {
              // Uploads is the Upload_folder_name
              cb(null, "public/uploads");
          },
          filename: function (req, file, cb) {
              cb(null, file.fieldname + "-" + Date.now() + ".jpg");
          }
      }); 
      
      // Define the maximum size for uploading
      // picture i.e. 1 MB. it is optional
      const maxSize = 1 * 3000 * 3000;
      
      
      
      const register = multer({
          storage: storage,
          limits: { fileSize: maxSize },
          fileFilter: function (req, file, cb) {
              // Set the filetypes, it is optional
              const filetypes = /jpeg|jpg|png/;
              const mimetype = filetypes.test(file.mimetype);
      
              const extname = filetypes.test(
                  path.extname(file.originalname).toLowerCase()
              );
      
              if (mimetype && extname) {
                  return cb(null, true);
              }
      
              cb(
                  "Error: File upload only supports the " +
                      "following filetypes - " +
                      filetypes
              );
          }
      
          // mypic is the name of file attribute
      }).single("mypic");
  
      register(req, res, function (err) {
          if (err) {
              // ERROR occurred (here it can be occurred due
              // to uploading image of size greater than
              // 1MB or uploading different file type)
              res.send(err);
          } else {
              // SUCCESS, image successfully uploaded
              let final ={...req.body , mypic:req.file.filename}
              console.log(req.body);

              let { name, email, phone, city } = req.body; 
  
              const contactMail = {
                  from: req.body.email, 
                  to: 'ritu71298r@gmail.com', 
                  subject: 'Sending Email using Node.js',
                  html: `<p>Hi there ${name},</p>
                         <p>This is your Contact Email:</p>
                         <p>Email: ${email}</p>
                         <p>Phone: ${phone}</p>
                         <p>City: ${city}</p>
                       
                         <p>Thanks for registering!</p>`,
              };
              console.log(req.body.email);
              
          
              transporter.sendMail(contactMail, function (err, info) {
                  if (err) {
                      console.error(err);
                      return res.status(500).send("Email sending failed.");
                  } else {
                      console.log("Email sent: ", info.response);
                      res.redirect("/myaccount");
                  }
              });
             
              
              
              let u = new newusers(final);
  
              // u={file:req.file}
  
              u.save(); 
              res.send("Success, Image uploaded!");
              
          }
      });
  });


       



// let auth = function (req, res, next) {
//     if(req.session.users) {
//         return next()};
//     else{
//     return res.redirect("/")
// }}

// userRoute.get("/loginCheck", (req, res, next) => {
//     if (req.session.user) { res.redirect("/adminHome")  
//     } else {
//     next(); } },
//      (req, res) => {
//    res.render("login")
//  })


// function requireAuth(req, res, next) {
//     if(!req.session.users) {
//         return res.redirect('/myaccount')
//     }
// }

// userRoute.get("/",(req,res)=>{
//     // if (!req.session.users){
//     //     res.redirect("/myaccount")
//     // }
//     res.render("home")
// })

userRoute.get("/", (req, res) => {
    rooms.find({})
        .then((allRooms) => {
            res.render("home", { room: allRooms });
        })
        .catch((error) => {
            console.error("Error fetching rooms:", error.message);
            res.status(500).send("An error occurred while retrieving the rooms.");
        });
});

userRoute.get("/about", (req,res)=>{
 res.render("about")
})

// userRoute.get("/booking",(req,res)=>{
//     res.render("booking")
// })

// userRoute.get("/booking", (req, res) => {
//     // Fetch all rooms from the database
//     rooms.find({})
//         .then((allRooms) => {
//             // Render the rooms.ejs template with fetched data
//             res.render("booking", { rooms: allRooms });
//         })
//         .catch((error) => {
//             console.error("Error fetching rooms:", error.message);
//             res.status(500).send("An error occurred while retrieving the rooms.");
//         });
// });

// userRoute.get('/booking/:id', (req, res) => {
//     const roomId = req.params.id;

//     // Fetch room details from the database using the roomId
//     rooms.findById(roomId)
//         .then(room => {
//             if (!room) {
//                 return res.status(404).send('Room not found');
//             }

//             // Render the booking page with room details
//             res.render('booking', { room });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send('Server error');
//         });
// });

userRoute.get("/contact",(req,res)=>{
    res.render("contact")
})

userRoute.get("/team",(req,res)=>{
    res.render("team")
})

userRoute.get("/services",(req,res)=>{
    res.render("services")
})

userRoute.get("/testimonials",(req,res)=>{
    res.render("testimonials")
})

// userRoute.get("/rooms",(req,res)=>{
//     res.render("rooms")
// })

userRoute.get("/rooms", (req, res) => {
    // Fetch all rooms from the database
    rooms.find({})
        .then((allRooms) => {
            // Render the rooms.ejs template with fetched data
            res.render("rooms", { rooms: allRooms });
        })
        .catch((error) => {
            console.error("Error fetching rooms:", error.message);
            res.status(500).send("An error occurred while retrieving the rooms.");
        });
});

userRoute.get("/register", (req, res) => {
    res.render("register"); 
});



        userRoute.get("/shoppingusers", (req, res) => {
            newusers.find().then((users)=>{
                res.render("shoppingusers", {d:users})
            })
        });

         userRoute.get('/myaccount', (req, res) => {
            res.render('myaccount');
          });
          
          // Handle the form submission
          userRoute.post('/myaccount', (req, res) => {
            newusers.findOne({name:req.body.name, password:req.body.password}).then((d)=> {
                if (d === null) {
                    res.send("wrong credential! please check and correct them")
                } 
                else {
                    console.log(d);
                    
                    req.session.userId = d._id;
                    res.redirect("/userdashboard")
                } 
            })
          });

       
          userRoute.get("/userdashboard", (req, res) => {

            newusers.findOne({_id:req.session.userId}).then((d)=>{
                console.log(d);
                
                res.render("userdashboard",{user:d});   
            })
        });

        let auth = function(req, res, next) {
            if(req.session.users)
                return next();
            else
            return res.redirect("/myaccount");
        };

        userRoute.get("/myaccount", (req, res, next) => {
            if (req.session.users) { res.redirect("/userdashboard")  
            } else {
            next(); } },
             (req, res) => {
           res.render("myaccount")
         })
        
         userRoute.get("/newuserLogout",(req, res)=>{
            req.session.destroy();
            res.redirect("/")
        
         })


       
         userRoute.get("/viewDetails/:id", (req, res) => {

            rooms.findById(req.params.id).then((rooms) => {
                if (rooms) {
                    res.render("viewDetails", { rooms: rooms });
                } else {
                    res.status(404).send("User not found");
                }
            }).catch((err) => {
                res.status(500).send("Error retrieving user");
            });
        });


        userRoute.get('/booking/:id', (req, res) => {
            const roomId = req.params.id;
            let user={};
            newusers.findOne({_id:req.session.userId}).then((d)=>{user=d});


        console.log("user----"+user);
        
        
            // Fetch room details from the database using the roomId
            rooms.findById(roomId).then(room => {
                    if (!room) {
                        return res.status(404).send('Room not found');
                    }
        
                    // Render the booking page with room details
                    res.render('booking', {room:room ,user:user} );
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send('Server error');
                });
        });

        userRoute.post("/booking", (req, res) => {
            const { roomId, userId, checkIn, checkOut, roomNo, message } = req.body;
        
            if (!roomId || !userId || !checkIn || !checkOut || !roomNo || !message) {
                return res.status(400).json({ error: "All fields are required." });
            }
        
            new booking({ roomId, userId, checkIn, checkOut, roomNo, message })
                .save()
                .then(() => {
                    res.redirect("/booking-confirmation");
                })
                .catch((err) => {
                    console.error("Error saving booking:", err);
                    res.status(500).json({ error: "Failed to create booking" });
                });
        });

        userRoute.get("/booking-confirmation", (req, res) => {
            res.send("Your booking was successful! Thank you.");
        });


       


module.exports=userRoute