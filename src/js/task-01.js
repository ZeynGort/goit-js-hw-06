const refs = {
  item: document.querySelectorAll(".item"),
};
console.log("Number of categories: " + refs.item.length);
refs.item.forEach((elem) => {
  console.log("Category: " + elem.firstElementChild.textContent);
  console.log("Elements: " + elem.lastElementChild.children.length);
});
