const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
      res.write('Welcome to the new project')
      res.end()
    }
    if(req.url ==='/about'){
        res.write('Here is our story')
        res.end()
    }
      res.write(`
       <h3>OOPS</h3>
        <p>We can't find the page you are looking for</p>
        <a href="/">Back Home</a>`
      )
      res.end()
})

server.listen(8080)