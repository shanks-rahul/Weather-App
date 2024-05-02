const express=require('express');
const path=require('path');
const app=express();
const hbs = require('hbs');
const port = 3000;
const staticPath=path.join("__dirname","../public");
const template_path=path.join("__dirname","../public/templates/views");
const partial_path=path.join("__dirname","../public/templates/partials");
 


app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
     res.render('about');
 });
app.get("/Weather",(req,res)=>{
    res.render('weather');
});
app.get('/*',(req,res)=>{
    res.render('404error',{
        errorMsg:"Oops! page not found"
    });
});
app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
});