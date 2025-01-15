let p = new Promise((resolve, reject)=>{
    // reject("Some error occured!");
    console.log("I am inside Promise");
    resolve("Promise run successfully!");
});

// ye neeche wala code pura asynchronous hai, stack me sbse end me entry lega and then execute hoga
// if resolve and reject both are not passed inside promise then the code below will never execute(i.e. no code inside .then, .catch, .finally)
p.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
}).finally(()=>{
    console.log("Mai to run hunga hi!")
})

console.log("Mai sbse anjaan huuu...");