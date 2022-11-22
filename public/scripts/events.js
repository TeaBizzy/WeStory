$(document).ready(() => {
  registerEvents();
});

const registerEvents = function() {
  const storyTextArea = $('#story-text').parent();

  storyTextArea.submit(submitStory);
};
