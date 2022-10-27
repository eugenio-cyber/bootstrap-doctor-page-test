let checkIconFirst = document.querySelector("#check-icon-mobile-01");
let checkIconSecond = document.querySelector("#check-icon-mobile-02");

checkIconFirst.addEventListener("click", () => {
  console.log(boxes);

  let src = checkIconFirst.src;

  if (src.includes("check-icon-mobile.png")) {
    src = src.split("/");
    src[src.length - 1] = "check-icon-mobile-checked.png";

    checkIconFirst.src = src.join("/");
  } else {
    src = src.split("/");
    src[src.length - 1] = "check-icon-mobile.png";

    checkIconFirst.src = src.join("/");
  }
});

checkIconSecond.addEventListener("click", () => {
  let src = checkIconSecond.src;

  if (src.includes("check-icon-mobile.png")) {
    src = src.split("/");
    src[src.length - 1] = "check-icon-mobile-checked.png";

    checkIconSecond.src = src.join("/");
  } else {
    src = src.split("/");
    src[src.length - 1] = "check-icon-mobile.png";

    checkIconSecond.src = src.join("/");
  }
});
