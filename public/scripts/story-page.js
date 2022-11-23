$(document).ready(function () {
  registerEvents();
  $("footer").hide();

  $(window).on("scroll", function () {
    let togglePosition = $(".toggle-contributions").offset().top;
    let toggleHeight = $(".toggle-contributions").outerHeight();
    let windowHeight = $(window).height();
    if ($(window).scrollTop() > togglePosition + toggleHeight - windowHeight) {
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

  $(".toggle-contributions").on("click", () => {
    $("html, body").animate({ scrollTop: $(".story").height() }, 800);
  });
});

const registerEvents = function () {
  const contributionTextArea = $("#contribution-text").parent();

  contributionTextArea.submit(submitContribution);
};
