const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static("public"))
let task=[]
let work=[]
let header="TO DO LIST"
let workheader="WORK"
app.get("/",(req,res)=>{
    res.render("index",{new_task:task,HEADER:header})
})
app.post("/",(req,res)=>{
     if(req.body.btn!="TO DO LIST"){
        work.push(req.body.task)
        res.redirect("/work");
     }else{
      task.push(req.body.task)
    res.redirect("/")
    }
})
app.get("/work",(req,res)=>{
    res.render("index",{new_task:work,HEADER:workheader})
})




app.listen(3000,()=>{
    console.log("listeninig");
})