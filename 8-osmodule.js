const os=require('os')

const user=os.userInfo()
console.log(user)

console.log(`the system up time is ${os.uptime()} seconds`)
const cureentos={
    name:os.type(),
    relase:os.release(),
    totmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(cureentos)