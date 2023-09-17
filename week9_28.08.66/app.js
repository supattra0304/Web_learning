const express = require("express");
const bodyParser = require("body-parser");

const path = require('path')
const routDir = require('./utilities/path')
const app = express();

app.set('view engine','pug')
app.set('views','views')

const adminData = require('./routes/admin')
const storeRoutes = require('./routes/store')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use("/admin",adminData.routes)

app.use(storeRoutes)

app.use((req,res,next)=>{
  res.status(404).render('404')
})


app.listen(3000);