
const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
          }
  const first=result;
readFile('./content/secondtext.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const secondtext=result
writeFile('./content/resultsync.txt',
`here the rseult ${first} ${secondtext}`,(err,result)=>
{
    if(err){
        console.log(err)
        return
    }
     console.log('done with this task');
})

})
   
         })
         console.log('starting next task');