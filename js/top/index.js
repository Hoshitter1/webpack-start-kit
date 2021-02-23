const btnClicked = () => {
  window.location.href = "page1.html";
};
document.querySelector(".btn").addEventListener("click", btnClicked);

const modelArray = [];
for (let i = 0; i < 7; i++) {
  modelArray.push(`<h3>モデル${i}</h3>`);
}
document.querySelector(".model-container").innerHTML = modelArray.join("");
