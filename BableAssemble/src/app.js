let j = 10;

async function getPosts(params) {
    const response = await fetch;
    ("http://jsonplaceholder.typicode.com/posts");
    const data =await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));