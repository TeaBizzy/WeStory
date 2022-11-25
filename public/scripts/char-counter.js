$(document).ready(function () {
  $("#story-text").on("input", function () {
    const inputLength = $(this).val().length;
    const count = 160 - inputLength;

    const counter = $(this).parent().find(".counter");
    counter.text(count);
    if (inputLength > 160) {
      counter.css("color", "#e65100");
    } else {
      counter.css("color", "#2196F3");
    }
  });

  $("#contribution-text").on("input", function () {
    const inputLength = $(this).val().length;
    const count = 160 - inputLength;

    const counter = $(this).parent().find(".counter");
    counter.text(count);
    if (inputLength > 160) {
      counter.css("color", "#e65100");
    } else {
      counter.css("color", "#2196F3");
    }
  });
});
