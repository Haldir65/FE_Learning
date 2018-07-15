const posts = [
    {title:"post one",body:"This is post one"},
    {title:"post two",body:"This is post two"}
];

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach( (post,index) => {
            output +=`<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}



function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error , something bad happend')
            }
        },2000)
    })
}


// createPost({  title: 'post three',
//     body: 'post three' }).then(getPosts)
//     .catch((err) => console.log(error));


// Async / Await

// async function init(){
//     await createPost({  title: 'post three',
//     body: 'post three' });
//     getPosts();
// }

// init()

// Async Await with fetch

async function fetchUser(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
}

fetchUser();


// const promise1 = Promise.resolve("Hello from upstream");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
//     setTimeout(resolve,2000,"bon voyage")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/posts")
// .then( res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values => 
//     console.log(values)
// );
