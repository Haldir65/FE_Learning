window.onload = function(){

    var jam = {
        name : 'Jane',
        greeting: function (X) {
          window.setInterval(function () {
              if (X>0) {
                console.log(this.name+' greet you');
              }
          },500)
        }
      }
      jam.greeting()

    var http = new XMLHttpRequest();
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            console.log(JSON.parse(http.response))
        }
    };

    http.open("GET",'data/tweets.json',true);
    http.send();

    /// Cross origin requests are only supported
    // for protocol schemes: http, data, chrome, chrome-extension, https
    // Chrome 默认不支持跨域请求，启动时要加上个flag就行了

    //  ajax的readyState有四种
    // 0 - request not initialized
    //  1 . request has been set up
    // 2. request has been set
    // 3. request is in process
    // 4. request is complete

    // ajax的open第三个参数表示是异步还是同步，一般都得异步。由于js是单线程的，
    //所以会把实际的网络请求工作放到一条js以外的线程中，完成后丢到当前js线程任务池的最后。
    // 当前线程的任务完成后就可以执行这段回调

    //promise(ES6) is a placeholder for something that will happen in the future 
    function get(url){
        return new Promise(function(resolve,reject){
            var http = new XMLHttpRequest();  
            http.open('GET',url,true);
            http.onload = function(){
                if(http.status==200){
                    resolve(JSON.parse( http.response));
                }else{
                    reject(http.statusText);
                }
            }
            http.onerror = function () {
                reject(http.statusText)
            }
            http.send();
        });

        var promise = get('data/tweets.json');
        promise.then(function (tweets) {
            console.log(tweets);
            return get('data/friends.json')
        }).then(function name(friends) {
           console.log(friends);
        }).
        catch(function(error){
            console.log(error);
        })
    };
    

    // 用jQuery就简单很多
    // $.get('data/tweets.json').then(function (data) {
    //     console.log(data)
    //     return $.get('friends.json')
    // }).then(function (data) {
    //     console.log(data)
    //     return $.get('videos.json')
    // }).then(function(data){
    //     console.log(data)
    // });

    function* gen() {
        var x = yield 10;
    }

    var myGen = gen();
    console.log(myGen.next())
    console.log(myGen.next())
     //{value: 10, done: false}
    // {value: undefined, done: true}         
}