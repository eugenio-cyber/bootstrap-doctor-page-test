let checkIconFirst = document.querySelector("#check-icon-mobile-01");
let checkIconSecond = document.querySelector("#check-icon-mobile-02");
let boxesFirst = document.querySelectorAll("#package__box--first");
let boxesSecond = document.querySelectorAll("#package__box--second");

boxesFirst.forEach((box) => {
  box.addEventListener("click", () => {
    boxesFirst.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
  });
});

boxesSecond.forEach((box) => {
  box.addEventListener("click", () => {
    boxesSecond.forEach((box) => {
      box.classList.remove("active");
    });
    box.classList.add("active");
  });
});

checkIconFirst.addEventListener("click", () => {
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
