"use strict";
const anchors = document.querySelectorAll("a");

anchors.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
  });
});
