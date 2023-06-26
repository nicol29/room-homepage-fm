const backButtons = document.querySelectorAll(".back-button");
const forwardButtons = document.querySelectorAll(".forward-button");

let activeIndex = 0;

forwardButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currentArticle = document.querySelector(`article[data-index="${activeIndex}"]`);
    let nextIndex;
  
    if (activeIndex + 1 < 3) {
      nextIndex = activeIndex + 1;
    } else {
      nextIndex = 0;
    }
  
    const nextArticle = document.querySelector(`article[data-index="${nextIndex}"]`);
  
    nextArticle.dataset.status = "comingFromRight";
    currentArticle.dataset.status = "leavingFromLeft";
  
    setTimeout(() => {
      activeIndex = nextIndex;
      nextArticle.dataset.status = "active";
    })
  });
})

backButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currentArticle = document.querySelector(`article[data-index="${activeIndex}"]`);
    let nextIndex;
  
    if (activeIndex - 1 >= 0) {
      nextIndex = activeIndex - 1;
    } else {
      nextIndex = forwardButtons.length - 1;
    }
  
    const nextArticle = document.querySelector(`article[data-index="${nextIndex}"]`);
  
    nextArticle.dataset.status = "comingFromLeft";
    currentArticle.dataset.status = "inactive";
  
    setTimeout(() => {
      activeIndex = nextIndex;
      nextArticle.dataset.status = "active";
    })
  });
})


const defaultHeader = document.querySelector(".default-header");
const expandedHeader = document.querySelector(".expanded-header");
let expandMenu = false;

function manageMenu () {
  expandMenu = !expandMenu;

  if (expandMenu) {
    defaultHeader.style.transform = "translateY(-100%) scale(0)";
    expandedHeader.style.transform = "translateY(0%)"
  } else {
    defaultHeader.style.transform = "translateY(0%) scale(1)";
    expandedHeader.style.transform = "translateY(-100%)"
  }
}