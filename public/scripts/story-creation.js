// _____________________________________________________________________ //
// *--------------------------- Description ---------------------------* //

/*
  Captures user input into the new story form. Validates the entry, and
  makes an api request to create the new story, then redirects the user to that new page.
*/

// _______________________________________________________________________ //
// *----------------------------- Functions -----------------------------* //

const submitStory = function(event) {
  // Stop event bubbling
  event.preventDefault();

  // Setup variables
  const textArea = $('#story-text');
  const storyForm = textArea.parent();
  const content = textArea.val();
  const user_id = $('body').attr('data-userId');
  const contentLength = content.length;

  // Logs length, for testing... TODO: Replace this with a ui counter
  console.log(contentLength);

  // Error handling
  if (contentLength > 160) {
    console.log(`Error: Submission length is: ${contentLength} must be under 160 characters!`);
    return;
  }

  if (contentLength <= 0) {
    console.log(`Error: Submission can't be empty!`);
    return;
  }

  // Build the params object
  const newStory = {
    user_id,
    content,
    title: `Story ${Math.floor(Math.random() * 1000)}`
  };

  // Create story, and redirect user.
  $.post('/api/stories', newStory)
    .then(data => {
      storyForm.trigger("reset");
      const storyId = data.story.id;
      window.location.href = `/stories/${storyId}`;
    });
};
