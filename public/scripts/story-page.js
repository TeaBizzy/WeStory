let story;
let contributions;
let isAuthor = false;

$(document).ready(function () {
  initPage()
  $("footer").hide();
  $('.finish-button').hide();

  // footer appears when the user scrolls past the end of the
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
    isAuthor = creator_id === user_id;

    // Hides approve buttons TODO: make these hidden by default
    $('.approve-button').hide();

    // Display author controls
    showAuthorControls();

    if(story.is_completed) {
      completeStory();
    }

    registerEvents();
  })
};

// Shows author controls
const showAuthorControls = function() {
  if(!isAuthor) {
    return;
  }

  if(story.is_completed) {
    return;
  }

  $('.finish-button').show();
  $('.approve-button').show();
};

//registers events
const registerEvents = function () {
  const contributionTextArea = $("#contribution-text").parent();
  const approveButtons = $('.approve-button');
  const finishButton = $('.finish-button');

  finishButton.on('click', (event) => {
    event.preventDefault();
    finishButton.fadeOut();
    const storyId = Number($('body').attr('data-storyid'));
    const completed = true;
    const fullContent = story.content;
    const params = {storyId, fullContent, completed};
    updateStory(params);
    completeStory();
  });

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
    const params = {storyId, fullContent, completed: false};

    updateStory(params);
  });
  contributionTextArea.submit(submitContribution);
};

const updateStory = function(params) {
  $.ajax({
    url: `/api/stories/${params.storyId}`,
    method: 'PUT',
    data: params
  }).then(data => {
    loadStory();
    story = data.story;
  })
};

const completeStory = function() {
  $('.new-contribution').remove();
  $('.contributions-container').remove();
};
