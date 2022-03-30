const clearWrap = document.querySelector(".clear-button")
const clearButton = clearWrap.querySelector("button")
console.log(clearButton)


clearButton.addEventListener("click", clear)

function clear() {
  localStorage.clear();
  window.location.reload();
}