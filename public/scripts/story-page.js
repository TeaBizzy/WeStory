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


const initPage = function() {
  Promise.all([loadStory(), loadContributions()])
  .then((values) => {
    const story = values[0];
    const creator_id = story.creator_id;
    const user_id = Number($('body').attr('data-userid'));
    const isAuthor = creator_id === user_id;
    $('.approve-button').hide();
    if(isAuthor) {
      showAuthorControls();
    }
  })
};

const showAuthorControls = function() {
  $('.finish-button').show();
  $('.approve-button').show();
};

const registerEvents = function () {
  const contributionTextArea = $("#contribution-text").parent();

  contributionTextArea.submit(submitContribution);
};
