function getViaPromise(url) {
    var promise = new Promise((resolve ,reject) => {
        let client = new XMLHttpRequest();
        client.open('GET',url,true);
        client.onreadystatechange = () => {
           if(client.readyState === 4 ) {
               if(client.status === 200 ){
                   resolve(client.responseText);
                   console.log("response of GET Arrived");
               } else {
                   var reason = { code : client.status, response: client.resonse };
                   reject(reason);
               }
           }
        };
        client.send()
    });
    return promise;
}


function postViaPromise(url ,data) {
    return new Promise((resolve,reject) => {
        let client = new XMLHttpRequest();
        client.open("POST", url ,true);
        client.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        client.onreadystatechange = () => {
            if (client.readyState === 4) {
                if(client.status >=200  && client.status <=400 ){
                    resolve(client.responseText);
                    console.log("response of POST Arrived");
                } else {
                    let reason = { 'code': client.status, "response": client.response}
                    reject(reason);
                }
            }
        }
        client.send();
    });
}

function loadPosts() {
   let p1 =  getViaPromise("https://jsonplaceholder.typicode.com/posts");
   let data =   {
    "userId": 1,
    "id": 2,
    "title": "dumb post",
    "body": "this is some dumb post , dont care"
  }     
  let p2 = postViaPromise("https://jsonplaceholder.typicode.com/posts",data);

  Promise.all([p1,p2]).then(values => {
    console.log(values);
  });
}

function onePromiseAfterAnother(){
    let data =   {
        "userId": 1,
        "id": 2,
        "title": "dumb post",
        "body": "this is some dumb post , dont care"
      };
   let p1 =  getViaPromise("https://jsonplaceholder.typicode.com/posts");
   let p2 = postViaPromise("https://jsonplaceholder.typicode.com/posts",data);
      p1.then( data => {
        console.log(`data of Promise1 is ${data}` );
        return p2;
      }
    ).then(data => {
        console.log(`data of promise2 is ${data}`);
    }).catch(err => {
        console.log(err);
    });
}

// loadPosts();
onePromiseAfterAnother();