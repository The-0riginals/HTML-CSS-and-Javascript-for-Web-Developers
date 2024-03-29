$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


//new code for ajax
//immediately invoked function expression

(function (global) {

var dc = {};     // dc stands for David Chu (the name of the restaurant)

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show "loading icon" inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";  //creating a div with class text-center
  html += "<img src='images/ajax-loader.gif'></div>";  // ajax-loader.gif is a loading icon from www.ajaxload.info
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

  // On first load, show home view
  showLoading("#main-content");   //show loading icon


  // get data from  homeHtml (home-snippet.html ) and insert it into main-content
  $ajaxUtils.sendGetRequest(  
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);  // false means don't treat response as JSON
});


global.$dc = dc;  // expose dc to the global object

})(window);
