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
  const userId = $("body").attr("data-userid");
  const totalCount = {};

  const promise = new Promise((resolve) => {
    $.get(`/api/contributions/${storyId}`).then((data) => {
      console.log(totalCount);
      totalCountByUser(data.contributions);

      renderContributions(data.contributions, data.upvotedUser)
      resolve(data.contributions, data.upvotedUser)
    }).then(() => {
      $(`.upvote`).click(function(event) {
        const contributionId = event.target.id;
        event.preventDefault();
        $.post({
          url: '/api/upvotes',
          data: {user_id: userId, contribution_id: contributionId},
        })
          .then(()=> {
            let upvote = Number($(`#count${contributionId}`).html());
            const classCheck = $(`#count${contributionId}.upvote-red`).length;
            if (!classCheck) {
              $(`#count${contributionId}`).html(upvote + 1);
              $(`#${contributionId}`).addClass('upvote-red');
              $(`#count${contributionId}`).addClass('upvote-red');
            }
            if (classCheck) {
              $(`#count${contributionId}`).html(upvote - 1);
              $(`#${contributionId}`).removeClass('upvote-red');
              $(`#count${contributionId}`).removeClass('upvote-red');
            }
          });
      });
      $('.upvote').trigger('reset');
    });
  });

  const totalCountByUser = (upvoteData) => {
    for (const upvote of upvoteData) {
      totalCount[upvote.contribution_id] = upvote.upvotes;
    }
  };

  return promise;
}

const renderContributions = function (contributions, upvotedUsers) {
  const container = $(".contributions-container");
  for (const contribution of contributions) {
    let upvoted = false;
    for (const upvotedUser of upvotedUsers) {
      if (contribution.contribution_id === upvotedUser.contribution_id) {
        upvoted = true;
      }
    }
    const newContribution = generateContribution(contribution, upvoted);
    container.prepend(newContribution);
  }
};

// Populates contribution html template using the given data. Returns the finished html
const generateContribution = function (contribution, upvoted) {
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
        <i class="fa-solid fa-heart upvote ${upvoted ? "upvote-red" : ""}" id="${contribution.contribution_id}"></i>
        <span class="upvote-count ${upvoted ? "upvote-red" : ""}" id="count${contribution.contribution_id}">${contribution.upvotes}</span>
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

