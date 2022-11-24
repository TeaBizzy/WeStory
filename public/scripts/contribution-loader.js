// _____________________________________________________________________ //
// *--------------------------- Description ---------------------------* //

/*
  Responsible for fetching contributions from the , converting them into elements
  and inserting them into the dom.
*/

// _______________________________________________________________________ //
// *----------------------------- Functions -----------------------------* //

$(document).ready(() => {
  // loadContributions();
});

// Fetches contributions from database using AJAX
const loadContributions = function () {

  const storyId = $("body").attr("data-storyid");
  const promise = new Promise((resolve) => {
    $.get(`/api/contributions/${storyId}`).then((data) => {
      renderContributions(data.contributions)
      resolve(data.contributions)

      ).then(() => {
        $(`.upvote`).click(function(event) {
          const contributionId = event.target.id;
          event.preventDefault();
          $.post({
            url: '/api/upvotes',
            data: {user_id: userId, contribution_id: contributionId},
          })
            .then(()=> {
              location.reload();
            });
        });
        $('.upvote').trigger('reset');
    })

  });

  return promise;
}

const renderContributions = function (contributions) {
  const container = $(".contributions-container");
  for (const contribution of contributions) {
    const newContribution = generateContribution(contribution);
    container.prepend(newContribution);
  }
};

// Populates contribution html template using the given data. Returns the finished html
const generateContribution = function (contribution) {
  const markup = `
  <article class="contribution" data-contributionid="${contribution.contribution_id}">
    <div class="contribution-header">
      <i class="fa-solid fa-user fa-contribution"></i>
      <a href="/users/${contribution.owner_id}" style="text-decoration: none">
        <span class="contribution-creator-handle">@${contribution.owner_username}</span>
      </a>
    </div>
    <div class="contribution-content">
      <div class="upvote-icons">
        <i class="fa-solid fa-heart upvote" id="${contribution.contribution_id}"></i>
        <span class="upvote-count">${contribution.upvotes}</span>
      </div>
      <p class="contribution-paragraph">${contribution.content}</p>
    </div>
    <section class="contribution-footer">
      <div class="approve-button" style="display: none">
        <span class="approve">Approve</span>
        <i class="fa-solid fa-thumbs-up"></i>
      </div>
    </section>
  </article>`;
  return markup;
};
