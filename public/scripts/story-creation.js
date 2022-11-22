const submitStory = function(event) {
  event.preventDefault();

  const textArea = $('#story-text');
  const storyForm = textArea.parent();
  const storyContent = textArea.val();
  const contentLength = storyContent.length;
  console.log(contentLength)

  if(contentLength > 160) {
    console.log(`Error: Submission length is: ${storyContent.length} must be under 160 characters!`);
  }

  if(contentLength <= 0) {
    console.log(`Error: Submission can't be empty!`);
  }

  console.log(storyContent);
  storyForm.trigger("reset");
};
