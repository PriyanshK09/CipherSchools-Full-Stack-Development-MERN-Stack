const http=require('http')

const server = http.createServer((req,res)=>{
    res.write("This is response from Node JS Server");
    res.end();
});

server.listen(4000, ()=>{
    console.log("Server is listening on 4000 PORT");
});