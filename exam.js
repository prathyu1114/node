const http=require('http');
let data='';
const server=http.createServer((req,res)=>{
    res.end(data);
    })
    server.listen(4242,()=>{
        console.log('server is running');
    });
//const https=require('https');

function fetch(url){
    return new Promise((resolve,reject)=>{
        http.get(url,(res)=>{
            res.on('data',(rd)=>data=data+rd);
            res.on('end',()=>resolve(data));
            res.on('error',reject);
        });
    });
}

fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(data=>{
    for(i=0;i<=data.length;i++)
    console.log(JSON.parse(data).data[i].employee_name,
    JSON.parse(data).data[i].employee_salary,
    JSON.parse(data).data[i].employee_age);

});