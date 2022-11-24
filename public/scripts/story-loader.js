const loadStory = function () {
  const storyId = $("body").attr("data-storyid");

  const promise = new Promise((resolve) => {
    $.get(`/api/stories/${storyId}`).then((data) => {
      const story = data.story;
      const splitStory = story.content.split("\n");
      renderStory(splitStory);
      resolve(story);
    });
  });

  return promise;
};

const renderStory = function (paragraphs) {
  const storyContainer = $(".story-content");
  storyContainer.empty();
  for (const paragraph of paragraphs) {
    const newParagraph = generateParagraph(paragraph);
    storyContainer.append(newParagraph);
  }
};

// Populates contribution html template using the given data. Returns the finished html
const generateParagraph = function (text) {
  const markup = `
  <p class="story-paragraph">${text}</p>`;
  return markup;
};
