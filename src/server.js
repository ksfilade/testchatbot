require("dotenv").config();
const express = require ("express");
const configViewEngine = require('./config/viewEngine')
const initWebRoutes  = require('./routes/web')
const bodyParser  = require('body-parser')
let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port} ${process.env.FACEBOOK_PAGE_ACCESS_TOKEN}`);
});