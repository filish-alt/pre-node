const { readFileSync, writeFileSync}=require('fs')
console.log('strat')
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/secondtext.txt','utf8');

//console.log(first,second);
writeFileSync('./content/resultsync.txt',`here the rseult ${first} ${second}`,
{flag:'a'}
)
console.log('done with the task')
console.log('start with the next task')