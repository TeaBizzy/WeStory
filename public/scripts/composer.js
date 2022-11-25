$(document).ready(function () {
  // Click nav bar button to hide/show new story form
  $(".new-story").hide();
  $(".error-empty-story").hide();
  $(".error-empty-contribution").hide();
  $(".error-exceed-max-chars").hide();

  $(".create-button").on("click", () => {
    if ($(".new-story").first().is(":hidden")) {
      $(".new-story").slideDown(500);
      $('#story-text').focus();
    } else {
      $(".error-empty-story").hide();
      $(".error-exceed-max-chars").hide();
      $(".new-story").slideUp(500);

    }
  });

  // Function to show button if user scrolls 100 pixels
  $("footer").hide();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("footer").fadeIn();
    } else {
      $("footer").fadeOut();
    }
  });

  // function to take user back to the top after clicking the button
  $(".fa-arrow-up").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
