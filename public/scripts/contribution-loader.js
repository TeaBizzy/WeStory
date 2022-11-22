// _____________________________________________________________________ //
// *--------------------------- Description ---------------------------* //

/*
  Responsible for fetching contributions from the , converting them into elements
  and inserting them into the dom.
*/


// _______________________________________________________________________ //
// *----------------------------- Functions -----------------------------* //

$(document).ready(() =>{
  loadContributions();
})

// Fetches contributions from database using AJAX
const loadContributions = function() {
  const storyId = $('body').attr('data-storyid')
  $.get(`/api/contributions/${storyId}`)
    .then((data) => renderContributions(data.contributions))
};

const renderContributions = function(contributions) {
  for (const contribution of contributions) {
    const newContribution = generateContribution(contribution);
    $('.contributions-container').prepend(newContribution);
  }
};

// Populates contribution html template using the given data. Returns the finished html
const generateContribution = function(contribution) {
  const markup = `
  <article class="contribution">
    <div class="contribution-header">
      <i class="fa-solid fa-user fa-contribution"></i>
      <a href="/users/${contribution.owner_id}">
        <span class="contribution-creator-handle">@creator-username</span>
      </a>
    </div>
    <div class="contribution-content">
      <div class="upvote-icons">
        <i class="fa-solid fa-heart"></i>
        <span class="upvote-count">0</span>
      </div>
      <p class="contribution-paragraph">${contribution.content}</p>
    </div>
    <section class="contribution-footer">
      <div class="approve-button">
        <span class="approve">Approve</span>
        <i class="fa-solid fa-thumbs-up"></i>
      </div>
    </section>
  </article>`;
  return markup;
};

