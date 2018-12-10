(function () {
    'use strict';

    //check for support
    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }

    var idb = window.indexedDB;


    const dbName = "the_name";

    var request = idb.open(dbName, 1.1);
    
    var customerData = [
        {"name":"john1","ssn":"key1","email":"joe@example.com"},
        {"name":"john2","ssn":"key2","email":"joe@example.com"},
        {"name":"john3","ssn":"key3","email":"joe@example.com"},
        {"name":"john4","ssn":"key4","email":"joe@example.com"},
        {"name":"john5","ssn":"key5","email":"joe@example.com"}
    ]


    request.onerror = function(event) {
      // Handle errors.
      console.log(event);
      
    };
    request.onupgradeneeded = function(event) {
      var db = event.target.result;
    
      // Create an objectStore to hold information about our customers. We're
      // going to use "ssn" as our key path because it's guaranteed to be
      // unique - or at least that's what I was told during the kickoff meeting.
      if(!db.objectStoreNames.contains('customers')){
        var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
    
        // Create an index to search customers by name. We may have duplicates
        // so we can't use a unique index.
        objectStore.createIndex("name", "name", { unique: false });
      
        // Create an index to search customers by email. We want to ensure that
        // no two customers have the same email, so use a unique index.
        objectStore.createIndex("email", "email", { unique: true });
      
        // Use transaction oncomplete to make sure the objectStore creation is 
        // finished before adding data into it.
        objectStore.transaction.oncomplete = function(event) {
          // Store values in the newly created objectStore.
          var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
          customerData.forEach(function(customer) {
            customerObjectStore.add(customer);
          });

        };
      }
      
    };

    request.onsuccess = function(event) {
        var db = event.target.result;
        if(db.objectStoreNames.contains('customers')){
            var tx = db.transaction('customers', 'readwrite');
            var store = tx.objectStore('customers');
            var item = {
                "ssn":"key7",
                name: 'newuser',
                price: 99.99,
                description: 'A very tasty, but quite expensive, sandwich',
                created: new Date().getTime()
              };
              store.put(item);
              console.log("successfully add item to existing store");
            customerData.forEach(function(d) {
                store.put(d);
                console.log("add d to db");
                
            })  
        }
    }




})();