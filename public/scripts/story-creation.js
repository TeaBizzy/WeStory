// _____________________________________________________________________ //
// *--------------------------- Description ---------------------------* //

/*
  Captures user input into the new story form. Validates the entry, and
  makes an api request to create the new story, then redirects the user to that new page.
*/

// _______________________________________________________________________ //
// *----------------------------- Functions -----------------------------* //

const submitStory = function (event) {
  // Stop event bubbling
  event.preventDefault();

  // Setup variables
  const textArea = $("#story-text");
  const storyForm = textArea.parent();
  const content = textArea.val();
  const user_id = $("body").attr("data-userId");
  const contentLength = content.length;

  // Logs length, for testing... TODO: Replace this with a ui counter
  console.log(contentLength);

  // Error handling
  if (contentLength > 160) {
    $(".error-empty-story").hide();
    $(".error-exceed-max-chars").slideDown(300);
    $(".new-story").css("margin-top", 0);
    $('#story-text').focus();
    return;
  } else if (!contentLength) {
    $(".error-exceed-max-chars").hide();
    $(".error-empty-story").slideDown(300);
    $(".new-story").css("margin-top", 0);
    $('#story-text').focus();
    return;
  } else {
    $(".error-exceed-max-chars").slideUp(300);
    $(".error-empty-story").slideUp(300);
    $('#story-text').focus();
  }

  // Build the params object
  const newStory = {
    user_id,
    content,
    title: `Story ${Math.floor(Math.random() * 1000)}`,
  };

  // Create story, and redirect user.
  $.post("/api/stories", newStory).then((data) => {
    storyForm.trigger("reset");
    const storyId = data.story.id;
    window.location.href = `/stories/${storyId}`;
  });
};

$(".error-empty-tweet").hide();
$(".error-exceed-max-chars").hide();
