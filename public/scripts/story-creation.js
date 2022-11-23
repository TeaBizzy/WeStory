const submitStory = function(event) {
  event.preventDefault();

  const textArea = $('#story-text');
  const storyForm = textArea.parent();
  const content = textArea.val();
  const contentLength = content.length;
  const user_id = $('body').attr('data-userId');
  console.log(contentLength)

  if(contentLength > 160) {
    console.log(`Error: Submission length is: ${contentLength} must be under 160 characters!`);
  }

  if(contentLength <= 0) {
    console.log(`Error: Submission can't be empty!`);
  }

  storyForm.trigger("reset");
  const newStory = {
    user_id,
    content,
    title: `Story ${Math.floor(Math.random() * 1000)}`
  }

  $.post('/api/stories', newStory)
  .then(data => {
    const storyId = data.story.id;
    window.location.href=`/stories/${storyId}`;
  });

};
