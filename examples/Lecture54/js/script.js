// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      this.textContent = "Said  to it!";   // "this" refers to the button object
      console.log(this);
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;      // make sure to use innerHTML instead of textContent: <h2>.....</h2>

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        console.log(title);
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
        console.log(title);
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);

  }
);

// document.querySelector("button")
//   .onclick = sayHello;


//-----------------checked--------------------------------




