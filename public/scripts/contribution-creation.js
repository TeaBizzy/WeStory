// _____________________________________________________________________ //
// *--------------------------- Description ---------------------------* //

/*
  Captures user input into the new contribution form. Validates the entry, and
  makes an api request to create the new contribution, then redirects then renders the contribution.
*/

// _______________________________________________________________________ //
// *----------------------------- Functions -----------------------------* //
$(".error-empty-contribution").hide();
$(".error-exceed-max-chars").hide();

const submitContribution = function (event) {
  // Stop event bubbling
  event.preventDefault();

  // Setup variables
  const textArea = $("#contribution-text");
  const storyForm = textArea.parent();
  const content = textArea.val();
  const user_id = $("body").attr("data-userid");
  const story_id = $("body").attr("data-storyid");
  const contentLength = content.length;

  // Logs length, for testing... TODO: Replace this with a ui counter
  console.log(contentLength);

  // Error handling
  if (contentLength > 160) {
    $(".error-empty-contribution").hide();
    $(".error-exceed-max-chars").slideDown("slow");
    return;
  } else if (contentLength <= 0) {
    $(".error-empty-contribution").slideDown("slow");
    $(".error-exceed-max-chars").hide();
    return;
  } else {
    $(".error-empty-contribution").slideUp("slow");
    $(".error-exceed-max-chars").slideUp("slow");
  }

  // Build the params object
  const newContribution = {
    user_id,
    story_id,
    content,
  };

  // Create contribution, and render it.
  $.post("/api/contributions", newContribution).then((data) => {
    storyForm.trigger("reset");
    data.contribution.upvotes = 0;
    renderContributions([data.contribution]);
  });
};
