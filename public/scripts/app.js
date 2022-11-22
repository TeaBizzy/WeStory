// Client facing scripts here
$(document).ready(function() {
  $.get({
    url:'/api/stories',
  });
  const $markup = `
    <article class="story">
    <div class="story-header">
      <span class="story-title">Lord of the Things</span>
      <span class="story-creator-handle">@creator-username</span>
    </div>
    <div class="story-content">
      <i class="fa-solid fa-book"></i>
      <p class="story-paragraph">This is a story, the character limit is upwards of 160 characters. This paragraph is about 160 characters in length. No story, or contribution can be longer!</p>
    </div>
    </article>
  `
  $('#story-containter').prepend($markup);
  
})
