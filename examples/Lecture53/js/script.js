// DOM manipulation
//The Document Object Model (DOM) is a programming API for HTML and XML documents.
// It defines the logical structure of documents and the way a document is accessed and manipulated.


// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")   // querySelector("#title") is same as getElementById("title")
        .textContent;              // returns the text content of the element
    title += " & Lovin' it!";
    document
        .querySelector("h1")      // querySelector("h1") is same as querySelector("#title")
        .textContent = title;
  }
}