$(document).ready(() => {

  $('#upvote').click(function(event) {
    event.preventDefault();

    $.post({
      url: '/api/upvotes',
      data: {user_id: 1, contribution_id: 3},
    });

  });
});
