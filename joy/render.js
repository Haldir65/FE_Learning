const bookListingTemplate = require("./template/muscle.hbs");

let addContent = document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement("div");
  div.innerHTML = bookListingTemplate({
    username: "John Doe",
    info: "Your books are due next Tuesday",
    books: [
      { title: "A book", synopsis: "With a description" },
      { title: "Another book", synopsis: "From a very good author" },
      { title: "Book without synopsis" }
    ],
    people: [
      { firstName: "Yehuda", lastName: "Katz" },
      { firstName: "Carl", lastName: "Lerche" },
      { firstName: "Alan", lastName: "Johnson" }
    ]
  });
  document.body.appendChild(div);
  console.log(div);
});

export { addContent };
