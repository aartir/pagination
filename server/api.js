var con=require('./Db')
const express=require('express')
const app=express();
const cors=require('cors')
const bodyparser=require('body-parser')


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended':false}))

app.post('/info',function(req,res){
    page=req.body.page;
    limit=req.body.limit;
    let str=`SELECT SQL_CALC_FOUND_ROWS * from info LIMIT ${page*limit},${limit}; SELECT FOUND_ROWS() AS count;`
    console.log(str)
    con.query(str, function(err,data){
        if(err) throw err;
        else{
            console.log(data)
             res.json(data);

        }
    })
})

app.listen(3200,function(){
    console.log("server listening on port 3200")
})
