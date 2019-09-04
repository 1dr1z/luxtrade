window.addEventListener("keydown", e => {
  if (e.keyCode === 39) {
    document.querySelector(".images").scrollBy(20, 0);
  } else if (e.keyCode === 37) {
    document.querySelector(".images").scrollBy(-20, 0);
  }
});

const menu = document.querySelector(".main-menu");
menu.classList.remove("sticky");
const showPosition = 560;
window.addEventListener("scroll", e => {
  const position = window.pageYOffset;
  const links = document.querySelectorAll(".item");
  if (position > showPosition) {
    menu.classList.add("sticky");
    if (links.length === 3) {
      addHome();
    }
  } else if (position < showPosition) {
    menu.classList.remove("sticky");
    if (links.length === 4) {
      removeHome();
    }
  }
});

const removeHome = () => {
  const items = document.querySelector(".items");
  items.removeChild(items.childNodes[0]);
};

const addHome = () => {
  let node = document.createElement("li");
  let a = document.createElement("a");
  node.appendChild(a);
  a.setAttribute("href", "#head");
  let textnode = document.createTextNode("Pocetak");
  node.classList.add("item");
  a.appendChild(textnode);
  document.querySelector(".items").prepend(node);
};
