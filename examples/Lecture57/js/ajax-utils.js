// immediately invoked function expression (IIFE) to make global variables local

(function (global) {  // "global" is "window" object

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest()); // XMLHttpRequest is a built-in object in web browsers to request data from a server
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler) {
    var request = getRequestObject();

    // onreadystatechange is an event handler that is called whenever the readyState attribute changes
    request.onreadystatechange =  
      function() { 
        handleResponse(request, responseHandler);  // handleResponse is a function defined below
      };
    request.open("GET", requestUrl, true);

    // all steps above are to set up the request ,
    // this is the last step to send the request
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler' function
//  if response is ready and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&   //4 means request is finished and response is ready
     (request.status == 200)) {
    responseHandler(request);     // i cant find out where is the responseHandler function defined
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

