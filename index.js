const express=require("express")
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    
    const veg={
        name:'Banana',
        price:100,
        color:"green"
    }
    res.send(veg)
})


app.listen(port,()=>{
    console.log(`Example app listening at http://${port}`)
})