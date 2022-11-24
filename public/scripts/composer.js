$(document).ready(function () {
  // Click nav bar button to hide/show new story form
  $(".new-story").hide();
  $(".error-empty-story").hide();
  $(".error-exceed-max-chars").hide();

  $(".create-button").on("click", () => {
    if ($(".new-story").first().is(":hidden")) {
      $(".new-story").slideDown(800);
      $(".welcome").css("margin-top", 30);
      $(".profile-header").css("margin-top", 30);
    } else {
      $(".error-empty-story").hide();
      $(".error-exceed-max-chars").hide();
      $(".new-story").css("margin-top", 150);
      $(".new-story").slideUp(800);
      $(".welcome").css("margin-top", 150);
      $(".profile-header").css("margin-top", 150);
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
