$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    console.log(event);
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide'); // hide the collapsible menu no matter wherever click on the page
    }
  });

  // for other browsers

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
