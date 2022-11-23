let story;
let contributions;

$(document).ready(function () {
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
    story = values[0];
    contributions = values[1];
    const creator_id = story.creator_id;
    const user_id = Number($('body').attr('data-userid'));
    const isAuthor = creator_id === user_id;

    console.log(contributions)

    // Hides approve buttons TODO: make these hidden by default
    $('.approve-button').hide();

    // Display author controls
    if(isAuthor) {
      showAuthorControls();
    }

    registerEvents();
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
  const approveButtons = $('.approve-button');

  approveButtons.on('click', (event) => {
    event.preventDefault();
    const storyId = Number($('body').attr('data-storyid'));
    const selectedContribution = event.target.closest('.contribution')
    const id = Number(selectedContribution.attributes[1].value);
    let content;

    for(const contribution of contributions) {
      if(contribution.contribution_id === id) {
        content = contribution.content;
        break;
      }
    }

    const fullContent = story.content + '\n' + content
    const params = {storyId, fullContent};

    $.ajax({
      url: `/api/stories/${storyId}`,
      method: 'PUT',
      data: params
    }).then(loadStory());
  });
  contributionTextArea.submit(submitContribution);
};
