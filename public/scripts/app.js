// Client facing scripts here
$(document).ready(function() {
    loadStory();
  });

// Renders each story to the page
const renderStories = function(stories) {
  for (const story of stories) {
    const $story = addStory(story);
    $('#story-container').prepend($story);
  }
};

// Populates story html template using the given story data. Returns the finished html
const addStory = function(storyData) {
  const markup = `
  <a href="/stories/${storyData.id}"><article class="story">
  <div class="story-header">
  <span class="story-title">${storyData.title}</span>
  <span class="story-creator-handle">@creator-username</span>
  </div>
  <div class="story-content">
  <i class="fa-solid fa-book"></i>
  <p class="story-paragraph">${storyData.content}</p>
  </div>
  </article></a>`;
  return markup;
};

// Fetches story data with an async request from the API
const loadStory = function() {
  $.get('/api/stories/')
    .then(function(storyData) {
      renderStories(storyData.stories);
    });
};
