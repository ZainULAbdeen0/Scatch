const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const path = require("path");
const db = require("./config/database-connection");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const ownerRoutes = require('./routes/ownerRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join( __dirname , "public")));
app.set("view engine" , "ejs");

app.use('/owner' , ownerRoutes );
app.use('/product' , productRoutes );
app.use('/user' , userRoutes)

app.listen(3000);