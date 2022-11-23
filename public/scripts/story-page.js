$(document).ready(function () {
  registerEvents();
  initPage()
  $("footer").hide();
  $('.finish-button').hide();

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

// Loads all data, shows author controls.
const initPage = function() {
  // Load & render data from APIs
  Promise.all([loadStory(), loadContributions()])
  .then((values) => {
    // Declare variables
    const story = values[0];
    const creator_id = story.creator_id;
    const user_id = Number($('body').attr('data-userid'));
    const isAuthor = creator_id === user_id;

    // Hides approve buttons TODO: make these hidden by default
    $('.approve-button').hide();

    // Display author controls
    if(isAuthor) {
      showAuthorControls();
    }
  })
};

// Shows author controls
const showAuthorControls = function() {
  $('.finish-button').show();
  $('.approve-button').show();
};

//registers events
const registerEvents = function () {
  const contributionTextArea = $("#contribution-text").parent();

  contributionTextArea.submit(submitContribution);
};
