// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    
    // this is the same as lecture55 but we are using ajax to get the name from the server
    // and combine code inside sayHello function with code in addEventListener
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);

// $: $ in Ajax same as Jquery. The $ sign is nothing but an identifier of jQuery() function. 
// Instead of writing jQuery we simply write $ which is the same as jQuery() function.
// A $ with a selector specifies that it is a jQuery selector. It is given a shorter identifier as $ just to reduce the time for writing larger syntax.




