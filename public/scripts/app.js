// Client facing scripts here
$(document).ready(function() {
  const renderStories = function(stories) {

    for (const story of stories) {
      const $story = addStory(story);
      $('#story-container').prepend($story);
    }
  };

  const addStory = function(data) {
    const storyInfo = data.story;
    const markup = `
    <article class="story">
    <div class="story-header">
      <span class="story-title">${storyInfo.title}</span>
      <span class="story-creator-handle">@creator-username</span>
    </div>
    <div class="story-content">
      <i class="fa-solid fa-book"></i>
      <p class="story-paragraph">${storyInfo.content}</p>
    </div>
  </article>
    `;
    return markup;
  };

  const loadStory = function() {
    $.get({
      url:'/',
    })
      .then(function(storyData) {
        renderStories(storyData);
      });
  };

  loadStory();
});
