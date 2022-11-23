// Client facing scripts here
$(document).ready(function () {
  loadStory();
});

// Renders each story to the page
const renderStories = function (stories) {
  console.log(stories);
  for (const story of stories) {
    const $story = addStory(story);
    $("#user-stories-container").prepend($story);
  }
};

// Populates story html template using the given story data. Returns the finished html
const addStory = function (storyData) {
  console.log(storyData);
  const markup = `
  <a href="/stories/${storyData.id}" style="text-decoration: none">
    <article class="story">
      <div class="story-header">
      <span class="story-title">${storyData.title}</span>
      <a href="/users/${storyData.creator_id}" style="text-decoration: none">
        <span class="story-creator-handle">@${storyData.username}</span>
      </a>
      </div>
      <div class="story-content">
      <div class="cover-content">
        <img src="${storyData.cover_url}">
      </div>
      <p class="story-paragraph">${storyData.content}</p>
      </div>
    </article>
  </a>`;
  return markup;
};

// Fetches story data with an async request from the API
const loadStory = function () {
  const userId = $("body").attr("data-userid");
  $.get(`/api/stories/user/${userId}/`).then(function (storyData) {
    renderStories(storyData.stories);
  });
};