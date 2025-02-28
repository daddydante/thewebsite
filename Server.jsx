const experess=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'thewebsitetours',
})

app.post()

app.post('/bookings',(req,res)=>{
        const sql='INSERT INTO bookings(`firstname`,`surname`,`destination`,`email`,`phone`,`travelmonth`) VALUES(?)'
        const values=[
            req.body.firstname,
            req.body.surname,
            req.body.destination,
            req.body.email,
            req.body.phone,
            req.body.travelmonth
        ]
        db.query(sql,[values], (err,data)=>{
            if(err){
                return res.json('error')
            }
            return res.json(data);
        })
    })


app.listen(8081,()=>{
    console.log("listening");
})