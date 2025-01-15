// asynchronous functions
// async function getData() {
//     setTimeout(()=>{
//         console.log("I am async function");
//     }, 2000) // 2000ms = 2sec
//     console.log("Hello there");
// }

// let output = getData();
// console.log("My name is Aryan Jain");
// console.log("async function always returns a promise:", output);

// **************************************************************************************

// using await to make asynchronous data like synchronous (i.e. jb tk async code execute nhi hoga tb tk uske neeche wala code aur data nhi chalega)
// here is an example using fetch API, if we do not use await here then data will print without fetching because data is async so it will recieve at last.
// for this problem we use await
// await humesha async function ke andar hi use kr skte hai
// async function getData() {
//     // get request - async
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//     // parse json - async
//     let data = await response.json();
//     // run after above line executes
//     console.log(data);
// }
// getData();

// **************************************************************************************

// for post request, using of fetch API
const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Love babbar -> I am in love with someone.",
    userId: 5,
    /* other post data */
  }),
};

async function postData() {
  const response = await fetch("https://dummyjson.com/posts/add", options);
  let data = await response.json();
  console.log("post data response: ", data);
}

//apikey
async function getData() {
    const response = await fetch("https://dummyjson.com/posts");
    let data = await response.json();
    let posts = data.posts;
    console.log("get data response: ", posts.filter((d)=>{
    return d.id==30;
    }));
}

async function processData() {
  await postData();
  await getData();
}
processData();
